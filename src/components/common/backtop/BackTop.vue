<template>

  <img src="~assets/img/common/top.png" alt="" class='back-top'>

</template>



<script>
  export default {
    name: 'BackTop',
    components: {},
    data() {
      return {

      };
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
  .back-top {
    position: fixed;
    bottom: 60px;
    right: 20px;
    z-index: 9;
    width: 40px;
    height: 40px;
  }
</style>