<template>
  <div class="bottom-bar">
    <ul class="left-bar">
      <li>
        <div class="img-wrapper">
          <img src="~assets/img/detail/detail_bottom.png" class="service" />
        </div>
        <span>客服</span>
      </li>
      <li>
        <div class="img-wrapper">
          <img src="~assets/img/detail/detail_bottom.png" class="store" />
        </div>
        <span>店铺</span>
      </li>
      <li>
        <div class="img-wrapper">
          <img src="~assets/img/detail/detail_bottom.png" class="collection" />
        </div>
        <span>收藏</span>
      </li>
    </ul>
    <div class="right-bar">
      <div class="cart-btn" @click="cartClick">购物车</div>
      <div class="buy-btn">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  methods: {
    cartClick(){
      this.$emit("cartClick")
    }
  },
};
</script>

<style lang="less" scoped>
.bottom-bar {
  position: fixed;
  display: flex;
  // justify-content: space-evenly;
  width: 100%;
  bottom: 0;
  height: 48px;
  background-color: #fff;
  .left-bar {
    flex: 1;
    display: flex;
    color: #555;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .img-wrapper {
        width: 22px;
        height: 22px;
        overflow: hidden;
        img {
          position: relative;
          width: 100%;
        }
        .service{
          top: -27px;
        }
        .store{
          top: -52px;
        }
        .collection{
          top: -98px;
        }
      }
    }
  }
  .right-bar {
    flex: 1;
    display: flex;
    line-height: 48px;
    text-align: center;
    .cart-btn {
      flex: 1;
      background: gold;
      color: #555;
    }
    .buy-btn {
      flex: 1;
      background-color: #ff5777;
      color: #fff;
    }
  }
}
</style>