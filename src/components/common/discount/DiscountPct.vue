<template>
  <div class="discount-pct">{{discount}}</div>
</template>

<script>
export default {
  name: "DiscountPct",
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
    }
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.discount-pct {
  padding: 0 3px;
  color: #a4d007;
  background: #4c6b22;
  display: inline-block;
}
</style>