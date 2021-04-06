<template>
  <div class="right-arrow">
    <div></div>
  </div>
</template>

<script>
export default {
  name: "RightArrow",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.right-arrow > div {
  background-image: url('../../../assets/img/common/arrows.png');
  width: 23px;
  height: 36px;
  cursor: pointer;
}
</style>