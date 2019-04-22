<template>
  <div class="ps-outer">
    <div class="icon" @click="doOpen">
      <img :src="icon" :alt="title">
    </div>
    <portal to="overlay" v-if="isOpen">
      <div class="overlay" @click.self="doClose">
        <div class="page">
          <scroll-plane class="photo">
            <img :src="photo">
          </scroll-plane>
          <div class="close" @click="doClose">
            <svg viewBox="0 0 12 12">
              <path d="M0,0l12,12z" />
              <path d="M0,12l12,-12z" />
            </svg>
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
import ScrollPlane from './ScrollPlane'

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
  components: {
    ScrollPlane
  }
}
</script>

<style scoped>
  .ps-outer {
    width: 24%;
    margin: 1px;  
  }

  .icon {
    width: 100%;
  }

  .icon img {
    width: 100%;
    display: block;
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
  }

  .close {
    position: absolute;
    top: unset;
    bottom: 8,5rem;
    right: 0;
    height: 1rem;
    width: 1rem;
    margin: 1.1rem;
    z-index: 2;
    cursor: pointer;
  }

  .close svg {
    stroke: #888;
  }

  .title {
    margin: 0;
  }

  .page {
    position: relative;
    margin: 1rem;
    background: #fcfcfc;
    box-shadow: 5px 5px 15px #0002;
    overflow: hidden;
    max-width: 60rem;
    height: calc(100% - 2rem);
  }

  .photo {
    height: calc(100% - 12rem);
    width: 100%;
  }

  .photo img {
    max-width: 200%;
    max-height: 200%;
  }

  .description {
    position: absolute;
    top: unset;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 12rem;
    padding: 2.4rem 1.8rem;
    box-shadow: 0 0 10px #0002;
    background: #fcfcfc;
    overflow: scroll;
  }

  @media (min-width: 800px) {
    .photo {
      width: calc(100% - 20rem);
      height: 100%;
    }

    .description {
      top: 0;
      left: unset;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 20rem;
      padding: 2.8rem;
    }

    .close {
      top: 0;
      bottom: unset;
      margin: 1rem;
    }
  }
</style>
