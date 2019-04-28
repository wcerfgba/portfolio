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
          <p>Here i am sasying something different.</p>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
          <p>Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things. Here i will say some things.</p>
          <p>Here i am sasying something different.</p>
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
.slice {
  height: 85vh;
  border-top: 1px solid #f00;
  border-bottom: 1px solid #f00;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
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
  padding: 0 1rem;
  background: #fcfcfc;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.right > * {
  margin: 0.5rem 0;
}

.right > *:first-child {
  margin-top: 1rem;
}

@media (min-width: 580px) {
  .slice {
    max-height: 85vh;
    height: 50vw;
    flex-direction: row;
    margin: 2.1rem;
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
}
</style>
