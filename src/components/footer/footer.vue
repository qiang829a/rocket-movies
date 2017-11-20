<template lang="html">
  <div class="footer">
    <router-link to="/home">
      <dl>
        <dd class="movies"></dd>
        <dt>进入影院</dt>
      </dl>
    </router-link>
    <router-link to="/a">
      <dl>
        <dd class="make-money"></dd>
        <dt>赚钱</dt>
      </dl>
    </router-link>
    <router-link to="/extension">
      <dl>
        <dd class="extension-mk"></dd>
        <dt>推广赚钱</dt>
      </dl>
    </router-link>
    <router-link to="/user">
      <dl>
        <dd class="vip"></dd>
        <dt>会员中心</dt>
      </dl>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="scss" scoped>
  @import "~common/scss/variable";
  .footer{
    position: relative; display: flex; height: 3.57rem; border-top: 1px solid #dedede; background: $color-text;
    a{
      flex: 1;
      dd{
        width: 1.61rem; height: 1.5rem; margin: 0.5rem auto 0; background-position: center; background-repeat: no-repeat; background-size: contain;
        &.movies{
          background-image: url(movies.png);
        }
        &.make-money{
          background-image: url(money.png);
        }
        &.extension-mk{
          background-image: url(qr_code.png);
        }
        &.vip{
          background-image: url(vip.png);
        }
      }
      dt{
        height: 1.5rem; line-height: 1.5rem; font-size: $font-size-small-s; color: $color-text-g; text-align: center;
      }
      &.router-link-active{
        .movies{
          background-image: url(movies_on.png);
        }
        dt{
          color: $color-text-c;
        }
        .make-money{
          background-image: url(money_on.png);
        }
        .extension-mk{
          background-image: url(qr_code_on.png);
        }
        .vip{
          background-image: url(vip_on.png);
        }
      }
    }
  }
</style>
