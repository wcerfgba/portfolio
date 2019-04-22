<template>
  <div class="outer">
    <div class="icon" @click="doOpen">
      <img :src="icon" :alt="title">
    </div>
    <div class="page" v-show="isOpen">
      <div class="photo">
        <img :src="photo">
      </div>
      <div class="close">
        <span @click="doClose">×</span>
      </div>
      <div class="description">
        <h2 class="title">{{ title }}</h2>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioSquare',
  props: ['icon', 'title', 'photo'],
  data: function () {
    return {
      isOpen: false
    }
  },
  methods: {
    doOpen: function () {
      this.isOpen = true
    },
    doClose: function () {
      this.isOpen = false
    },
  },
}
</script>

<style scoped>
  .icon {
    width: 24%;
    margin: 1px;
  }

  .page {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 1rem;
    background: #fcfcfc;
    box-shadow: 7px 6px 20px -9px #0008;
    /* display: grid;
    grid-template: 
      "photo close"       auto
      "photo description" auto
      / auto auto; */
  }

  .photo {
    width: 66.666%;
    float: left;
    overflow: hidden;
  }

  .photo img {
    height: 100%;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    height: 1rem;
    width: 1rem;
    margin: 0.5rem;
  }

  .close span {
    cursor: pointer;
    color: #888;
  }

  .description {
    width: 33.333%;
    float: right;
    padding: 1rem;
  }

  .title {
    margin: 0;
  }
</style>
