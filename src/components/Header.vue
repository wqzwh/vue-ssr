<template>
  <div>
    <div class="m-hd">
      <div class="m-downloadBanner hide">
        <div class="g-row">
          <i class="u-icon u-icon-openAppClose close"></i>
          <div class="brand">
            <i class="logo u-icon u-icon-openAppLogo"></i>
            <div class="cnt">
              <p class="txt1">网易严选</p>
              <p class="txt2">立即领取APP新人专享1000元礼包</p>
            </div>
          </div>
          <a class="w-button btn" href="javascript:void(0);">打开APP</a>
        </div>
      </div>
      <div class="m-indexHd">
        <div class="line">
          <a class="logo" href="/"></a>
          <div class="m-topSearchIpt ipt">
            <i class="icon"></i>
            <span class="placeholder">搜索商品, 共10292款好物</span>
          </div>
        </div>
        <div class="m-tabs   scroll">
          <header>
            <div class="inner" style="position:relative;height:100%;width:100%;overflow-x: auto;">
              <div class="list" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
                <div :class="item.type === 0 ? 'tab active' : 'tab'" v-for="(item, index) in navData" :key="index">
                  <span class="txt">{{item.name}}</span>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    props: {
      navData: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {

      }
    }
  }
</script>
<style scoped>
  .inner::-webkit-scrollbar {
      display: none;
  }
</style>
