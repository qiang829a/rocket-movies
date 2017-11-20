<template lang="html">
  <div class="content-box">
    <div class="our-inf" v-for="inf in ourInf">
      <h5 :style="inf.tStyle">{{inf.title}}</h5>
      <p :style="inf.style">{{inf.text}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      ourInf: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~common/scss/variable";
  .content-box{
    padding: 1.07rem 1.07rem 1.79rem;
    .our-inf{
      margin-bottom: 1.07rem; background: $color-highlight-background; border-radius: 0.36rem;
      h5{
        height: 3.29rem; line-height: 3.29rem; padding: 0 1.07rem; font-size: 1.14rem; color: $color-text-d; border-bottom: 1px solid $color-border;
      }
      p{
        line-height: 1.61rem; padding: 0.89rem 1.07rem; font-size: $font-size-medium; color: $color-text-g;
      }
    }
  }
</style>
