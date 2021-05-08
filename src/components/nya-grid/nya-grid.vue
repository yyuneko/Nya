<template>
  <view class="grid">
    <view v-for="item in list" class="grid-item">
      <text>
        {{ item.title }}
      </text>
      <br>
      <text style="font-size: small">
        {{ item.content }}
      </text>
    </view>
  </view>
</template>

<script>
export default {
  name: "Grid",
  props: {
    list: Array,
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.grid{
  display: flex;
  flex-wrap: wrap;
  &-item{
    min-width: 50%;
  }
}
</style>
