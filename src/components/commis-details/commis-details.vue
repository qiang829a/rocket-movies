<template lang="html">
  <transition name="slide">
    <div id="commis-details">
      <div class="result-commis">
        <span>累计佣金：+0.00元</span>
      </div>
      <slide :slideList="slideList" class="slide"></slide>
      <scroll ref="scroll" class="content-wrapper">
        <div class="content-box">
          <div class="order-list">
            <ul>
              <li>
                <div class="order-list-top">
                  <span class="head-portrait"><img src="https://user-gold-cdn.xitu.io/2017/11/9/6adeb110a8c8369b58d01d6210fa126f?imageView2/1/w/800/h/600/q/85/format/jpg/interlace/1"></span>
                  <span class="status-text">已完成</span>
                </div>
                <div class="order-inf">
                  <dl>
                    <dd><img src=""></dd>
                    <dt>
                      <p class="product-name">火箭影院 - 终身VIP - 9.9元创业</p>
                      <p class="number">x1</p>
                    </dt>
                  </dl>
                  <div class="right-list">
                    <span>预计</span>
                    <span>+3.5</span>
                  </div>
                </div>
                <div class="other-inf">
                  <p>分销等级：一级</p>
                  <p>订单编号：一级</p>
                  <p>下单时间：2017-11-19 21:42</p>
                </div>
                <div class="list-result-commis">
                  <span>预计佣金：<em>+3.50</em></span>
                </div>
              </li>
            </ul>
          </div>
          <div class="no-order" v-show="false">
            <dl>
              <dd class="iconfont icon-dingdan"></dd>
              <dt>暂时没有任何订单</dt>
            </dl>
          </div>
        </div>
      </scroll>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import slide from 'base/slide/slide'
  export default {
    data () {
      return {
        slideList: [
          {
            text: '所有'
          },
          {
            text: '一级'
          },
          {
            text: '二级'
          },
          {
            text: '三级'
          }
        ]
      }
    },
    components: {
      Scroll,
      slide
    }
  }
</script>

<style lang="scss" scoped>
  @import "~common/scss/variable";
  #commis-details{
    position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 230; background: $color-background;
    .result-commis{
      position: absolute; left: 0; right: 0; z-index: 10; height: 2.93rem; line-height: 2.93rem; padding: 0 1.25rem; font-size: $font-size-small; color: $color-text; background: url(commis_top.png) 0 0 no-repeat; background-size: 100%;
    }
    .slide{
      position: absolute; left: 0; top: 2.93rem; right: 0; z-index: 10;
    }
    .content-box{
      padding-top: 5.97rem;
      .no-order{
        padding: 4rem 0; text-align: center;
        dd{
          font-size: 3.29rem; color: $color-text-g;
        }
        dt{
          height: 2.86rem; line-height: 2.86rem; font-size: $font-size-medium; color: $color-text-g;
        }
      }
      .order-list{
        background: $color-highlight-background;
        li{
          margin: 0.71rem 0;
          .order-list-top{
            height: 3.79rem; line-height: 3.79rem; padding: 0 1.07rem; overflow: hidden;
            .head-portrait{
              float: left; position: relative; width: 2.14rem; height: 2.14rem; margin-top: .82rem; border-radius: 50%; overflow: hidden;
              img{
                position: absolute; left: 0; top: 0; right: 0; bottom: 0; min-width: 100%; min-height: 100%; max-width: 100%; max-height: 100%; margin-left: auto;
              }
            }
            .status-text{
              float: right; font-size: $font-size-small; color: $color-text-s;
            }
          }
          .order-inf{
            display: flex; padding: 0.57rem 1.07rem; background: #f8f8f8;
            dl{
              flex: 1; display: flex;
              dd{
                width: 3.75rem; height: 3.75rem; border-radius: 0.36rem; background: $color-background; overflow: hidden;
              }
              dt{
                padding-left: 0.71rem;
                p{
                  height: 1.36rem; line-height: 1.36rem; font-size: $font-size-medium; color: $color-text-g-l;
                }
                .product-name{
                  padding-top: 0.54rem; font-size: $font-size-small;
                }
              }
            }
            .right-list{
              width: 6.07rem; border-left: 1px solid #e6e6e6; text-align: right;
              span{
                display: block; height: 1.36rem; line-height: 1.36rem; font-size: $font-size-small; color: $color-text-d;
                &:first-child{
                  padding-top: 0.54rem;
                }
              }
            }
          }
          .other-inf{
            padding: 0.71rem 1.07rem; line-height: 1.43rem; font-size: 0.79rem; color: $color-text-g-l; border-bottom: 1px solid $color-border;
          }
          .list-result-commis{
            height: 3.29rem; line-height: 3.29rem; padding: 0 1.07rem; font-size: $font-size-small; color: $color-text-d; text-align: right;
            em{
              font-size: 1.14rem;
            }
          }
        }
      }
    }
  }
</style>
