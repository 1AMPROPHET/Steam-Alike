<template>
  <a href="" class="tab-item" :class="{focus: currentIndex === itemIndex}">
    <div class="tab-item-cap"><img class="tab-item-img" :src="tabItem.img" alt=""></div>
    <div class="discount-block tab-item-discount no-discount">
      <div class="discount-prices">
        <div class="discount-final-price">￥{{tabItem.finalPrice}}</div>
      </div>
    </div>
    <div class="tab-item-content">
      <div class="tab-item-name">{{tabItem.name}}</div>
    </div>
  </a>
</template>

<script>
export default {
  name: "TabItem",
  created() {},
  data() {
    return {};
  },
  props: {
    tabItem: {
      type: Object,
      default() {
        return {}
      }
    },
    itemIndex: {
      type: Number,
      default() {
        return 0
      }
    },
    currentIndex: {
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
.tab-item {
  position: relative;
  display: block;
  background: rgba( 0, 0, 0, 0.2 );
  height: 69px;
  margin-bottom: 5px;
  padding-left: 198px;
  text-size-adjust: none;
  -webkit-text-size-adjust: none;
}
.focus {
  background: linear-gradient( to right, #c6e6f8 5%,#95bcd3 95%);
  margin-right: -14px;
  padding-right: 14px;
  color: #66c0f4;
}
.tab-item-cap {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  line-height: 69px;
  transition: opacity 0.25s;
}
.tab-item-discount.no-discount {
  margin-top: 24px;
  width: auto;
}
.tab-item-discount {
  display: block;
  float: right;
  margin-right: 16px;
  background: none;
  margin-top: 23px;
  width: 120px;
  text-align: right;
}
.discount-prices {
  background: transparent;
  display: inline-block;
  vertical-align: bottom;
  text-align: right;
}
.discount-final-price {
  color: #acdbf5;
  font-size: 13px;
}
.focus > .discount-block > .discount-prices > .discount-final-price {
  color: #10161b;
}
.tab-item-content {
  padding-top: 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
}
.tab-item-name {
  width: auto;
  color: #c7d5e0;
  font-size: 1.25em;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  overflow: hidden;
  transition: color 0.25s;
}
.focus .tab-item-name {
  color: #10161b;
}
</style>