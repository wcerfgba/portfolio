<template>
  <div class="card">
    <div class="far-away">
      <Floating class="far-away-floater">
        <img v-bind:src="icon" v-bind:alt="title" v-on:click.capture.stop="open">
      </Floating>
    </div>
    <div class="close-up" v-show="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Floating from './Floating.vue'

export default {
  data: function () {
    return {
      isOpen: false
    }
  },
  props: {
    icon: String,
    title: String
  },
  methods: {
    open: function () {
      this.isOpen = true;
    },
    close: function () {
      this.isOpen = false;
    }
  },
  components: {
    Floating
  }
}
</script>

<style>
.far-away {
  display: flex;
}

.far-away-floater {
  display: flex;
  cursor: pointer;
}

.close-up {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f00;
  margin: 3rem;
}
</style>
