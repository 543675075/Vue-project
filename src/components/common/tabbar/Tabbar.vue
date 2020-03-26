<template>
  <div class="tab-bar">
    <tabbar-item class="tabbar-item" path="/home">
      <img src="~assets/img/tabbar/home.svg" slot="img" />
      <img src="~assets/img/tabbar/home_active.svg" slot="active" />
      <p slot="text">首页</p>
    </tabbar-item>
    <tabbar-item class="tabbar-item" path="/category">
      <img src="~assets/img/tabbar/category.svg" slot="img" />
      <img src="~assets/img/tabbar/category_active.svg" slot="active" />
      <p slot="text">分类</p>
    </tabbar-item>
    <tabbar-item class="tabbar-item" path="/cart">
      <img src="~assets/img/tabbar/shopcart.svg" slot="img" />
      <img src="~assets/img/tabbar/shopcart_active.svg" slot="active" />
      <p slot="text">购物车</p>
    </tabbar-item>
    <tabbar-item class="tabbar-item" path="/profile">
      <img src="~assets/img/tabbar/profile.svg" slot="img" />
      <img src="~assets/img/tabbar/profile_active.svg" slot="active" />
      <p slot="text">我的</p>
    </tabbar-item>
  </div>
</template>

<script>
import TabbarItem from "./Tabbar-item";
export default {
  name: "Tabbar",
  components: {
    TabbarItem
  }
};
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  display: flex;
  bottom: 0;
  right: 0;
  left: 0;
  height: 48px;
  padding-top: 5px;
  box-sizing: border-box;
  background-color: #f6f6f6;
  z-index: 10;
  .tabbar-item {
    position: relative;
    img,
    p {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    img {
      width: 20px;
      height: 20px;
    }
    p {
      bottom: -10px;
      font-size: 14px;
    }
  }
}
</style>

