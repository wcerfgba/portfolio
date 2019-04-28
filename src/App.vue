<template>
  <div class="app">
      <div class="slice">
        <div class="left">
          <i-can-feel></i-can-feel>
        </div>
        <div class="right">
          <h2>I CAN FEEL</h2>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
        </div>
      </div>

      <div class="slice">
        <div class="left">
          <gradient-resonance></gradient-resonance>
        </div>
        <div class="right">
          <h2>Gradient Resonance</h2>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
        </div>
      </div>

      <div class="slice">
        <div class="left">
          <img src="./assets/arches-photo.jpg">
        </div>
        <div class="right">
          <h2>Arches at Night in Leyland</h2>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
        </div>
      </div>

      <div class="slice">
        <div class="left">
          <img src="./assets/monalisa-photo.png">
        </div>
        <div class="right">
          <h2>Mona Lisa in Rectanges</h2>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
        </div>
      </div>

      <div class="slice">
        <div class="left">
          <looking-for-work></looking-for-work>
        </div>
        <div class="right">
          <h2>Looking for work</h2>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
        </div>
      </div>

      <!-- <div class="slice contact">
        <h2>Contact</h2>
        <textarea name="" id="" placeholder="Hi John,
Can you email me at me@place.net?
Thanks!
Name"></textarea>
        <input type="submit" value="Send">
      </div> -->
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
  }
}
</script>

<style scoped>
@media (min-width: 800px) {
  .app {

  }

  .slice {
    max-height: 60rem;
    height: calc(50vw - 2.2rem);
    border-top: 0.1rem solid #f00;
    border-bottom: 0.1rem solid #f00;
    display: flex;
    flex-direction: row;
    margin: 2rem;
  }

  .left, .right {
    width: 50%;
    overflow: hidden;
  }

  .left {
    background: #fee;
    padding: 0 1rem;
  }

  .left > * {
    height: 100%;
    display: block;
    margin: 0 auto;
  }

  .right {
    padding: 0 1rem;
  }
}
</style>
