<template>
  <div class="show">
    <div class="header">
      <div class="top-line"></div>
      <div class="desc">{{goodsShow.desc}}</div>
      <div class="bottom-line"></div>
    </div>
    <div class="show-item">
      <div v-for="(item,index) in goodsShow.detailImage" :key="index">
        <p>{{item.key}}</p>
        <div v-for="(_item,_index) in item.list" :key="_index">
          <img :src="_item" @load="imgLoad"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsShow",
  props: {
    goodsShow: {
      type: Object,
      default: {}
    }
  },

  methods: {
    imgLoad(){
      this.$emit("imgLoad")
    }
  },
 

};
</script>

<style lang="less" scoped>
.header {
  position: relative;
  margin-top: 30px;
  .desc {
    padding: 10px 10px;
  }
  .a() {
    position: absolute;
    width: 100px;
    height: 2px;
    background: #ccc;
    &::before {
      position: absolute;
      content: "";
      width: 5px;
      height: 5px;
      background: #000;
      top: -4px;
    }
  }
  .top-line {
    .a;
    left: 10px;
  }
  .bottom-line {
    .a;
    right: 10px;
  }
}
.show-item {
  img {
    width: 100%;
  }
}
</style>