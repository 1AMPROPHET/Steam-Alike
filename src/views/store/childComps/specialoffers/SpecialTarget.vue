<template>
  <div>
    <a href="" class="special-target-capsule">
      <div class="header">
        <img :src="target.header" alt="">
      </div>
      <div class="content">
        <discount-block-spotlight
          class="discount-block" 
          :discount="target.discount"
          :finalPrice="target.finalPrice"
          :oldPrice="target.oldPrice"/>
      </div>
    </a>
  </div>
</template>

<script>
import DiscountBlockSpotlight from '../../../../components/common/discount/DiscountBlockSpotlight.vue';
export default {
  components: { DiscountBlockSpotlight },
  name: "SpecialTarget",
  created() {},
  data() {
    return {};
  },
  props: {
    target: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.special-target-capsule {
  background-image: url('../../../../assets/img/common/background-spotlight.jpg');
  width: 306px;
  height: 189px;
  margin-bottom: 15px;
  box-shadow: 0 0 5px #000;
  margin-right: 0;
  display: inline-block;
  position: relative;
  vertical-align: top;
}
.header {
  padding-top: 46.57%;
  overflow: hidden;
  vertical-align: top;
  position: relative;
}
.header img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  vertical-align: top;
}
.discount-block {
  float: right;
  margin-top: 5px;
  margin-right: 3px;
}
</style>