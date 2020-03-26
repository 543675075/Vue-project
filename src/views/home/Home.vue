<template>
  <div>
    <nav-bar class="nav-bar">
      <h2 slot="middle">购物街</h2>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/nav/nav'
export default {
  name: "Home",
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>
  .nav-bar{
    background-color: rgba(243, 78, 78, 0.644);
    h2{
      margin: 0;
      text-align: center;
      color: #fff;
      font-size: 20px;
    }
  }
</style>