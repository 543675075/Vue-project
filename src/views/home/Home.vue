<template>
  <div id="home">
    <!-- 导航标题 -->
    <nav-bar class="nav-bar">
      <h2 slot="middle">购物街</h2>
    </nav-bar>

    <!-- 轮播图 -->
    <swiper :list="swiper" h="200"/>

    <!-- 推荐 -->
    <recommend :recommend="recommend"/>

    <!-- 本周流行 -->
    <popular></popular>

    <!-- 控件 -->
    <control :title=title></control>
  </div>
</template>

<script>
import NavBar from 'components/common/nav/nav'
import Swiper from 'components/common/swiper/Swiper'
import Recommend from 'components/content/recommend/Recommend'
import Popular from 'components/content/popular/Popular'
import Control from 'components/content/control/Control'

import {homeData} from 'network/home'

export default {
  name: "Home",
  data() {
    return {
      swiper:[],
      recommend: [],
      title: ["流行","新款","特卖"]
    }
  },
  components: {
    NavBar,
    Swiper,
    Recommend,
    Popular,
    Control
  },
  created() {

    // 发送网络请求
    homeData().then(res=>{
      console.log(res)
      // 取出轮播图的数据并保存
      this.swiper = res.data.data.banner.list
      //取出推荐数据并保存
      this.recommend = res.data.data.recommend.list
    })
  },
}
</script>

<style lang="less" scoped>
  #home{
    height: 1000px;
  }
  .nav-bar{
    background-color: rgba(243, 78, 78);
    h2{
      margin: 0;
      text-align: center;
      color: #fff;
      font-size: 20px;
    }
  }
</style>