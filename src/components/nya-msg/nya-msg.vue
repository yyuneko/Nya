<template>
  <view class="msg-item" @click="enterMsg">
    <image :src="user.avatar"/>
    <view>
      <text>{{ user.username }}</text>
      <text>{{ user.msg }}</text>
    </view>
    <text>{{ user.time }}</text>
  </view>
</template>

<script>
//消息框
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  name: "MsgItem",
  methods: {
    enterMsg: function () {
      uni.navigateTo({
        url: '/components/msg/Msg?user=' + encodeURIComponent(JSON.stringify(this.user)),

      })
    }
  }
}
</script>

<style scoped>
.msg-item {
  width: 750rpx;
  display: inline-flex;
  padding: 20px 0;
  border-bottom: 1px solid black;
}

.msg-item > image {
  width: 125rpx;
  height: 125rpx;
  border-radius: 62.5rpx;
}

.msg-item > view {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
