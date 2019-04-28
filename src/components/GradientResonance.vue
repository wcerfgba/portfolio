<template>
  <div class="gradient-resonance" ref="outer">
      <canvas ref="canvas"></canvas>
      <div class="gr-overlay">
        <div class="point" style="left: 0%; top: 16.666%;">Red/Violet</div>
        <div class="point" style="left: 0%; top: 11.333%;">Red/Violet -> Pinker</div>
        <div class="point" style="left: 50%; top: 33.333%;">Cyan/Yellow</div>
        <div class="point" style="left: 71.3%; top: 5.6%;">Brilliant Blue,<br>Purple Tint</div>
        <div class="point" style="left: 83.333%; top: 70%;"><span style="display: block; transform: translate(-2rem, 0.5rem)">Violet/Orange-Yellow</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import GlslCanvas from 'glslCanvas'

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
  methods: {
    rescale: function () {
      const minParentDim = Math.min(
        this.$refs.outer.parentElement.clientWidth,
        this.$refs.outer.parentElement.clientHeight
      )
      this.$refs.canvas.width = minParentDim
      this.$refs.canvas.height = minParentDim
      this.$refs.outer.style.width = minParentDim + 'px'
      this.$refs.outer.style.height = minParentDim + 'px'
    }
  },
  mounted: function () {
    (new GlslCanvas(this.$refs.canvas)).load(frag)
    this.rescale()
    window.addEventListener('resize', this.rescale)
  }
}
</script>

<style scoped>
.gradient-resonance {
  width: 100%;
  height: 100%;
  min-width: 30rem;
  position: relative;
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
  font-size: 0.8rem;
  font-family: sans-serif;
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
</style>
