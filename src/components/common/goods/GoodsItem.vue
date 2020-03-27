<template>
  <div class='goods-item' @click="goodsClick">
    <img :src="list.show.img" class="goods-img">
    <div class="goods-info">
      <p class="title">{{list.title}}</p>
      <span class="price">{{list.price}}</span>
      <img src="~/assets/img/common/collect.svg" class="collect">
      <span class="star">{{list.cfav}}</span>
    </div>
  </div>
</template>



<script>
  export default {
    name: 'GoodsItem',
    components: {},
    data() {
      return {
        iid: ''
      };
    },
    props: {
      list: {
        type: Object,
        default: {}
      }
    },
    computed: {},
    //监听属性 类似于data概念

    watch: {},
    //监控data中的数据变化

    methods: {
      goodsClick(){
        this.iid = this.list.iid
        this.$router.push({
          path: '/detail',
          query: {
            iid: this.iid
          }
        })
      }
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
  .goods-item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    text-align: center;
  }
 
  .goods-img{
    border-radius: 5px;
    width: 100%;
  }

  .title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 5px 0;
  }
 
  .price{
    color: #FF5777;
  }
  .collect{
    width: 16px;
    height: 16px;
    padding-left: 5px;
    transform: translateY(2px);
  }
</style>