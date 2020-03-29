<template >
  <div class="detail">
    <!-- 头部导航 -->
    <detail-nav />
    <scroll class="scroll" :probeType="3" :listenScroll="true">
      <!-- 轮播图 -->
      <detail-swiper :list="detailSwiper" h="400" color="#ff5777" />
      <!-- 商品标题销售等信息 -->
      <goods-info :info="info" />
      <!-- 店铺log名字等信息 -->
      <store-info :storeInfo="storeInfo" />
      <!-- 商品图片的展示 -->
      <goods-show :goodsShow="goodsShow" class="goods-show" />
      <!-- 商品参数展示 -->
      <goods-params :params="params" class="params" />
      <!-- 评论信息 -->
      <comment :comment="comment" />
      <!-- 商品推荐 -->
      <goods :goods="recommend" />
    </scroll>
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
    Goods
  },
  data() {
    return {
      iid: "",

      detailSwiper: [],
      info: {}, //商品标题销量等信息数据
      storeInfo: {},
      goodsShow: {},
      params: {},
      comment: {},
      recommend: []
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
      //创建商品标题销量等信息对象并保存
      const goodsInfo = new Info(
        result.columns,
        result.itemInfo,
        result.shopInfo.services
      );
      this.info = goodsInfo;
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
        console.log(this.comment);
      }
    });

    recommend().then(res => {
      //获取推荐商品数据
      this.recommend = res.data.data.list
      console.log(this.recommend);
    });
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