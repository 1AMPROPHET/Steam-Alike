<template>
  <div id="store">
    <div class="body">
      <takeover-image/>
      <homepage-content/>
      <home-page-takeover/>
      <store-cluster/>
      <home-page-takeunder/>
      <special-offers/>
      <shuffle-target/>
      <big-buttons/>
      <tab-container/>
    </div>
  </div>
</template>

<script>
import BigButtons from './childComps/bigbuttons/BigButtons.vue';
import HomePageTakeover from './childComps/homepagetakeover/HomePageTakeover.vue';
import TakeoverImage from './childComps/homepagetakeover/TakeoverImage.vue';
import HomePageTakeunder from './childComps/hometakeunder/HomePageTakeunder.vue';
import ShuffleTarget from './childComps/shuffletarget/ShuffleTarget.vue';
import SpecialOffers from './childComps/specialoffers/SpecialOffers.vue';
import StoreCluster from './childComps/storecluster/StoreCluster.vue';
import HomepageContent from './childComps/storenav/HomepageContent.vue';
import TabContainer from './childComps/tabcontainer/TabContainer.vue';
export default {
  name: "Store",
  components: {
    HomepageContent, StoreCluster, SpecialOffers, HomePageTakeunder, 
    HomePageTakeover, TakeoverImage, ShuffleTarget,
    BigButtons, TabContainer
  },
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
#store {
  display: flex;
  position: relative;
  width: auto;
}
.body {
  width: 100%;
  color: #c6d4df;
  font-size: 12px;
  position: relative;
}
</style>