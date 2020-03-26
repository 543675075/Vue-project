<template>
  <div class="control"> 
    <div class="control-item" v-for="(item,index) in title" :key="index">
      <span @click="handleClick(index)" :class="{active: index==currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Control",
  data() {
    return {
      currentIndex: 0,
    }
  },
  props: {
    title: {
      type: Array,
      default: []
    }
  },
  
  methods: {
    handleClick(index){
      this.currentIndex = index
    }
  },
}
</script>

<style lang="less" scoped>
  .control{
    margin-top: 10px;
    display: flex;
    .control-item{
      flex: 1;
      text-align: center;
    }
  }

  .active{
    padding: 5px;
    border-bottom: 2px solid red;
  }
</style>