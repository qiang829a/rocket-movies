<template>
  <div id="app">
    <keep-alive>
      <router-view class="view"></router-view>
    </keep-alive>
    <movies-footer class="footer"></movies-footer>
  </div>
</template>

<script type="text.ecmascript-6">
  import MoviesFooter from 'components/footer/footer'
  export default {
    components: {
      MoviesFooter
    }
  }
</script>

<style lang="scss">
  html,body,#app{
    height: 100%; overflow: hidden;
  }
  #app{
    .view{
      position: absolute; left: 0; right: 0; top: 0; bottom: 3.57rem; margin-bottom: 1px;
    }
    .footer{
      position: fixed; left: 0; right: 0; bottom: 0; z-index: 200;
    }
  }
</style>
