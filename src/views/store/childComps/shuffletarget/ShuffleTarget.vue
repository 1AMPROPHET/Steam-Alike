<template>
  <div class="shuffle-target">
    <recommender/>
    <store-swiper/>
    <discovery/>
  </div>
</template>

<script>
import Discovery from './discovery/Discovery.vue';
import Recommender from './recommend/Recommender';
import StoreSwiper from './StoreSwiper.vue';
export default {
  name: "ShuffleTarget",
  components: {Recommender, StoreSwiper, Discovery},
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>

</style>