<template>
<div class="scrollplane">
  <div class="inner">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'ScrollPlane'
}
</script>

<style>
.scrollplane {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.inner {
  width: calc(100% + 50px);
  height: calc(100% + 50px);
  overflow: scroll;
}
</style>
