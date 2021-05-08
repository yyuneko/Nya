<!--suppress ALL -->
<template>
  <view class="comments">
    <view class="data">
      <view>
       <text>
         {{ rate }}
       </text>
        <br>
        <uni-rate  style="width: fit-content; margin: 0 auto;"
                  v-model="rate"
                  :readonly="true"
                  allow-half></uni-rate>
        <text style="font-size: 18px">
          {{sum}}人评价
        </text>

      </view>
      <view>
        <progress v-for="(rate,i) in rates" :percent="parseInt(rate/sum*100)" border-radius="4"	 style="width: 70%;margin:0 auto;margin-bottom: 15px" stroke-width="8"/>

      </view>
    </view>
    <view >
      <view class="tags">
        <uni-tag text="有图" :circle="true"></uni-tag>
        <uni-tag text="好评" :circle="true"></uni-tag>
        <uni-tag text="中评" :circle="true"></uni-tag>
        <uni-tag text="差评" :circle="true"></uni-tag>
      </view>
      <view class="comments-list">

      </view>
      <view v-for="item in comments">

      </view>
    </view>
  </view>
</template>

<script>
import UniRate from "../uni_modules/uni-rate/components/uni-rate/uni-rate";
export default {
  name: "Comments",
  components: {UniRate},
  data() {
    return {
      rates: [29, 3, 2, 1, 0],
      sum: 35,
      rate: 0,
      comments:[]
    }
  },
  created() {
    this.rates.forEach((v, i) => {
      this.rate += v * (5 - i)
    })
    this.rate /= this.sum
    this.rate=this.rate.toFixed(1)
  }
}
</script>

<style scoped>
.data {
  width: 750rpx;
  display: flex;
  flex-direction: row;
}

.data :first-child {
  text-align: center;
  width: 30%;
}
.data :last-child {
  width: 70%;
/*
  border-radius: 4px;
*/
}

.tags{
  display: inline-flex;
}
</style>
