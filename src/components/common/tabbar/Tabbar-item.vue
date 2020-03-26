<template>
  <div class="tabbar-item" @click="TabbarClick" >
    <slot name="img"/>
    <slot name="active" v-if="isShow" />
    <div :class="{red:isShow}">
      <slot name="text"/> 
    </div>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  data() {
    return {
      // isShow: false
    }
  },
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  computed: {
    isShow(){
      return this.$route.path.indexOf(this.path) != -1
    }
    
  },
  methods: {
    TabbarClick(){
      
      if(this.$route.path != this.path){
        this.$router.replace(this.path)
      }
    }
  },
  //
  
}

</script>

<style lang="less" scoped>
  .tabbar-item{
    flex: 1;
    text-align: center;
  }
  .red{
    color: red;
  }
</style>