<template>
  <div class="header">
    <div class="header-box">
      <div class="weather"></div>
      <div class="titles">{{ title }}</div>
      <div class="home"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    title() {
      return this.$route.meta.title
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: @header-height;
  position: relative;
  background: url('../../assets/images/header-bg.png') center no-repeat;
  position: relative;
  .header-box {
    display: flex;
    align-items: center;
    height: 70px;
    position: relative;
  }
  .titles {
    color: #fff;
    font-size: 36px;
    width: 540px;
    position: absolute;
    left: 50%;
    margin-left: -270px;
  }
}
</style>
