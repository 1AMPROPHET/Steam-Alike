<template>
  <div class="discount-block">
    <discount-pct :discount="discount"/>
    <discount-prices :finalPrice="finalPrice" :oldPrice="oldPrice"/>
  </div>
</template>

<script>
import DiscountPct from './DiscountPct.vue';
import DiscountPrices from './DiscountPrices.vue';
export default {
  name: "DiscountBlockInline",
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
    oldPrice: {
      type: Number,
      default() {
        return 0
      }
    },
    finalPrice: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  methods: {},
};
</script>

<style lang="css" scoped>
</style>