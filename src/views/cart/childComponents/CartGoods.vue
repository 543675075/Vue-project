<template>
  <div class="cart-goods" v-if="Object.keys(cartGoods).length !=0 ">
    <div class="cart-goods-item" v-for="(item,index) in cartGoods" :key="index">
      <div >
        <img src="~assets/img/cart/tick.svg" :class="{active:active}" class="check-btn" @click="check(index)">
      </div>
      <img :src="item.showImg" alt  class="show-img"/>
      <div class="name">
        <p class="title">{{item.title}}</p>
        <p class="desc">{{item.desc}}</p>
        <div class="count">
          <span class="price">¥{{item.price}}</span>
          <span>x{{item.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartGoods",
  props: {
    cartGoods: {
      type: Array,
      default: []
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    check(index){
      this.$emit("check",index)
    }
  },
};
</script>

<style lang="less" scoped>
.cart-goods {
  width: 100vw;
  
  p {
    margin: 0;
  }
  .cart-goods-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    .check-btn{
      border: 1px solid #ccc;
      border-radius: 50%;
    }
    .show-img {
      width: 20%;
      height: 100px;
      padding: 0 10px 0 5px;
    }
    .name {
      display: flex;
      // flex: 1;
      width: 70%;
      flex-direction: column;
      .hide() {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .title {
        .hide;
      }
      .desc {
        .hide;
        color: #aaa;
        font-size: 14px;
        padding: 10px 0;
      }
      .count {
        display: flex;
        justify-content: space-between;
        .price{
          color: #ff5777;
        }
      }
    }
  }
}
.active{
  background-color: #ff5777;
  border-radius: 50%;
}
</style>