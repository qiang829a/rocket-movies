<template lang="html">
  <div id="movies-home">
    <scroll ref="scroll" class="content-wrapper">
      <div class="content-box">
        <div class="slider-wrapper">
          <slider>
            <div>
              <a href="item.linkUrl">
                <img class="needsclick" @load="refreshScroll" src="../../common/images/banner_1.png">
              </a>
            </div>
            <div>
              <a href="item.linkUrl">
                <img class="needsclick" @load="refreshScroll" src="../../common/images/banner_1.png">
              </a>
            </div>
            <div>
              <a href="item.linkUrl">
                <img class="needsclick" @load="refreshScroll" src="../../common/images/banner_1.png">
              </a>
            </div>
            <div>
              <a href="item.linkUrl">
                <img class="needsclick" @load="refreshScroll" src="../../common/images/banner_1.png">
              </a>
            </div>
          </slider>
        </div>
        <div class="movies-list">
          <ul>
            <li class="movies-icon iconfont icon-more">
              <router-link to="/">
                <h6>一号影院</h6>
                <p>资源正常，非常稳定</p>
              </router-link>
            </li>
            <li class="movies-icon iconfont icon-more">
              <router-link to="/">
                <h6>二号影院</h6>
                <p>资源丰富，比较繁琐</p>
              </router-link>
            </li>
            <li class="movies-icon iconfont icon-more">
              <router-link to="/">
                <h6>电视直播</h6>
                <p>卫星电视，高清直播</p>
              </router-link>
            </li>
            <li class="movies-icon iconfont icon-more">
              <router-link to="/">
                <h6>宅男专区</h6>
                <p>每日更新，有你想看</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'

  export default {
    components: {
      Scroll,
      Slider
    },
    methods: {
      refreshScroll () {
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style lang="scss">
  @import "~common/scss/variable";
  .content-wrapper {
    .content-box{
      padding-bottom: 1.79rem;
    }
    .slider-wrapper {
      position: relative; width: 100%; height: 11.96rem; overflow: hidden;
      img{
        // animation: opacityTrans .2s ease-in;
      }
    }
  }
  .movies-list {
    position: relative; z-index: 10;
    li{
      position: relative; height: 4.6rem; line-height: 4.6rem; padding-bottom: 1.07rem; margin-top: -1.07rem; border-radius: 1.07rem 1.07rem 0 0;
      a{
        display: block; height: 100%; padding-left: 5.71rem; background-position: 1.96rem center; background-size: 2.07rem auto; background-repeat: no-repeat;
        h6{
          height: 1.86rem; line-height: 1.86rem; padding-top: 0.54rem; font-size: $font-size-large-x; color: $color-text;
        }
        p{
          height: 1.5rem; line-height: 1.5rem; font-size: $font-size-medium;
        }
      }
      &:before{
        position: absolute; right: 0; top: 0; width: 3.43rem; font-size: 1.43rem; text-align: center;
      }
      &:nth-child(1) {
        background: #d24a5f;
        p{
          color: #ec9aa2;
        }
        a {
          background-image: url(movies_1.png);
        }
        &:before{
          color: #99334b; font-weight: bold;
        }
      }
      &:nth-child(2) {
        background: #653aca;
        p{
          color: #b099e0;
        }
        a {
          background-image: url(movies_1.png);
        }
        &:before{
          color: #512689; font-weight: bold;
        }
      }
      &:nth-child(3) {
        background: #06b1aa;
        p{
          color: #95dedb;
        }
        a {
          background-image: url(live_1.png);
        }
        &:before{
          color: #087d88; font-weight: bold;
        }
      }
      &:nth-child(4) {
        padding-bottom: 0; background: #fe933b; border-radius: 1.07rem 1.07rem 0.36rem 0.36rem;
        p{
          color: #ffdabb;
        }
        a {
          background-image: url(life_1.png);
        }
        &:before{
          color: #cb6b37; font-weight: bold;
        }
      }
    }
  }
</style>
