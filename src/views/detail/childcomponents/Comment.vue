<template>
  <div class="comment">
    <div class="header">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="user">
      <img :src="comment.user.avatar"  class="user-img" />
      <span class="user-name">{{comment.user.uname}}</span>
    </div>
    <div class="content">{{comment.content}}</div>
    <div class="comment-date">
      <span class="time">{{comment.created|formatDate}}</span>
      <span>{{comment.style}}</span>
    </div>
    <div class="comment-img">
      <img v-for="(item,index) in comment.images" :key="index" :src="item" />
    </div>
  </div>
</template>

<script>
import { formatDate } from "../../../utils/formatDate";
export default {
  name: "Comment",
  props: {
    comment: {
      type: Object,
      default: {}
    }
  },
  filters: {
    //方法一: yyyy-MM-dd hh:mm
    formatDate(time) {
      time = time * 1000;
      let date = new Date(time);
      // console.log(new Date(time));
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }, 
    //方法二: yyyy-MM-dd
    // formatDate(time) {
    //   time = time * 1000
    //   let date = new Date(time);
    //   console.log(new Date(time));
    //   return formatDate(date, "yyyy-MM-dd");
    // }
  },
  methods: {
   
  },
};
</script>

<style lang="less" scoped>
.comment {
  padding: 20px;
  border-bottom: 5px solid #ccc;
  .header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }
  .user{
    display: flex;
    align-items: center;
    margin: 10px 0;
    .user-img{
      width: 35px;
      margin-right: 5px;
      border-radius: 50%;
    }
  }
  .content{
    color: #555;
    line-height: 1.5;
    font-size: 14px;
  }
  .comment-date{
    color: #999;
    font-size: 14px;
    margin: 5px 0;
  }
  .comment-img{
    display: flex;
    flex-wrap: wrap;
    img{
      width: 100px;
      padding-right: 5px;
    }
  }
}
</style>