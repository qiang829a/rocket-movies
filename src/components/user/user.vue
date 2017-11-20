<template lang="html">
  <div class="user-center">
      <scroll ref="scroll" class="content-wrapper">
        <div class="content-box">
          <div class="self-inf">
            <dl>
              <dd>
                <img src="https://user-gold-cdn.xitu.io/2017/11/9/6adeb110a8c8369b58d01d6210fa126f?imageView2/1/w/800/h/600/q/85/format/jpg/interlace/1">
              </dd>
              <dt>
                <p class="name">名字</p>
                <p class="expiry-date">有效期：火箭永久会员</p>
                <p class="other-inf">
                  <span>推荐人：总店</span>
                  <span>ID：29870</span>
                </p>
              </dt>
            </dl>
            <div class="self-inf-footer">
              <p>可提现金额（元）</p>
              <strong>389</strong>
              <router-link to="/" class="withdraw-cash">申请提现</router-link>
            </div>
          </div>
          <div class="menu-list my-extend">
            <h5>我的推广</h5>
            <router-link :to="{name: 'promotion-commission'}">
              <dl>
                <dd><img src="./promotion_com.png" alt=""></dd>
                <dt>推广佣金</dt>
              </dl>
            </router-link>
            <router-link :to="{name: 'commis-details'}">
              <dl>
                <dd><img src="./commission_details.png" alt=""></dd>
                <dt>佣金明细</dt>
              </dl>
            </router-link>
            <router-link to="/">
              <dl>
                <dd><img src="./withdraw_record.png" alt=""></dd>
                <dt>提现记录</dt>
              </dl>
            </router-link>
            <router-link :to="{name: 'my-apprentice'}">
              <dl>
                <dd><img src="./my_apprentice.png" alt=""></dd>
                <dt>我的下级</dt>
              </dl>
            </router-link>
          </div>
          <div class="menu-list about-us">
            <h5>关于火箭</h5>
            <router-link to="/">
              <dl>
                <dd><img src="./promotional_pos.png" alt=""></dd>
                <dt>推广海报</dt>
              </dl>
            </router-link>
            <router-link to="/">
              <dl>
                <dd><img src="./spare_weixin.png" alt=""></dd>
                <dt>备用公众号</dt>
              </dl>
            </router-link>
            <router-link to="/">
              <dl>
                <dd><img src="./notice_concern.png" alt=""></dd>
                <dt>关注通知号</dt>
              </dl>
            </router-link>
            <router-link :to="{name: 'about-us', params: {type: 1}}">
              <dl>
                <dd><img src="./understand_cinema.png" alt=""></dd>
                <dt>了解影院</dt>
              </dl>
            </router-link>
            <div class="line"></div>
            <router-link :to="{name: 'about-us', params: {type: 2}}">
              <dl>
                <dd><img src="./common_problem.png" alt=""></dd>
                <dt>常见问题</dt>
              </dl>
            </router-link>
            <router-link :to="{name: 'bind-phone'}">
              <dl>
                <dd><img src="./bind_mobile_phone.png" alt=""></dd>
                <dt>绑定手机</dt>
              </dl>
            </router-link>
          </div>
        </div>
      </scroll>
      <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  export default {
    components: {
      Scroll
    }
  }
</script>

<style lang="scss" scoped>
  @import "~common/scss/variable";
  .user-center{
    background: $color-background;
    .content-wrapper{
      margin: 0 1.07rem;
      .content-box{
        padding: 1.07rem 0 1.79rem;
      }
      .self-inf{
        padding: 1.07rem; border-radius: 0.36rem; background: linear-gradient(to right, #fb5869, #dc3445);
        dl{
          display: flex; padding-bottom: 0.54rem; border-bottom: 1px solid #f95969;
          dd{
            position: relative; width: 4.21rem; height: 4.21rem; border: 1px solid #fff; border-radius: 50%; overflow: hidden;
            img{
              min-width: 100%; min-height: 100%; position: absolute; left: 0; top: 0; right: 0; bottom: 0; margin: auto;
            }
          }
          dt{
            flex: 1; line-height: 1.61rem; padding-left: 0.71rem; font-size: $font-size-medium; color: #ff98a2;
            .name{
              height: 1.32rem; line-height: 1.32rem; padding-bottom: 0.18rem; font-size: 1.14rem; color: $color-text;
            }
            .other-inf{
              font-size: 0;
              span{
                display: inline-block; padding-right: 1.96rem; font-size: $font-size-medium;
                &:last-child{
                  padding-right: 0;
                }
              }
            }
          }
        }
        .self-inf-footer{
          position: relative;
          p{
            line-height: 1.96rem; margin-top: 0.54rem; font-size: $font-size-medium; color: #ff98a2;
          }
          strong{
            height: 1.64rem; font-size: 1.79rem; color: $color-text;
          }
          .withdraw-cash{
            position: absolute; right: 0; top: 1.07rem; width: 5.36rem; height: 1.71rem; line-height: 1.71rem; border-radius: 1.71rem; font-size: $font-size-small; color: $color-text; text-align: center; background: #f64658;
          }
        }
      }
      .menu-list{
        margin-top: 1.07rem; padding-bottom: 0.18rem; font-size: 0; background: $color-highlight-background; border-radius: 0.36rem;
        h5{
          height: 3.29rem; line-height: 3.29rem; padding: 0 1.07rem; border-bottom: 1px solid $color-border; font-size: $font-size-medium; color: $color-text-d;
        }
        a{
          display: inline-block; width: 25%; text-align: center;
          dd{
            width: 2.21rem; height: 2.21rem; margin: 0.82rem auto 0; overflow: hidden;
          }
          dt{
            height: 2.79rem; line-height: 2.79rem; font-size: $font-size-medium; color: $color-text-g;
          }
        }
      }
    }
  }

</style>
