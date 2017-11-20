<template lang="html">
  <transition name="slide">
    <div id="bind-phone">
      <scroll ref="scroll" class="content-wrapper">
        <div class="content-box">
          <div class="bind-inf-list">
            <ul>
              <li>
                <label>手机号</label>
                <div class="inp-wrapper">
                  <input type="number" placeholder="请输入您的手机号" pattern="[0-9]*">
                </div>
              </li>
              <li>
                <label>短信验证码</label>
                <div class="inp-wrapper">
                  <input type="number" placeholder="5位验证码" pattern="[0-9]*">
                </div>
                <div class="get-code">
                  <button>获取验证码</button>
                </div>
              </li>
              <li>
                <label>登陆秘密</label>
                <div class="inp-wrapper">
                  <input type="password" placeholder="请输入您的登陆密码">
                </div>
              </li>
              <li>
                <label>确认密码</label>
                <div class="inp-wrapper">
                  <input type="password" placeholder="请输入确认登陆密码">
                </div>
              </li>
            </ul>
          </div>
          <div class="submit-inf">
            <button type="button">立即绑定</button>
          </div>
        </div>
      </scroll>
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
  #bind-phone{
    position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 230; background: $color-background;
  }
  .bind-inf-list{
    margin-top: 1.07rem;
    ul{
      padding: 0 0.71rem; background: $color-highlight-background;
    }
    li{
      display: flex; height: 3.5rem; line-height: 3.5rem; border-bottom: 1px solid $color-border;
      label{
        position: relative; display: block; width: 5.71rem; padding-right: 0.71rem; font-size: $font-size-medium; color: $color-text-g-l; text-align: right;
        &:before{
          position: absolute; right: 0; top: 2px; height: 100%; font-size: $font-size-large; color: $color-text-c; content: '*';
        }
      }
      .inp-wrapper{
        flex: 1; padding-left: .36rem; font-size: $font-size-medium-x; color: $color-text-d;
        input{
          position: relative; top: 2px; width: 100%; height: 100%;
        }
      }
      .get-code{
        height: 100%;
        button{
          padding: 0.54rem 0.89rem; border: 1px solid #666; color: $color-text-g-l; border-radius: 0.29rem; background: none;
        }
      }
      &:last-child{
        border-bottom: 0;
      }
    }
  }
  .submit-inf{
    margin: 1.43rem 0.89rem;
    button{
      width: 100%; height: 3.1rem; line-height: 3.1rem; font-size: $font-size-large; color: $color-text; text-align: center; background: $color-background-c; border-radius: 0.36rem;
    }
  }
</style>
