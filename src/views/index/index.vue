<template>
  <div class="g-bd">
    <div id="j-bd">
      <div class="g-row m-index">
        <v-header/>
        <v-banner/>
        <v-floor-one/>
        <v-bottom-nav/>
      </div>
    </div>  
  </div>
</template>
<script>
import '@/assets/views/index.css';
import vHeader from '@/components/Header.vue';
import vBanner from '@/components/Banner.vue';
import vFloorOne from '@/components/FloorOne.vue';
import vBottomNav from '@/components/BottomNav.vue';

export default {
  name: "Index",
  components: {
    vHeader,
    vBanner,
    vFloorOne,
    vBottomNav
  },
  data() {
    return {
      value: ""
    };
  },
  mounted() {},
  watch: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.mint-field {
  background: #666;
}
</style>
