<template>
  <div class="gradient-resonance" ref="outer">
    <canvas ref="canvas"></canvas>
    <div class="gr-overlay">
      <div class="point" style="left: 0%; top: 16.666%;"></div>
      <div class="point" style="left: 0%; top: 11.333%;"></div>
      <div class="point" style="left: 50%; top: 33.333%;"></div>
      <div class="point" style="left: 71.3%; top: 5.6%;"></div>
      <div class="point" style="left: 83.333%; top: 67.5%;"></div>
      <div class="point" style="left: 12.5%; top: 98.5%;"></div>
      <div class="point" style="left: 46.1%; top: 95.27%;"></div>
      <div class="hues">{{ topHue }} -> {{ bottomHue }}</div>
    </div>
  </div>
</template>

<script>
import GlslCanvas from '../../vendor/glslCanvas/src/GlslCanvas'

const frag = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;



// From https://github.com/Jam3/glsl-hsl2rgb

float hue2rgb(float f1, float f2, float hue) {
    if (hue < 0.0)
        hue += 1.0;
    else if (hue > 1.0)
        hue -= 1.0;
    float res;
    if ((6.0 * hue) < 1.0)
        res = f1 + (f2 - f1) * 6.0 * hue;
    else if ((2.0 * hue) < 1.0)
        res = f2;
    else if ((3.0 * hue) < 2.0)
        res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;
    else
        res = f1;
    return res;
}

vec3 hsl2rgb(vec3 hsl) {
    vec3 rgb;
    
    if (hsl.y == 0.0) {
        rgb = vec3(hsl.z); // Luminance
    } else {
        float f2;
        
        if (hsl.z < 0.5)
            f2 = hsl.z * (1.0 + hsl.y);
        else
            f2 = hsl.z + hsl.y - hsl.y * hsl.z;
            
        float f1 = 2.0 * hsl.z - f2;
        
        rgb.r = hue2rgb(f1, f2, hsl.x + (1.0/3.0));
        rgb.g = hue2rgb(f1, f2, hsl.x);
        rgb.b = hue2rgb(f1, f2, hsl.x - (1.0/3.0));
    }   
    return rgb;
}

vec3 hsl2rgb(float h, float s, float l) {
    return hsl2rgb(vec3(h, s, l));
}


// Gradient Resonance

// The background is a simple gradient from top to bottom.
vec4 bg(vec2 st) {
    vec2 mouse_uv = u_mouse.xy / u_resolution.xy;
    float hue_top =  mod(mouse_uv.x, 1.);
    float hue_bottom = mod(mouse_uv.x + mouse_uv.y, 1.);
    vec3 color_bottom = hsl2rgb(vec3(hue_bottom, 1., 0.5));
    vec3 color_top = hsl2rgb(vec3(hue_top, 1., 0.5));

    vec3 color = st.y * color_top + (1. - st.y) * color_bottom;  
    
    return vec4(color, 1.);
}

// We draw a grid of squares spaced by unit width. Each column is slightly 
// offset along the vertical. Each square has the same gradient as the
// background.
vec4 square(vec2 st) {
    float scale = 0.15;
    float offset_x = 0.106;
    float column = (st.x + offset_x) / scale;
    float offset_y = offset_x + 0.09 * floor(column);
    float row = (st.y + offset_y) / scale;
    // TODO: recalc as inset squares over whole grid. experiment with spacing

    vec2 square_st = vec2(column - floor(column), row - floor(row));
    float a = floor((mod(floor(column), 2.) + mod(floor(row), 2.))  / 2.);

    return vec4(bg(square_st).xyz, a);
}

// The painting is a composition of the squares on top of the background.
void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.y;
    if (u_resolution.x < u_resolution.y) {
        st = gl_FragCoord.xy/u_resolution.x;
    }

    vec4 bg = bg(st);
    vec4 square = square(st);
    
    vec3 color = (bg.xyz * (1. - square.a)) + (square.xyz * square.a);
        
    gl_FragColor = vec4(color, 1.);
}
`

export default {
  name: 'GradientResonance',
  data: function () {
    return {
      glslCanvas: null,
      topHue: 0,
      bottomHue: 0,
    }
  },
  methods: {
    rescale: function () {
      const minParentDim = Math.min(
        this.$refs.outer.parentElement.clientWidth,
        this.$refs.outer.parentElement.clientHeight
      )
      this.$refs.outer.style.width = minParentDim + 'px'
      this.$refs.outer.style.height = minParentDim + 'px'
      this.$refs.canvas.width = minParentDim
      this.$refs.canvas.height = minParentDim
    },
    mouseListener: function (e) {
      const mouse_xy = this.glslCanvas.uniforms.u_mouse.value
      const mouse_res = this.glslCanvas.uniforms.u_resolution.value
      const mouse_uv = [
        mouse_xy[0] / mouse_res[0], 
        mouse_xy[1] / mouse_res[1],
      ]
      this.topHue = (360 * mouse_uv[0]).toFixed(2)
      this.bottomHue = ((360 * (mouse_uv[0] + mouse_uv[1])) % 360).toFixed(2)
    }
  },
  mounted: function () {
    this.glslCanvas = new GlslCanvas(this.$refs.canvas, {
      fragmentString: frag
    }, {
      mouseListener: this.mouseListener
    })
    this.rescale()
    window.addEventListener('resize', this.rescale)
  }
}
</script>

<style scoped>
.gradient-resonance {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.inner {
  position: relative;
}

canvas {
  display: block;
}

.gr-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.point {
  position: absolute;
  font-size: 16px;
  padding-left: 4px;
  mix-blend-mode: difference;
  color: #fff;
}

.point::before {
  content: '';
  position: absolute;
  left: -2px;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  margin-right: 2px;
  background: #fff;
}

.hues {
  position: absolute;
  font-size: 16px;
  padding-left: 4px;
  mix-blend-mode: difference;
  color: #fff;
  right: 0;
  bottom: 0;
}
</style>
