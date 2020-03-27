<template >
  <div class="detail">
    <!-- 头部导航 -->
    <detail-nav />
    <scroll class="scroll" :probeType=3 :listenScroll=true> 
      <!-- 轮播图 -->
      <detail-swiper :list="detailSwiper" h="400" color="#ff5777" />
      <!-- 商品标题销售等信息 -->
      <goods-info :info="info" />
      <!-- 店铺log名字等信息 -->
      <store-info :storeInfo="storeInfo" />
      
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import DetailNav from "./childcomponents/DetailNav";
import DetailSwiper from "components/common/swiper/DetailSwiper";
import GoodsInfo from "./childcomponents/GoodsInfo";
import StoreInfo from './childcomponents/StoreInfo'

import { detailData, Info , ShopInfo} from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNav,
    DetailSwiper,
    GoodsInfo,
    Scroll,
    StoreInfo
  },
  data() {
    return {
      iid: "",

      detailSwiper: [],
      info: {} ,//商品标题销量等信息数据
      storeInfo: {}
    };
  },
  computed: {},
  created() {
    this.iid = this.$route.query.iid;

    // 发送网络请求
    detailData(this.iid).then(res => {
      console.log(res);
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
      const shopInfo = new ShopInfo(result.shopInfo)
      this.storeInfo = shopInfo
      console.log(this.storeInfo)
    });
  }
};
</script>


<style lang="less" scoped>
.detail {
  position: relative;
  height: 100vh;
  z-index: 20;
  .scroll{
    height: calc(100% - 50px);
    background: #fff;
    overflow: hidden;
  }
 
}
</style>