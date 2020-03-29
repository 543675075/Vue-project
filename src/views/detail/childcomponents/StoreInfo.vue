<template>
  <div class="store-info">
    <div class="logo">
      <img :src="storeInfo.logo" alt />
      <span class="name">{{storeInfo.name}}</span>
    </div>
    <div class="info">
      <div class="left-info">
        <div class="total-sales total">
          <p>{{storeInfo.totalSales}}</p>
          <span>总销量</span>
        </div>
        <div class="total-goods total">
          <p>{{storeInfo.totalGoods}}</p>
          <span>总商品</span>
        </div>
      </div>
      <div class="right-info">
        <div class="wrapper">
          <div class="score" v-for="(item,index) in storeInfo.score" :key="index">
            <span>{{item.name}}</span>
            <span class="num">{{item.score}}</span>
            <span class="high" v-if="item.isBetter">高</span>
            <span class="low" v-else>低</span>
          </div>
        </div>
      </div>
    </div>
    <div class="go">
      <span class="btn">进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreInfo",
  props: {
    storeInfo: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="less" scoped>
.store-info{
  margin-top: 20px;
  border-top: 5px solid #ccc;
  border-bottom: 5px solid #ccc;
  padding-bottom: 60px;
}
.logo {
  margin: 30px 0;
  img {
    width: 50px;
    border: 1px solid #ccc;
    border-radius: 50%;
    vertical-align: middle;
    margin: 0 20px 0 10px;
    transform: translateY(-3px);
  }
}
.info {
  display: flex;
  .total {
    p {
      font-size: 16px;
      margin: 0;
    }
    span {
      font-size: 14px;
    }
  }

  .right-info,
  .left-info {
    flex: 1;
  }
  .left-info {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    color: #333;
    border-right: 1px solid #ccc;
  }
  .right-info {
    position: relative;
    .wrapper{
      position: absolute;
      left: 15px;
      top: -30px;
    }
    .score{
      margin: 10px;
      .num{
        display: inline-block;
        width: 40px;
        text-align: left;
        padding: 0 5px;
      }
    }
  }
}
.go{
  text-align: center;
}
.btn{
  display: inline-block;
  margin: 40px auto 0;
  padding: 5px 10px;
  background-color: #ccc;
  text-align: center;
  border-radius: 10px;
}
.high{
  background-color: red;
}
.low{
  background: chartreuse;
}
</style>