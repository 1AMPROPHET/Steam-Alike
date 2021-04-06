<template>
  <div class="discount-block-spotlight">
    <discount-pct :discount="discount" class="discount-large"/>
    <discount-prices 
      v-if="finalPrice !== 0"
      :finalPrice="finalPrice" 
      :oldPrice="oldPrice" 
      class="discount-price"/>
  </div>
</template>

<script>
import DiscountPct from './DiscountPct.vue';
import DiscountPrices from './DiscountPrices.vue';
export default {
  name: "DiscountBlockSpotlight",
  components: {DiscountPct, DiscountPrices},
  created() {},
  data() {
    return {};
  },
  props: {
    discount: {
      type: String,
      default() {
        return ''
      }
    },
    finalPrice: {
      type: Number,
      default() {
        return 0
      }
    },
    oldPrice: {
      type: Number,
      default() {
        return 0
      }
    },
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.discount-block-spotlight {
  position: relative;
}
.discount-large {
  padding: 0 5px;
  line-height: 34px;
  font-size: 26px;
}
.discount-price {
  line-height: 13px;
  padding: 4px 10px 4px 7px;
  display: inline-block;
  vertical-align: bottom;
  text-align: right;
  width: 45px;
  height: 26px;
  margin: 0;
}

</style>