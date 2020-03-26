<template>
  <nav>
    <slot name="left"/>
    <slot name="middle"/>
    <slot name="right"/>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style lang="less" scoped>
  nav{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;
    height: 50px;
    line-height: 50px;
  }
</style>