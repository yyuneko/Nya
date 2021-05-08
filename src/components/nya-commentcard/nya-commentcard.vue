<template>
  <view>
    <text>
      {{ time }}
    </text>
    <text>
      {{ content }}
    </text>
    <text>
      {{ score }}
    </text>
  </view>
</template>

<script>
export default {
  name: "CommentCard",
  props: {
    time: String,
    content: String,
    score: Number
  }
}
</script>

<style scoped>

</style>
