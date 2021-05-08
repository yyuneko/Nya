<!--suppress ALL -->
<template>
  <view class="profile content">
    <view class="background">
    </view>
    <view class="info">
      <view class="header">
        <image src="../static/logo.png"></image>
        <text>
          {{ username }}
        </text>
        <text>
          {{ ID }}
        </text>
      </view>
      <n-tabs :list="items" ref="indexTabs" @change="change">
      </n-tabs>
<!--      <v-tabs v-model="current" :bold="true" :tabs="items"></v-tabs>-->
      <view class="details">
        <view v-show="current===0" class="content">
<!--          <water-fall api-url="https://bing.getlove.cn/latelyBingImageStory"></water-fall>-->
          <beauty-card style="width: 80%" v-for="item in list" :goods="item">
          </beauty-card>
        </view>
        <view v-show="current===1">
          <comments></comments>
        </view>
        <view v-show="current===2">
          <about></about>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import WaterFall from './WaterFall'
import VTabs from "./v-tabs/v-tabs";
import Segment from "./Segment";
import Comments from "./Comments";
import About from "./About";
import BeautyCard from "./BeautyCard";

export default {
  name: "Profile",
  components: {BeautyCard, About, Comments, Segment, VTabs, WaterFall},
  props: {
    user_id: {type: String, default: "",/*required:true*/}
  },
  data() {
    return {
      items: ['在架', '评价', '关于'],
      current: 0,
      username: 'yuneko',
      ID: 'u/yuneko',
      list:[]
    }
  },
  created() {
    uni.request({
      url: 'https://bing.getlove.cn/latelyBingImageStory',
      success: res => {
        res = Array.from(res.data)
        res.forEach((item, key) => {
          item.copyright = item.copyright.split('，')[0]
          item.CDNUrl = 'https:' + item.CDNUrl
          this.list.push(item)
        })
      }
    })
  },
  methods: {
    change(key)
    {
      this.current=key
    }
  }
}
</script>

<style scoped>
.v-tabs__container{
  position: sticky !important;
  top: 0;
}
.background {
  height: 300rpx;
  width: 100%;
  background-color: #F3EDED;
  position: relative;
}

.info {
  width: 100%;
}

.header {
  display: flex;
  flex-direction: column;
  margin-top: -140.625rpx;
  /*transform: translateY(-140.625rpx);*/
  margin-left: 40rpx;
}

.v-tabs__container-item {
  width: 33.3%;
}

.header > image {
  width: 187.5rpx;
  height: 187.5rpx;
  border-radius: 93.75rpx;
  /*transform: translateY(46.875rpx);*/

  z-index: 3;
}

.details {
  padding-top: 20rpx;
}
</style>
