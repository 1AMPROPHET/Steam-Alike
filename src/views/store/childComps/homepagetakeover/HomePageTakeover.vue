<template>
  <div class="home-page-takeover">
    <div class="home-page-takeover-sizer">
      <a href=""></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePageTakeover",
  created() {},
  data() {
    return {
      img: {}
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.home-page-takeover {
  position: relative;
}
.home-page-takeover-sizer {
  height: 385px;
  display: block;
}
a {
  width: 100%;
  height: 100%;
  display: block;
  border: none;
}
</style>