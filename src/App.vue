<template>
  <div class="app">
    <div class="slice" :style="borders">
      <div class="big-red" :style="background_100">
        <p>I am a <span>multimedia artist</span> based in <span>North West England</span>. My background is in computer science and software engineering. I love to create. I am primarily interested in works which raise questions about <span>sociotechnical systems</span>, and our relationships with ourselves, other people, and the <span>natural world</span>.</p>
        <p>Thanks for visiting.</p>
      </div>
    </div>
    <div class="slice" :style="borders">
      <div class="left" :style="background_2p5">
        <i-can-feel ref="icanfeel"></i-can-feel>
      </div>
      <div class="right">
        <div class="right-inner">
          <h2>I CAN FEEL</h2>
          <span class="date">2018</span>
          <p>
            The piece is composed of a 13x13 grid of squares, each of which changes between black and white at a set rate. The frequency of each oscillator is chosen such that the grid will eventually produce every 13x13 black and white picture, before looping. This takes approximately 10<span class="superscript">409</span> years.
          </p>
          <p>
            The initial state of the oscillators has been chosen such that after approximately 60 seconds, the eponymous phrase <em>I CAN FEEL</em> appears in the image. <button class="action" :style="color" @click="resetICanFeel">Click here</button> to reset the simulation to the beginning.
          </p>
          <p>
            <em>I CAN FEEL</em> invites us to observe the chaotic output of a mathematical system and find something meaningful. A set of lights becomes a writing system, a phrase, an emotional self-recognition.
          </p>
          <p>
            This meaningful image is just one shard in a vast library of meaningless arrangements of squares. As we continue to watch the piece, we can recognise smaller patterns in the pixels. One might consider what shapes our concept of 'meaning' to be so specific.
          </p>
          <p>
            It is important to consider that the system of oscillators is not aware of its own arrangement: if we rearranged the squares into a line or circle, each square would continue to change at the same rate, and the eponymous pattern would not appear. This raises questions around machine sentience: if a machine is sentient but not aware of how it is structured and perceived by human operators, how could it signal its sentience to us?
          </p>
        </div>
      </div>
    </div>

    <div class="slice" :style="borders">
      <div class="left" :style="background_2p5">
        <gradient-resonance></gradient-resonance>
      </div>
      <div class="right">
        <div class="right-inner">
          <h2>Gradient Resonance</h2>
          <span class="date">2019</span>
          <p>
            Inspired by Bridget Riley's op art and the wallpapers in the confessionals of recent seasons of RuPaul's Drag Race, <em>Gradient Resonance</em> is an interactive op art piece. Move your cursor over or tap on the canvas to create a linear gradient from two full-saturation colours.
          </p>
          <p>
            The gradient is re-imposed on top of itself in a pattern. As the gradient is translated with respect to itself, different segments of the squares blend in to the background. This creates an effect of squares fading in from the top and bottom of the piece. The prominence of the effect varies depending on the colours chosen for the gradient, and some interesting combinations have been highlighted. The hue values are displayed in the lower left, allowing the piece to be used as a tool for exploring colour interactions.
          </p>
        </div>
      </div>
    </div>

    <div class="slice" :style="borders">
      <div class="left" :style="background_2p5">
        <div class="image-wrapper">
          <img src="./assets/arches-photo.jpg">
        </div>
      </div>
      <div class="right">
        <div class="right-inner">
          <h2>Arches at Night</h2>
          <span class="date">2019</span>
          <p>
            A composition of two photographs taken from a window in a Lancashire town one spring night. The first photograph is a 20" exposure, yielding a very bright image that shows detail on the backs of the terraced houses from a dim red light, the teal from a frosted window on a more modern building. The second photo is a 5" exposure, capturing the burnt colours of the sky, and the sharp, bright light of the McDonald's arches peering over the houses. The two photos have been stitched together, to capture both the realistic colours of the sky and the detail in the buildings only shown by a long exposure.
          </p>
          <p>
            The hard delineation of regions of different colours reminds me of collage, and this speaks to the history of the town. Over the last 200 years new buildings and businesses have cropped up, and each decade has left its imprint on the town, in the forms of buildings, lighting, and transport infrastructure. Each successive generation must fit around the existing institutions,and so developing our towns and cities gets increasing complex and difficult over time.
          </p>
          <p>
            <a :style="color" href="https://flic.kr/p/TDPEXJ" target="_blank">Click here</a> to view the full-resolution image on Flickr.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ICanFeel from './components/I_CAN_FEEL'
