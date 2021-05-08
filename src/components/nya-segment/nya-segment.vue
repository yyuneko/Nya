<template>
  <view class="content">
    <scroll-view :scroll-x="scroll"
                 :scroll-left="scroll ? scrollLeft : 0"
                 :scroll-with-animation="scroll"
    >
      <view :style="{display: 'inline-flex',width: '100%'}">
        <view v-for="(v,i) in tabs" :style="{'width':1/tabs.length*100+'%','text-align':'center'}">
          {{ v }}
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: "Segment",
  props: {
    scroll: {
      type: Boolean,
      default: true
    },
    tabs: Array
  },
  data() {
    return {
      scrollLeft: 0,
    }
  }
}
</script>

<style scoped>
</style>
