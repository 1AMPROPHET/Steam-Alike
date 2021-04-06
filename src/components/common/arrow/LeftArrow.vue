<template>
  <div class="left-arrow">
    <div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftArrow",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.left-arrow > div {
  background-position-x: 23px;
  background-image: url('../../../assets/img/common/arrows.png');
  width: 23px;
  height: 36px;
  cursor: pointer;
}
</style>