import GradientResonance from './components/GradientResonance'
import LookingForWork from './components/LookingForWork'

export default {
  name: 'app',
  components: {
    ICanFeel,
    GradientResonance,
    LookingForWork
  },
  data: function () {
    return {
      t: 0.16666
    }
  },
  computed: {
    hue: function () {
      return (300 + 90 * 2 * Math.abs(0.5 - this.t)) % 360
    },
    hsl_100: function () {
      return `hsl(${this.hue}, 100%, 50%)`
    },
    hsl_2p5: function () {
      return `hsl(${this.hue}, 100%, 95%)`
    },
    borders: function () {
      return `
        border-top: 1px solid ${this.hsl_100};
        border-bottom: 1px solid ${this.hsl_100};
      `
    },
    background_100: function () {
      return `
        background: ${this.hsl_100};
      `
    },
    background_2p5: function () {
      return `
        background: ${this.hsl_2p5};
      `
    },
    color: function () {
      return `
        color: ${this.hsl_100};
      `
    },
  },
  mounted: function () {
    window.setInterval(this.tick, 1000)
    window.addEventListener('scroll', this.icanfeelScrollListener)
  },
  methods: {
    resetICanFeel: function () {
      this.$refs.icanfeel.resetArt()
    },
    tick: function () {
      this.t = (this.t + (1/600)) % 1
    },
    icanfeelScrollListener: function () {
      var passed = this.$refs.icanfeel.$el.getBoundingClientRect().bottom < window.innerHeight;
      if (passed) {
        window.removeEventListener('scroll', this.icanfeelScrollListener)
        this.$refs.icanfeel.animate()
      }
    },
  }
}
</script>

<style scoped>
.slice {
  height: 86vh;
  display: flex;
  flex-direction: column;
  margin: 2rem 0.5rem;
}

@supports (-moz-appearance: meterbar) { 
  .slice {
    height: 480px;
  }
}

.slice:first-child {
  margin-top: 1rem;
}

.left, .right {
  height: 50%;
  overflow: auto;
}

.left {
  display: flex;
}

.left > * {
  display: block;
  margin: auto;
  width: 100%;
  height: auto;
}

.right {
  background: #fcfcfc;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1.5rem;
}

.right-inner {
  width: 90%;
  max-height: 100%;
  column-width: 15rem;
}

.right-inner > * {
  margin: 0;
  padding: 0;
}

.right-inner > p {
  margin: 1rem 0;
  padding: 0;
}

.big-red {
  color: #fcfcfc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
}

.big-red > * {
  margin: 0.5rem 0;
  font-size: 1.5rem;
}

.big-red span {
  border-bottom: 1px dotted #fcfcfc;
}

.date {
  display: block;
  color: #666;
}

.superscript {
  font-size: 0.7em;
  position: relative;
  top: -0.5em;
}

.action, a, a:link, a:visited, a:hover, a:active {
  display: inline;
  border: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
  margin: 0;
  padding: 0;
  outline: none;
  cursor: pointer;
  text-decoration: none;
}

.image-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.image-wrapper img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
}

@media (min-width: 580px) {
  .slice {
    max-height: 86vh;
    height: 50vw;
    flex-direction: row;
    margin: 2.1rem;
  }

  .slice:first-child {
    margin-top: 2.1rem;
  }

  .left, .right {
    height: 100%;
    width: 50%;
  }

  .left {
    background: #fee;
  }

  .right {
    flex-wrap: nowrap;
  }

  .right-inner {
    width: 100%;
    max-height: unset;
    column-width: unset;
  }
}
</style>
