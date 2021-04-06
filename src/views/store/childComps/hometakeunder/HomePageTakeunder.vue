<template>
  <div id="home-page-takeunder">
    <div class="home-page-content takeunder">
      <a href="" class="home-page-takeunder"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePageTakeunder",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.takeunder {
  margin-bottom: 60px;
  margin-top: 10px;
  position: relative;
  z-index: auto;
  display: flex;
  justify-content: center;
}
.home-page-takeunder {
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  display: block;
  background: url('../../../../assets/img/takeunder/takeunder.gif');
  background-repeat: no-repeat;
  max-width: 940px;
  width: 100%;
  height: 15.4vw;
  max-height: 150px;
  background-size: cover;
}
.home-page-takeunder:hover {
  box-shadow: 0 0 10px #66c0f4;
}
</style>