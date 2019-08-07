<template>
  <div class="g-bd">
    <div id="j-bd">
      <div class="g-row m-index">
        <v-header :nav-data="headNavData" />
        <v-banner />
        <v-floor-one />
        <v-bottom-nav :bot-nav-data="botNavData" />
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/views/index.css";
import vHeader from "@/components/Header.vue";
import vBanner from "@/components/Banner.vue";
import vFloorOne from "@/components/FloorOne.vue";
import vBottomNav from "@/components/BottomNav.vue";
import Service from "./service";

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
      headNavData: [],
      botNavData: []
    };
  },
  created() {
    this.serviceGet();
  },
  mounted() {},
  watch: {},
  methods: {
    serviceGet() {
      Service.get().then(data => {
        this.headNavData = data;
      });
      Service.getBottom().then(data => {
        this.botNavData = data;
      });
    }
  },
  asyncData({ store, route }) {
    const promise = new Promise((reslove, reject) => {
      setTimeout(() => {
        store.dispatch("getData", {
          data: "异步数据"
        });
        reslove();
      }, 1000);
    });
    return promise;
  }
};
</script>
<style lang="less" scoped>
.mint-field {
  background: #666;
}
</style>
