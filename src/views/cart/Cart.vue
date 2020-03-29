<template>
  <div>
    <cart-nav />
    
    <div class="cart-goods">
      <div class="cart-goods-item" v-for="(item,index) in cartGoods" :key="index">
        <input type="checkbox" name="cart">
        <img :src="item.showImg" alt="">
        <div class="name">
          <p class="title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
          <div class="count">
            <span>{{item.price}}</span>
            <span>x1</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartNav from "./childComponents/CartNav";
export default {
  name: "Cart",
  data() {
    return {
      cartGoods: []
    }
  },
  components: {
    CartNav
  },
  created() {
    console.log(this.$store.state)
    this.cartGoods = this.$store.state.cartGoods
  },
};
</script>

<style lang="less" scoped>
  .cart-goods{
    width: 100%;
    p{
      margin: 0;
      width: 100%;
    }
    .cart-goods-item{
      display: flex;
      input[type="checkbox"]{
        // flex: 1;
      }
      img{
        // flex: 3;
        width: 60px;
        padding: 0 10px 0 5px;
      }
      .name{
        // flex: 6;
        
        display: flex;
        flex-direction: column;
        .hide(){
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .title{
          .hide;
        }
        .desc{
          .hide;
          padding: 10px 0;
        }
        .count{
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
</style>