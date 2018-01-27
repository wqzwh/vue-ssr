<template>
  <nav class="m-tabBar">
    <a :class="item.type === 'index' ? 'item active' : 'item'" href="/" v-for="(item, index) in botNavData" :key="index">
      <i :name="'tabBar-' + item.type " :class="'u-icon u-icon-tabBar-' + item.type "></i>
      <span class="txt">{{item.value}}</span>
    </a>
  </nav>
</template>
<script>
  export default {
    name: 'BottomNav',
    props: {
      botNavData: {
        type: Array,
        default() {
          return
        }
      }
    }
  }
</script>