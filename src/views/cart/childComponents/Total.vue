<template>
  <div class='total'>
    <div class="all-btn">
      <img src="~assets/img/cart/tick.svg" class="check-btn" @click="allChecked" :class="{active:allActive}">
      <span>全选</span>
    </div>
    <div class="total-price">合计：￥{{totalPrice}}</div>
    <div class="buy">结算</div>
  </div>
</template>



<script>
  export default {
    name: 'Total',
    components: {},
   
    props: {
      cartGoods: {
        type: Array,
        default: []
      }
    },
    computed: {
      totalPrice() {
        return this.cartGoods.filter((value, index, arr) => {
          return value.checked
        }).reduce((total, value) => {
          return total + value.price * value.count
        }, 0).toFixed(2)
      },
      allActive() {
       if(this.cartGoods.length === 0) return false
       return !this.cartGoods.find(item=>!item.checked)
      }
    },
    methods: {
      allChecked() {
        if(this. allActive){
          this.cartGoods.forEach(item=>item.checked =false)
        }else{
          this.cartGoods.forEach(item=>item.checked =true)

        }

      }
    },

  }
</script>
<style lang='less' scoped>
  .total {
    position: fixed;
    display: flex;
    bottom: 48px;
    left: 0;
    right: 0;
    height: 48px;
    line-height: 48px;
    background: #ddd;

    .all-btn {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;

      .check-btn {
        /* background-color: #fff; */
        margin-right: 5px;
        border: 1px solid #ccc;
        border-radius: 50%;
      }
    }

    .total-price {
      flex: 2;
      padding-left: 10px;
    }

    .buy {
      flex: 1;
      background-color: #ff5777;
      color: #fff;
      text-align: center;
    }

    .active {
      background-color: #ff5777;
      border-radius: 50%;
    }
  }
</style>