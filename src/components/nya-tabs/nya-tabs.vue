<template>


  <view class="n-tabs">
    <view :style="{width:barWidth+'px',transform:'translateX('+barOffset+'px)'}" class="n-tabs-bar"></view>
    <view v-for="(item,key) in list" class="n-tabs-item" @click="change(key)">
      <text>{{ item }}</text>

    </view>
  </view>
</template>

<script>
export default {
  name: "NTabs",
  props: {
    list: Array,
  },
  data() {
    return {
      barWidth: 0,
      barOffset: 0,
      current: 0
    }
  },
  /*computed: {
    barStyle (data) {
      // {width:barWidth+'px',transform:'translateX('+barOffset+'px)'}
      return {
        width: data.barWidth + 'px',
        transform: 'translateX(' + data.barOffset + 'px)'
      }
    }
  },*/
  watch: {
    current:function () {
      this.updateBar()
    }
  },
  created() {
    this.updateBar()
  },
  methods: {
    change(key) {
      this.current = key
      this.$emit('change',this.current)
    },
    updateBar() {
      this.$nextTick(() => {
        const tabs = this.createSelectorQuery().selectAll('.nya-tabs-item').boundingClientRect(res => {
          if (this.current >= 0 && this.current < this.list.length - 1) {
            this.barWidth = res[this.current].width
            this.barOffset = res[this.current].left - res[0].left
          } else {
            this.barWidth = res[0].width
            this.barOffset = res[this.list.length - 1].left - res[0].left
          }
        }).exec()
      })
    }
  }
}
</script>

<style scoped lang="scss">
.n-tabs {
  width: 100%;
  display: inline-flex;
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  &-bar {
    position: absolute;
    bottom: 0;
    //left: 0;
    border-radius: 3px;
    background-color: #393551;
    height: 6px;
    transition: transform 300ms ease-in-out;
  }

  &-item {
    display: inline-block;
    //margin-right: 16px;
    padding: 8px 16px;
    cursor: pointer;
    flex: 1;
    text-align: center;
  }
}
</style>
