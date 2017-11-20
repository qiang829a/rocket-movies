<template lang="html">
  <div class="slide">
    <ul>
      <li :class="{on: index === $index}" v-for="(slide, $index) in slideList" @click="slideClick($index)">{{slide.text}}</li>
    </ul>
    <span :style="{width: `${width}%`, left: `${left}%`}" class="slide-bar"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      slideList: {
        type: Array
      }
    },
    data () {
      return {
        left: 0,
        index: 0,
        width: 100 / this.slideList.length
      }
    },
    methods: {
      slideClick (index) {
        this.$emit('slideClick', index)
        this.left = this.width * index
        this.index = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~common/scss/variable";
  .slide{
    position: relative; height: 3.04rem; line-height: 3.04rem; border-bottom: 1px solid $color-border-l; font-size: $font-size-medium; color: $color-text-g-l; text-align: center; background: $color-highlight-background;
    ul{
      display: flex;
      li{
        flex: 1;
        &.on{
          color: $color-text-c;
        }
      }
    }
    .slide-bar{
      position: absolute; left: 0; bottom: 0; z-index: 10; height: 0.11rem; background: $color-background-c-l; transition: all .3s ease-in;
    }
  }
</style>
