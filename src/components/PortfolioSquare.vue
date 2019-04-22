<template>
  <div class="ps-outer">
    <div class="icon" @click="doOpen">
      <img :src="icon" :alt="title">
    </div>
    <portal to="overlay" v-if="isOpen">
      <div class="overlay" @click.self="doClose">
        <div class="page">
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
    </portal>
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
      this.$root.blurMain = true
    },
    doClose: function () {
      this.isOpen = false
      this.$root.blurMain = false
    },
  },
}
</script>

<style scoped>
  .icon {
    width: 24%;
    margin: 1px;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: rgba(0, 0, 0, 0.01); */
    /* filter: blur(3px); */
  }

  .page {
    position: relative;
    margin: 1rem;
    background: #fcfcfc;
    box-shadow: 5px 5px 15px #0002;
    overflow: hidden;
    max-width: 60rem;
  }

  .photo {
    width: 100%;
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
    z-index: 2;
  }

  .close span {
    cursor: pointer;
    color: #888;
  }

  .description {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 20rem;
    float: right;
    padding: 1rem;
    padding: 2rem 1rem;
    height: 100%;
    box-shadow: 0 0 10px #0002;
    background: #fcfcfc;
  }

  .title {
    margin: 0;
  }
</style>
