<template>
  <div class="home-area-spotlight">
    <div class="spotlight-img">
      <a href="">
        <img :src="spotlightItem.img" alt="">
      </a>
    </div>
    <div class="spotlight-content">
      <h2>{{spotlightItem.title}}</h2>
      <div class="spotlight-body">{{spotlightItem.time}}</div>
      <div class="spotlight-body spotlight-price">
        <discount-block-spotlight
          :discount="spotlightItem.discount" 
          :finalPrice="spotlightItem.finalPrice" 
          :oldPrice="spotlightItem.oldPrice"/>
      </div>
    </div>
  </div>
</template>

<script>
import DiscountBlockSpotlight from '../../../../components/common/discount/DiscountBlockSpotlight.vue';
export default {
  name: "HomeAreaSpotlight",
  components: {DiscountBlockSpotlight},
  created() {},
  data() {
    return {};
  },
  props: {
    spotlightItem: {
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
.home-area-spotlight {
  margin-right: 11px;
  height: 390px;
  box-shadow: 0 0 5px #000000;
  position: relative;
}
.spotlight-img {
  padding-left: 0;
  padding-top: 0;
  width: 306px;
  overflow: hidden;
}
.spotlight-content {
  background-image: url('../../../../assets/img/common/background-spotlight.jpg');
  background-position: center bottom;
  margin: 0;
  min-height: 23px;
  padding: 8px 16px 12px 16px;
  color: #9099a1;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  width: 274px;
}
.spotlight-body {
  font-weight: 300;
  color: #acdbf5;
}
.spotlight-price {
  margin-top: 10px;
}
</style>