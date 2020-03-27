<template>
  <div id="home">
    <!-- 导航标题 -->
    <nav-bar class="nav-bar">
      <h2 slot="middle">购物街</h2>
    </nav-bar>
    <control :title=title @clickControl="clickControl"  class="tab-control" v-show="isShow" ref="control1"/>
    <scroll class="scroll" :probeType=3 :pullup=true :listenScroll=true 
                                                      @scroll="scroll" 
                                                      ref="scroll"
                                                      @scrollToEnd="scrollToEnd">

      <!-- 轮播图 -->
      <swiper :list="swiper" h="200" color="#ff5777"/>
       

      <!-- 推荐 -->
      <recommend :recommend="recommend" @load="load" />

      <!-- 本周流行 -->
      <popular></popular>

      <!-- 控件 -->
      <control :title=title @clickControl="clickControl" ref="control" />

      
     
      <!-- 商品 -->
      <goods :goods="goods" />
      <!-- 返回顶部按钮 -->
    </scroll>
    <back-top v-show="isShow" @click.native="backTop"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/nav/nav'
  import Swiper from 'components/common/swiper/Swiper'
  import Recommend from 'components/content/recommend/Recommend'
  import Popular from 'components/content/popular/Popular'
  import Control from 'components/content/control/Control'
  import Goods from 'components/common/goods/Goods'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/common/backtop/BackTop'

  import { homeData, goodsData } from 'network/home'

  export default {
    name: "Home",
    data() {
      return {
        swiper: [], //轮播图数据
        recommend: [], // 推荐数据
        title: ["流行", "新款", "特卖"], //控件的三个标题名字
        list: {
          "pop": {
            page: 0,
            goods: []
          },
          "new": {
            page: 0,
            goods: []
          },
          "sell": {
            page: 0,
            goods: []
          }
        },
        currentType: "pop",
        controlOffsetTop: 0,
        isShow: false
      }
    },
    components: {
      NavBar,
      Swiper,
      Recommend,
      Popular,
      Control,
      Goods,
      Scroll,
      BackTop
    },
    computed: {
      goods() {
        return this.list[this.currentType].goods
      }
    },
    created() {

      // 发送网络请求
      homeData().then(res => {
        // 取出轮播图的数据并保存
        this.swiper = res.data.data.banner.list
        //取出推荐数据并保存
        this.recommend = res.data.data.recommend.list
      })

      //请求商品列表
      this._goodsData("pop")
      this._goodsData("new")
      this._goodsData("sell")


    },

    mounted() {

      // console.log(this.$refs.control.$el.offsetTop)

    },

    methods: {
      //封装网络请求
      _goodsData(type) {
        //获取页数
        const page = this.list[type].page + 1
        goodsData(type, page).then(res => {
          // console.log(res)
          this.list[type].goods.push(...res.data.data.list)
          this.list[type].page = page
        })
      },
      //点击事件
      clickControl(index) {
        switch (index) {
          case 0:
            this.currentType = "pop"
            break
          case 1:
            this.currentType = "new"
            break
          case 2:
            this.currentType = "sell"
        }
        this.$refs.control.currentIndex = index
        this.$refs.control1.currentIndex = index
      },
      
      backTop(){
        // console.log(this.$refs.scroll.scrollTo)
        this.$refs.scroll.scrollTo(0,0,500)
      },
      //滚动事件
      scroll(top) {
        // console.log(-top.y)
        if(-top.y>=this.controlOffsetTop){
          this.isShow = true
        }else{
          this.isShow = false
        }
      },

      //上拉加载事件
      scrollToEnd(){
        this._goodsData(this.currentType)
      },

      //图片加载完
      load() {
        // console.log(this.$refs.control)
        const y = this.$refs.control.$el.offsetTop
        this.controlOffsetTop = y
      },

    }
  }
</script>

<style lang="less" scoped>
  .nav-bar {
    background-color: #FF5777;

    h2 {
      margin: 0;
      text-align: center;
      color: #fff;
      font-size: 20px;
    }
  }

  .tab-control {
    position: fixed;
    top: 50px;
    right: 0;
    left: 0;
    z-index: 9;
  }

 

  .scroll {
    overflow: hidden;
    position: absolute;
    top: 50px;
    bottom: 48px;
    left: 0;
    right: 0;
  }
</style>