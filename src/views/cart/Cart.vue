<template>
  <div>
    <cart-nav />

    <cart-goods :cartGoods="cartGoods" />
    <total :cartGoods="cartGoods" />
  </div>
</template>

<script>
import CartNav from "./childComponents/CartNav";
import CartGoods from "./childComponents/CartGoods";
import Total from './childComponents/Total'

export default {
  name: "Cart",
  data() {
    return {
      cartGoods: [],
      index: 0
    };
  },
  components: {
    CartNav,
    CartGoods,
    Total
  },
  created() {
    this.cartGoods = this.$store.state.cartGoods;
    
  },
  methods: {
   
  },
};
</script>

