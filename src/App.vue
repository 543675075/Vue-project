<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
   <tabbar></tabbar>
  </div>
</template>

<script>
  import Tabbar from 'components/common/tabbar/Tabbar'
  export default {
    name: "App",
    components: {
      Tabbar
    }

  }
</script>

<style>

  #app{
    padding-top: 50px;
  }
  


</style>
