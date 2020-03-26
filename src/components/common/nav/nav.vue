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
    height: 50px;
    line-height: 50px;
  }
</style>