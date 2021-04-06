<template>
  <div class="discovery">
    <div class="home-page-content">
      <div class="discovery-ctn">
        <h2>
          您的探索队列
          <span class="span-right">
            <a href="" class="btn-white-transparent btn-small btn-uppercase">
              <span>了解更多</span>
            </a>
          </span>
        </h2>
        <discovery-static/>
      </div>
    </div>
  </div>
</template>

<script>
import DiscoveryStatic from './discoveryStatic/DiscoveryStatic.vue';
export default {
  name: "Discovery",
  components: {DiscoveryStatic},
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.discovery {
  padding: 20px 0;
}
h2 {
  margin: 0;
}
</style>