<template>
  <van-swipe :autoplay="3000" :height="h">
    <van-swipe-item class="van-swipe-item" v-for="(item, index) in list" :key="index">
      <img v-lazy="item.image" />
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
  name: "Swiper",
  props: {
    list: {
      type: Array,
      default: []
    },
    h: {
      type: String,
      default: "200"
    }
  }
};
</script>

<style scoped lang="less">
.van-swipe-item {
  img {
    width: 100%;
  }
}
</style>

