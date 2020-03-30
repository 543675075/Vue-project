<template>
  <div>
    <cart-nav />

    <cart-goods :cartGoods="cartGoods" @check="itemClick" :active="active"/>
  </div>
</template>

<script>
import CartNav from "./childComponents/CartNav";
import CartGoods from "./childComponents/CartGoods";
export default {
  name: "Cart",
  data() {
    return {
      cartGoods: [],
      active: false
    };
  },
  components: {
    CartNav,
    CartGoods
  },
  created() {
    console.log(this.$store.state);
    this.cartGoods = this.$store.state.cartGoods;
  },
  methods: {
    itemClick(index){
      this.active = !this.active
      console.log(index)
    }
  },
};
</script>

