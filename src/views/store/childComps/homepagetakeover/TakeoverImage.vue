<template>
  <div class="take-over-image">
    <div class="background-holder"></div>
  </div>
</template>

<script>
export default {
  name: "TakeoverImage",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.background-holder {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-repeat: no-repeat;
  background-position: center top;
  height: 450px;
  background-image: url('../../../../assets/img/takeover/background.jpg');
  transition: right 0.25s;
}
@media (min-width: 1442px) {
  .background-holder {
    right: 0 !important;
  }
}
</style>