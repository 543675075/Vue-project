<template >
  <div class="detail">
    <!-- 头部导航 -->
    <detail-nav @navClick="navClick" />
    <scroll class="scroll" :probeType="3" :listenScroll="true" ref="scroll">
      <!-- 轮播图 -->
      <detail-swiper :list="detailSwiper" h="400" color="#ff5777" ref="swiper" />
      <!-- 商品标题销售等信息 -->
      <goods-info :info="info" />
      <!-- 店铺log名字等信息 -->
      <store-info :storeInfo="storeInfo" />
      <!-- 商品图片的展示 -->
      <goods-show :goodsShow="goodsShow" class="goods-show" @imgLoad="imgLoad" />
      <!-- 商品参数展示 -->
      <goods-params :params="params" class="params" ref="params" />
      <!-- 评论信息 -->
      <comment :comment="comment" ref="comment" />
      <!-- 商品推荐 -->
      <goods :goods="recommend" ref="recommend" />
    </scroll>
    <!-- 底部工具栏 -->
    <bottom-bar @cartClick="cartClick" />
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import DetailNav from "./childcomponents/DetailNav";
import DetailSwiper from "components/common/swiper/DetailSwiper";
import GoodsInfo from "./childcomponents/GoodsInfo";
import StoreInfo from "./childcomponents/StoreInfo";
import GoodsShow from "./childcomponents/GoodsShow";
import GoodsParams from "./childcomponents/GoodsParams";
import Comment from "./childcomponents/Comment";
import Goods from "components/common/goods/Goods";
import BottomBar from "./childcomponents/BottomBar";

import { detailData, Info, ShopInfo, recommend } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNav,
    DetailSwiper,
    GoodsInfo,
    Scroll,
    StoreInfo,
    GoodsShow,
    GoodsParams,
    Comment,
    Goods,
    BottomBar
  },
  data() {
    return {
      iid: "", //商品唯一id

      detailSwiper: [], //轮播图
      info: {}, //商品标题销量等信息数据
      storeInfo: {}, //店铺信息
      goodsShow: {}, //商品所有图片的展示
      params: {}, //商品参数
      comment: {}, //用户留言
      recommend: [], //推荐商品
      offsetTop: []
    };
  },
  computed: {},
  created() {
    this.iid = this.$route.query.iid;

    // 发送网络请求
    detailData(this.iid).then(res => {
      // console.log(res);
      const result = res.data.result;
      //获取轮播图数据
      this.detailSwiper = result.itemInfo.topImages;
      // console.log(this.detailSwiper)
      //创建商品标题销量等信息对象并保存
      const goodsInfo = new Info(
        result.columns,
        result.itemInfo,
        result.shopInfo.services
      );
      this.info = goodsInfo;
      // console.log(this.info)
      //创建店铺对象并获取店铺相关信息保存
      const shopInfo = new ShopInfo(result.shopInfo);
      this.storeInfo = shopInfo;
      //获取商品展示图片并保存
      this.goodsShow = result.detailInfo;
      //获取商品参数
      this.params = result.itemParams;
      //获取评论信息
      if (result.rate.cRate != 0) {
        this.comment = result.rate.list[0];
        // console.log(this.comment);
      }
    });

    recommend().then(res => {
      //获取推荐商品数据
      this.recommend = res.data.data.list;
      // console.log(this.recommend);
    });
    // this.$nextTick(()=>{
    //   this.offsetTop.push(this.$refs.swiper.$el.offsetTop)
    //   this.offsetTop.push(this.$refs.params.$el.offsetTop)
    //   this.offsetTop.push(this.$refs.comment.$el.offsetTop)
    //   this.offsetTop.push(this.$refs.recommend.$el.offsetTop)
    // })
  },
  mounted() {},
  updated() {
    this.offsetTop = []
    this.offsetTop.push(this.$refs.swiper.$el.offsetTop);
    this.offsetTop.push(this.$refs.params.$el.offsetTop);
    this.offsetTop.push(this.$refs.comment.$el.offsetTop);
    this.offsetTop.push(this.$refs.recommend.$el.offsetTop);
  },
  methods: {
    cartClick() {
      const cartGoodsInfo = {};
      cartGoodsInfo.title = this.info.title;
      cartGoodsInfo.desc = this.info.desc;
      cartGoodsInfo.price = this.info.lowPrice;
      cartGoodsInfo.showImg = this.detailSwiper[0];
      cartGoodsInfo.count = null;
      cartGoodsInfo.iid = this.iid;
      // console.log(cartGoodsInfo.iid)
      // this.$store.commit("cartGoodsInfo", cartGoodsInfo);
      this.$store.dispatch("cartGoodsInfo",cartGoodsInfo)
    },
    navClick(index) {
      console.log(this.offsetTop)
      this.$refs.scroll.scrollTo(0,-this.offsetTop[index],500)
    },
    imgLoad() {
      //    console.log(this.$refs.swiper.$el.offsetTop)
      // console.log(this.$refs.params.$el.offsetTop)
      // console.log(this.$refs.comment.$el.offsetTop)
      // console.log(this.$refs.recommend.$el.offsetTop)
    }
  }
};
</script>


<style lang="less" scoped>
.detail {
  position: relative;
  height: 100vh;
  z-index: 20;
  .scroll {
    height: calc(100% - 50px);
    background: #fff;
    overflow: hidden;
  }
  .goods-show {
    padding-bottom: 20px;
    border-bottom: 5px solid #ccc;
    margin-bottom: 20px;
  }
  .params {
    border-bottom: 5px solid #ccc;
  }
}
</style>