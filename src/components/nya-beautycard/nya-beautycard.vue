<template >
  <view class="beauty-card" @click="enterCard">
    <view class="beauty-card-left">
      <image :src="goods.CDNUrl" mode="widthFix"></image>
      <uni-icons :type="Math.random()>0.5?'heart':'heart-filled'"
                 @click="handleStar"
                 class="star" size="20"></uni-icons>
    </view>

    <view class="beauty-card-right">
      <text class="text-bold text-overflow">{{ goods.copyright }}</text>
      <text class="text-thin">by {{ goods.endDate }}</text>
      <br>
      <!--      <text>{{ msg(goods.copyright + goods.quiz) }}</text>-->
      <view class="beauty-card-bar">
        <text class="text-bold">
          ¥{{ goods.price || Math.ceil(Math.random() * 1000) }}

        </text>
        <view>
          <button class="button-buy" @click.stop="">购买</button>
        </view>

      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: 'BeautyCard',
  props: {
    goods: Object
  },
  data() {
    return {}
  },
  methods: {
    msg: function (str) {
      return str.substring(0, 30) + '...'
    },
    handleStar: function () {

    },
    enterCard: function () {
      uni.navigateTo({
        url: '/pages/goods-card/goods-card?goods=' + encodeURIComponent(JSON.stringify(this.goods))
      })
    }
  }
}
</script>
<style lang="scss">
.beauty-card {
  display: flex;
  background-color: #fff;
  border-radius: 1.5em;
  align-items: stretch;
  width: 100%;
  margin-top: 20px;

  &-left {
    margin: 0.5em;
    border-radius: 1em;
    flex: 1;
    background-color: #F3EDED;
    display: flex;
    align-items: center;
    position: relative;

    .star {
      position: absolute;
      top: 10%;
      right: 5%;
    }

    image {
      width: 100%;
      border-radius: 1em;
    }
  }

  &-right {
    flex: 2;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
  }

  &-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text-overflow {
    overflow: hidden;
    /*将对象作为弹性伸缩盒子模型显示*/
    display: -webkit-box;
    /*设置子元素排列方式*/
    -webkit-box-orient: vertical;
    /*设置显示的行数，多出的部分会显示为...*/
    -webkit-line-clamp: 2;
  }
}
</style>

