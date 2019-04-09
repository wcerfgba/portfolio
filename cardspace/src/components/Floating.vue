<template>
  <div class="floating">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Floating'
}
</script>


<style scoped>
.floating {
  animation-name: floating;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}

@keyframes floating {
  from {
    transform: translateY(0);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  }

  to {
    transform: translateY(-6px);
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5);
  }
}
</style>

