<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend" :key="item.sort">
      <img :src="item.image" >
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommend: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="less" scoped>
  .recommend{
    display: flex;
    margin-top: 10px;
    .recommend-item{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img{
        width: 80%;
        margin-bottom: 10px;
      }
    }
  }
</style>