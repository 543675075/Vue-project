<template>
  <nav-bar class="cart-nav">
    <h2 slot="middle">购物车</h2>
    <span slot="right">({{this.$store.state.cartGoods.length}})</span>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/nav/nav";
export default {
  name: "CartNav",
  components: {
    NavBar
  }
};
</script>

<style lang="less" scoped>
.cart-nav {
  background-color: #ff5777;
  display: flex;
  justify-content: center;
  h2{
    margin: 0;
    text-align: center;
    color: #fff;
  }
  span{
    color: #fff;
  }
}
</style>