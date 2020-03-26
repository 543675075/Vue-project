<template>
  <div class='goods'>
    <goods-item v-for="(item,index) in goods" :list="item" :key="index"/>
  </div>
</template>



<script>
  import GoodsItem from './GoodsItem.vue'

  export default {
    name: 'Goods',
    components: {
      GoodsItem
    },
    data() {
      return {

      };
    },
    props: {
      goods: {
        type: Array,
        default(){
          return []
        }
      }
    },
    computed: {},
    //监听属性 类似于data概念

    watch: {},
    //监控data中的数据变化

    methods: {

    },

    created() {
      //生命周期 - 创建完成（可以访问当前this实例）
      
    },

    mounted() {
      //生命周期 - 挂载完成（可以访问DOM元素）

    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style lang='less' scoped>
  .goods{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .goods-item{
    width: 47%;
    margin-bottom: 10px;
  }

</style>