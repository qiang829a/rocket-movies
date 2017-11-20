<template lang="html">
  <transition name="slide">
    <div id="promotion-commission">
      <scroll ref="scroll" class="content-wrapper">
        <div class="content-box">
          <div class="acc-commission">
            <div class="acc-top">
              <p>累计佣金(元)</p>
              <strong>888</strong>
            </div>
            <p class="available-cash">可提现佣金 389 元</p>
          </div>
          <div class="menu-list">
            <ul>
              <li>
                <p>已申请佣金</p>
                <em class="money">0.00元</em>
              </li>
              <li>
                <p>待打款佣金</p>
                <em class="money">0.00元</em>
              </li>
              <li>
                <p>成功提现佣金</p>
                <em class="money">0.00元</em>
              </li>
            </ul>
          </div>
          <div class="user-ins">
            <h6>用户须知</h6>
            <p>买家确认收货后，立即获得推广佣金<br />注意：可用佣金满 <em>10</em> 元后才能申请提现</p>
          </div>
        </div>
      </scroll>
      <div class="to-withdrawals">
        <router-link to="/">我要提现</router-link>
      </div>
    </div>
  </transition>
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
  #promotion-commission{
    position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 230; background: $color-background;
    .to-withdrawals{
      position: absolute; left: 0; bottom: 0; right: 0; z-index: 10; height: 3.8rem; line-height: 3.8rem; background: #f24d5e;
      a{
        display: block; font-size: 1.21rem; color: $color-text; text-align: center;
      }
    }
  }
  .acc-commission{
    height: 10.71rem; background: url(acc_bg.png) 0 0 no-repeat; background-size: 100%;
    .acc-top{
      position: relative; height: 7.86rem; margin: 0 1.61rem; text-align: center;
      p{
        height: 1.96rem; line-height: 1.96rem; padding-top: 1.07rem; font-size: $font-size-medium; color: $color-text;
      }
      strong{
        height: 3.93rem; line-height: 3.93rem; font-size: 3.21rem; color: $color-text; font-weight: 500;
      }
      &:after{
        position: absolute; left: 0; right: 0; bottom: 0; height: 1px; background: linear-gradient(to left, #ffca6b, #f99d49 88%); content: '';
      }
    }
    .available-cash{
      height: 2.86rem; line-height: 2.86rem; font-size: $font-size-medium; color: $color-text; text-align: center;
    }
  }
  .menu-list{
    margin-top: 0.71rem; background: $color-highlight-background;
    ul{
      padding: 0 0.71rem;
      li{
        display: flex; height: 2.93rem; line-height: 2.93rem; border-bottom: 1px solid $color-border;
        p{
          flex: 1; font-size: $font-size-medium-x; color: $color-dialog-background;
        }
        em{
          display: block; font-size: $font-size-medium-x; color: $color-text-d; text-align: right;
        }
        &:last-child{
          border-bottom: 0;
        }
      }
    }
  }
  .user-ins{
    margin: 0.71rem 0 4rem; padding: 0 1.07rem; background: $color-highlight-background;
    h6{
      height: 1.86rem; line-height: 1.86rem; padding-top: 0.79rem; font-size: 1.21rem; color: $color-text-d; font-weight: normal;
    }
    p{
      line-height: 1.71rem; padding: 0.25rem 0 1rem; font-size: $font-size-medium; color: $color-text-g-l;
      em{
        color: $color-text-c;
      }
    }
  }
</style>
