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
    height: 60rem;
    border-top: 1px solid red;
    border-bottom: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem;
  }

  .left {
    flex: 1;
    width: 100%;
    margin: 0 auto;
  }

  .right {
    flex : 1;
  }

  .left > * {
    height: 100%;
  }
}
</style>
