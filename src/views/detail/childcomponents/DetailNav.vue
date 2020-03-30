<template>
  <nav-bar class="nav-bar">
    <div class="back" slot="left" @click="back">
      <img src="~assets/img/common/back.svg" />
    </div>
    <div class="content" slot="middle">
      <span
        v-for="(item,index) in titles"
        :key="index"
        :class="{active: currentIndex == index}"
        @click="navClick(index)"
      >{{item}}</span>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/nav/nav";
export default {
  name: "DetailNav",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
   methods: {
    back() {
      this.$router.go(-1);
    },

    navClick(index) {
      this.currentIndex = index;
      this.$emit("navClick",index)
    }
  }
};
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  align-items: center;
  background: #fff;
  .back {
    flex: 2;
    padding-left: 15px;
    img {
      vertical-align: middle;
      transform: translateY(-2px);
    }
  }
  .content {
    flex: 8;
    span {
      padding-right: 25px;
    }
  }
}
.active {
  color: #ff5777;
}
</style>