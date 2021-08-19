<template>
  <div class="app-container">
    <headers />
    <router-view />
  </div>
</template>

<script>
import headers from './header.vue'
export default {
  name: 'Layout',
  components: {
    headers
  }
}
</script>

<style lang="less" scoped>
.app-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  transform-origin: 0 0;
  background-color: rgb(3, 12, 59);
}
</style>
