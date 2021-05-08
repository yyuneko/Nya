<!--suppress ALL -->
<!--图片返回数据最好加上宽高信息-->
<template>
  <view class="WaterFall">
    <view class="left-list">
      <view v-for="item in leftList" @click="enterCard(item.id)">
        <image :src="item.CDNUrl" mode="widthFix"
               :style='"width: "+width+"px"'
        ></image>
        <view :style='"width: "+width+"px"'>
          {{ item.copyright }}
        </view>
      </view>
    </view>
    <view class="right-list">
      <view v-for="item in rightList" @click="enterCard(item.id)">
        <image :src="item.CDNUrl" mode="widthFix"
               :style='"width: "+width+"px"'
        ></image>
        <view :style='"width: "+width+"px"'>
          {{ item.copyright }}
        </view>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  name: 'WaterFall',
  props: {
    apiUrl: {
      type: String,
      required:true
    }
  },
  data() {
    return {
      leftList: [],
      rightList: [],
      width: undefined,
    }
  },
  created: function () {
    wx.getSystemInfo({
      success: res => {
        let margin = 40 * res.windowWidth / 750
        this.width = (res.windowWidth - margin) / 2
      }
    })
    uni.request({
      url: this.apiUrl,
      success: res => {
        res = Array.from(res.data)
        res.forEach((item, key) => {
          item.CDNUrl = 'https:' + item.CDNUrl
          if (key % 2) this.rightList.push(item)
          else this.leftList.push(item)
        })
      }
    })
  },
  methods:{
    enterCard:function (goodsID)
    {
      uni.navigateTo({
        url:'/pages/goods-card/goods-card?goodsid='+goodsID
      })
    }
  }
}
</script>

<style>
/*noinspection ALL*/
.WaterFall {
  width: 100%;
  display: flex;
  word-wrap: break-word;
  padding-left: 10rpx;
  padding-right: 10rpx;
  background-color: #FFF6F6F6;
}

.left-list, .right-list {
  display: flex;
  flex-direction: column;
}

.right-list {
  margin-left: 20rpx;
}
</style>
