  
  
<template>
  <van-swipe :autoplay="3000" :height="h" :indicator-color="color">
    <van-swipe-item class="van-swipe-item" v-for="(item, index) in list" :key="index">
      <img v-lazy="item" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
export default {
  name: "DetailSwiper",
  props: {
    list: {
      type: Array,
      default: []
    },
    h: {
      type: String,
      default: "200"
    },
    color:{
      type: String,
      default: ''
    }
  },
};
</script>

<style scoped lang="less">
.van-swipe-item {
  img {
    width: 100%;
  }
}
</style>

