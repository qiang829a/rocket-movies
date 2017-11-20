<template lang="html">
  <transition name="slide">
    <div id="understand-cinema">
      <scroll ref="scroll" class="content-wrapper">
        <about :ourInf="ourInf"></about>
      </scroll>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import About from 'components/about/about'
  export default {
    computed: {
      ourInf () {
        if (parseInt(this.$route.params.type) === 1) {
          return [
            {
              title: '花生简介',
              text: '花生影院顺应国家大众创业万众创新的形势，打造适合全民创业的平台，推出人人需要的大众娱乐软件。',
              style: 'color: #dd3647;'
            },
            {
              title: '关于我们',
              text: '公司力求打造最受欢迎的电影赚钱平台，稳定长久是我们的第一目标，App软件已通过腾讯，支付宝，移动客户端，阿里云的各项认证，服务器采用腾讯云顶级配置快速流畅无缓冲，保证了App客户端的稳定运行。公司实力雄厚，所有手续齐全，所推出的电影平台，拥有独立的服务器及各种资源，绝非社会上那种随时被屏蔽的公众号可比，为大家开心娱乐长久推广打下了良好的基础。'
            }
          ]
        } else if (parseInt(this.$route.params.type) === 2) {
          return [
            {
              title: '1、手机电影的背景如何？',
              text: '答：手机APP电影程序公司依托实体，推出手机影院， 力争打造国内最具实力，最实用，最长久，人人适合',
              tStyle: 'color: #ff0000;'
            },
            {
              title: '2、手机影院的合法性如何？',
              text: '公司力求打造最受欢迎的电影赚钱平台，稳定长久是我们的第一目标，App软件已通过腾讯，支付宝，移动客户端，阿里云的各项认证，服务器采用腾讯云顶级配置快速流畅无缓冲，保证了App客户端的稳定运行。公司实力雄厚，所有手续齐全，所推出的电影平台，拥有独立的服务器及各种资源，绝非社会上那种随时被屏蔽的公众号可比，为大家开心娱乐长久推广打下了良好的基础。',
              tStyle: 'color: #ff0000;'
            }
          ]
        }
      }
    },
    components: {
      Scroll,
      About
    },
    methods: {
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss">
  @import "~common/scss/variable";
  #understand-cinema{
    position: fixed; left: 0; top: 0; bottom: 0; right: 0; z-index: 230; height: 100%; background: $color-background;
  }
</style>
