<template>
  <div id="app" v-on:click="closeCards">
    <Card
      title="yaboi"
      icon="favicon.ico"
      ref="card1"
    >
      <p>yeeeah</p>
    </Card>
    <Card
      title="yaboi"
      icon="favicon.ico"
      ref="card2"
    >
      <p>yeeeah</p>
    </Card>
    <Card
      title="yaboi"
      icon="favicon.ico"
      ref="card3"
    >
      <p>yeeeah</p>
    </Card>
  </div>
</template>

<script>
import { values, filter, map } from 'ramda'
import Card from './components/Card.vue'

export default {
  name: 'app',
  components: {
    Card
  },
  data: function () {
    return {
    }
  },
  methods: {
    cards: function () {
      return values(filter(ref => ref.$options._componentTag === 'Card', this.$refs || []))
    },
    closeCards: function () {
      map(card => card.close(), this.cards())
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
