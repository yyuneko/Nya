<template>
<view class="About">
  <grid :list="list"/>
  <h5>关注话题</h5>
  <view v-for="item in topics" class="topics">
{{item}}
  </view>
</view>
</template>

<script>
import Grid from "./Grid";
export default {
name: "About",
  components: {Grid},
  data(){
  return{
    list:[
      {title:'学院',content:'数学与计算机科学学院'},
      {title: '卖出',content: 23},
      {title: '个性签名',content: '不刀'}
    ],
    topics:[]
  }
  }
}
</script>

<style scoped>
.About{
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.grid{
  border-bottom: 20px solid #fff;
}
.topics{
  flex: 1;
}
</style>
