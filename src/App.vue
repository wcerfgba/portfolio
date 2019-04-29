<template>
  <div class="app">
    <div class="slice">
      <div class="big-red">
        <p>I am a <span>multimedia artist</span> based in the <span>North West, United Kingdom</span>. My background is in computer science and software engineering. I am primarily interested in works which raise questions about <span>sociotechnical systems</span>, and our relationships with ourselves, other people, and the <span>natural world</span>.</p>
        <p>Thanks for visiting.</p>
      </div>
    </div>
    <div class="slice">
      <div class="left">
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
            The initial state of the oscillators has been chosen such that after approximately 60 seconds, the eponymous phrase <em>I CAN FEEL</em> appears in the image. <span class="action" @click="resetICanFeel">Click here</span> to reset the simulation to the beginning.
          </p>
          <p>
            simple algorithm, meaningless data, but embodies meaning to humans.
              what delineates our own sentience?
              how would we know if a machine is sentient?
            
          </p>
        </div>
      </div>
    </div>

    <div class="slice">
      <div class="left">
        <gradient-resonance></gradient-resonance>
      </div>
      <div class="right">
        <div class="right-inner">
          <h2>Gradient Resonance</h2>
          <span class="date">2019</span>
          <p>Inspired by Bridget Riley's op art and the wallpapers in the confessionals of recent seasons of RuPaul's Drag Race, <em>Gradient Resonance</em> is an interactive op art piece. Move your cursor over or tap on the canvas to create a linear gradient from two full-saturation colours.</p>
          <p>The resulting gradient is re-imposed on top of itself in a pattern. This creates an effect of different squares fading in from the top and bottom of the piece. The prominence of the effect will vary depending on the colours chosen for the gradient, and some interesting combinations have been highlighted on the piece.</p>
          <p>
            themes???
          </p>
        </div>
      </div>
    </div>

    <div class="slice">
      <div class="left">
        <img src="./assets/arches-photo.jpg">
      </div>
      <div class="right">
        <div class="right-inner">
          <h2>Arches at Night in Leyland</h2>
          <span class="date">2019</span>
          <p>
            colour
            'capitalism' looming over
            light pollution
            urban density

            need to crop these
          </p>
        </div>
      </div>
    </div>

    <div class="slice">
      <div class="left">
        <img src="./assets/monalisa-photo.png">
      </div>
      <div class="right">
        <div class="right-inner">
          <h2>Mona Lisa in Rectanges</h2>
          <span class="date">2019</span>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
        </div>
      </div>
    </div>

    <div class="slice">
      <div class="left">
        <looking-for-work></looking-for-work>
      </div>
      <div class="right">
        <div class="right-inner">
          <h2>Looking for work</h2>
          <span class="date">2019</span>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
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
  methods: {
    resetICanFeel: function () {
      this.$refs.icanfeel.reset()
    }
  }
}
</script>

<style scoped>
.slice {
  height: 85vh;
  border-top: 1px solid #f00;
  border-bottom: 1px solid #f00;
  display: flex;
  flex-direction: column;
  margin: 2rem 0.5rem;
}

.slice:first-child {
  margin-top: 0.5rem;
}

.left, .right {
  height: 50%;
  overflow: auto;
}

.left {
  background: #fee;
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
  padding: 0.5rem;
}

.right-inner {
  width: 90%;
  max-height: 100%;
  column-width: 15rem;
}

.right-inner > * {
  margin: 0;
  padding: 0.5rem;
}

.big-red {
  color: #fcfcfc;
  background: #f00;
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
  cursor: pointer;
  border-bottom: 1px dotted #fcfcfc;
}

.date {
  color: #666;
}

.superscript {
  font-size: 0.7em;
  position: relative;
  top: -0.5em;
}

.action {
  cursor: pointer;
  color: #f00;
  user-select: none;
}

@media (min-width: 580px) {
  .slice {
    max-height: 85vh;
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
    max-height: unset;
    column-width: unset;
  }
}
</style>
