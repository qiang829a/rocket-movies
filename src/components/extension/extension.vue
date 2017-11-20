<template lang="html">
  <div id="extension">
    <scroll ref="scroll" class="content-wrapper">
      <div class="content-box">
        <div class="extension-head">
          <dl>
            <dd>
              <img src="./money_icon.png">
            </dd>
            <dt>
              <p>指纹长按下方海报选择【发送给朋友】</p>
              <p>好友成为会员你就会获得佣金</p>
            </dt>
          </dl>
        </div>
        <div class="share-banner">
          <img src="./share.png">
        </div>
        <div class="matters-need-att">
          <p class="iconfont icon-smile">&nbsp;推广赚钱必看：如何赚钱及注意事项</p>
        </div>
        <div class="context-wrapper">
          <p>第①步：指纹长按上方海报选择【发送给朋友】；</p>
          <p>第②步：从您转发的二维码扫描进入火箭影院的好友，系统将自动锁定成为您的客户，他们成为会员之后，您就可以获得推广佣金；</p>
          <p>—————————————————<br />第一级（直接推荐）：奖励3.5元／人<br />第二级（间接推荐）：奖励2.5/人<br />第三级（间接推荐）：奖励1.0/人<br />—————————————————</p>
          <p>第③步：您可以在会员中心查看【我的下级】和【佣金明细】，并且随时可以申请提现；</p>
      </div>
      <div class="illustrate">
        <p>说明：推广二维码会带有独特的推荐码，您的好友使用微信扫描之后，系统会自动检测并记录客户关系，如果您的好友已被其他人抢先发展成了客户，他就不能成为您的客户，以最早发展成为客户为准。</p>
      </div>
    </div>
    </scroll>
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
  #extension{
    background: $color-background;
    .extension-head{
      padding: 0 1.07rem; background: $color-highlight-background;
      dl{
        display: flex; padding: 1.61rem 0 1.36rem;
        dd{
          width: 2.64rem; height: 2.64rem;
        }
        dt{
          flex: 1; padding-left: 1.07rem;
          p{
            line-height: 1.32rem; font-size: 1.21rem; color: $color-text-d;
            &:last-child{
              font-size: $font-size-medium-x; color: $color-text-g-l;
            }
          }
        }
      }
    }
    .share-banner{
      height: 39.07rem;
    }
    .matters-need-att{
      height: 2.36rem; line-height: 2.36rem; padding: 0 1.07rem; font-size: $font-size-large; color: $color-text-g-l; background: $color-background;
    }
    .context-wrapper{
      padding: 0 1.07rem; background: $color-highlight-background;
      p{
        line-height: 1.57rem; padding-top: 1.61rem; font-size: $font-size-medium-x; color: $color-text-g-l;
        &:last-child{
          padding-bottom: 0.5rem; border-bottom: 1px solid $color-border;
        }
      }
    }
    .illustrate{
      background: $color-highlight-background; overflow: hidden;
      p{
        line-height: 1.43rem; margin: 1.25rem 1.61rem; padding: 0.71rem 0.89rem; border: 1px solid $color-border; font-size: $font-size-medium; color: $color-text; border-radius: 0.29rem; background: $color-background-c-l;
      }
    }
  }
</style>
