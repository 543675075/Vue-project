<template>
  <div class="info">
    <p class="title">{{info.title}}</p>
    <div class="price">
      <span class="new-price">{{info.price}}</span>
      <span class="old-price">{{info.oldPrice}}</span>
      <span class="discount">{{info.discount}}</span>
    </div>
    <div class="info-1">
      <span v-for="(item,index) in info.columns" :key="index">{{item}}</span>
    </div>
     <div class="info-2">
      
      <div v-for="(item,index) in info.services" :key="index">
        <img :src="item.icon" class="icon">
        <span class="text">{{item.name}}</span>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: "GoodsInfo",
  
  props: {
    info: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  created() {
  }
};
</script>

<style lang="less" scoped>
  .title{
    text-align: left;
  }
  .new-price{
    color: #ff5777;
  }
  .old-price{
    font-size: 12px;
    margin: 0 5px 0 10px ;
    text-decoration: line-through;
  }
  .discount{
    display: inline-block;
    height: 20px;
    line-height: 20px;
    transform: translateY(-10px);
    font-size: 12px;
    border-radius: 30px;
    background-color: #ff5777;
  }
  .info-1,.info-2{
    display: flex;
    justify-content: space-between;
  }
  .info-1{
    margin: 20px 0;
    color: #ccc;
    font-size: 14px;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
  }
  .info-2{
    .icon{
      width: 14px;
      vertical-align: middle;
    }
    .text{
      font-size: 12px;
    }
  }
</style>