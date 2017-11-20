<template lang="html">
  <transition name="slide">
    <div id="my-apprentice">
      <slide :slideList="slideList" class="slide"></slide>
      <scroll ref="scroll" class="content-wrapper">
        <div class="content-box">
          <div class="notes">
            <p class="iconfont icon-favorite">&nbsp;代表已成为会员的下级</p>
            <p>温馨提示：并不是有人扫码成为下级就有佣金，下级必须成为会员您才会获得佣金</p>
          </div>
          <div class="apprentice-list">
            <ul>
              <li>
                <dl>
                  <dd><img src="https://user-gold-cdn.xitu.io/2017/11/9/6adeb110a8c8369b58d01d6210fa126f?imageView2/1/w/800/h/600/q/85/format/jpg/interlace/1"></dd>
                  <dt>
                    <p class="name">名字</p>
                    <p class="time">成为会员时间：2017-11-09 14:18</p>
                  </dt>
                </dl>
                <div class="list-right">
                  <span>+0</span>
                  <span>0个成员</span>
                </div>
              </li>
              <li>
                <dl>
                  <dd><img src="https://user-gold-cdn.xitu.io/2017/11/9/6adeb110a8c8369b58d01d6210fa126f?imageView2/1/w/800/h/600/q/85/format/jpg/interlace/1"></dd>
                  <dt>
                    <p class="name">名字</p>
                    <p class="time">成为会员时间：2017-11-09 14:18</p>
                  </dt>
                </dl>
                <div class="list-right">
                  <span>+0</span>
                  <span>0个成员</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </scroll>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Slide from 'base/slide/slide'
  export default {
    data () {
      return {
        slideList: [
          {
            text: '一级(0)'
          },
          {
            text: '二级(1)'
          }
        ]
      }
    },
    components: {
      Scroll,
      Slide
    }
  }
</script>

<style lang="scss" scoped>
  @import "~common/scss/variable";
  #my-apprentice{
    position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 230; background: $color-background;
    .slide{
      position: fixed; left: 0; top: 0; right: 0; z-index: 10;
    }
    .notes{
      line-height: 1.57rem; padding: 0.71rem 1.07rem; margin-top: 3.04rem; background: $color-background;
      p{
        font-size: $font-size-medium-x; color: $color-text-g-l;
        &.icon-favorite{
          padding-bottom: 0.36rem; font-size: $font-size-medium-x;
          &:before{
            color: $color-text-c;
          }
        }
      }
    }
    .apprentice-list{
      margin-bottom: 1.79rem; background: $color-highlight-background;
      li{
        display: flex; padding: 1.21rem 0; border-bottom: 1px solid $color-border;
        dl{
          display: flex; flex: 1; padding-left: 0.71rem;
          dd{
            position: relative; width: 2.86rem; height: 2.86rem; border-radius: 50%; overflow: hidden;
            img{
              position: absolute; left: 0; top: 0; right: 0; bottom: 0; min-width: 100%; min-height: 100%; max-width: 100%; max-height: 100%; margin: auto;
            }
          }
          dt{
            padding-left: 0.71rem;
            .name{
              height: 1.36rem; line-height: 1.36rem; padding-top: 0.18rem; font-size: $font-size-medium; white-space: normal; text-overflow: ellipsis; overflow: hidden;
            }
            .time{
              height: 1.32rem; line-height: 1.32rem; font-size: $font-size-small; color: $color-text-g-l;
            }
          }
        }
        .list-right{
          width: 7.14rem; padding-right: 0.71rem; border-left: 1px solid $color-border;
          span{
            display: block; height: 1.29rem; line-height: 1.29rem; font-size: $font-size-small; color: $color-text-d; text-align: right;
          }
        }
        &:last-child{
          border-bottom: 0;
        }
      }
    }
  }
</style>
