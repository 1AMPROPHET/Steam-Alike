<template>
  <div class="discount-prices">
    <div v-if="oldPrice !== 0" class="original-price">￥ {{oldPrice}}</div>
    <div class="final-price">￥ {{finalPrice}}</div>
  </div>
</template>

<script>
export default {
  name: "DiscountPrices",
  created() {},
  data() {
    return {};
  },
  props: {
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
.discount-prices {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0 5px;
  display: inline-block;
  vertical-align: bottom;
  text-align: right;
  background: #000;
}
.original-price {
  color: #7193a6;
  display: inline-block;
  text-decoration: line-through;
  font-size: 11px;
  height: 13px;
}
.final-price {
  height: 13px;
  color: #acdbf5;
  padding-left: 4px;
  font-size: 11px;
  display: inline-block;
}
</style>