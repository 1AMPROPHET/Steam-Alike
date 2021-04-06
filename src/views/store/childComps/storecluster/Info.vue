<template>
  <div class="info">
    <div class="app-name">
      <div>{{name}}</div>
    </div>
    <div class="screen-shots">
      <div v-for="(item, index) in screenshots" :key="index">
        <div :style="{backgroundImage: 'url(' + item.img + ')'}" 
          @mouseenter="showScreenShot(index, true)" 
          @mouseleave="showScreenShot(index, false)">
        </div>
      </div>
    </div>
    <div class="reason">
      <div class="main default">现已推出</div>
      <div class="additional">
        <div>热销产品</div>
      </div>
    </div>
    <discount-block-inline class="discount-blcok" 
      :discount="priceInfo.discount" 
      :finalPrice="priceInfo.finalPrice" 
      :oldPrice="priceInfo.oldPrice"/>
  </div>
</template>

<script>
import DiscountBlockInline from '../../../../components/common/discount/DiscountBlockInline.vue';
export default {
  name: "Info",
  components: {DiscountBlockInline},
  created() {},
  data() {
    return {};
  },
  props: {
    screenshots: {
      type: Array,
      default() {
        return []
      }
    },
    name: {
      type: String,
      default() {
        return ''
      }
    },
    priceInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    showScreenShot(index, flag) {
      this.$emit('showScreenShot', index, flag)
    }
  },
};
</script>

<style lang="css" scoped>
.app-name {
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  padding-top: 0;
  font-weight: 300;
  height: 69px;
  padding-left: 6px;
  padding-right: 6px;
}
.app-name > div {
  width: 100%;
  display: block;
  max-height: 62px;
  overflow: hidden;
  font-size: 24px;
  padding-bottom: 4px;
  padding-top: 4px;
  line-height: 26px;
  font-weight: normal;
}
.screen-shots {
  width: 344px;
  display: inline-block;
  margin-left: -30px;
  max-height: 176px;
  position: relative;
}
.screen-shots > div {
  width: 162px;
  height: 69px;
  padding: 10px 10px 0 0;
  display: inline-block;
}
.screen-shots > div > div {
  width: 162px;
  height: 69px;
  background-size: cover;
  background-position: center center;
  display: inline-block;
  opacity: 0.6;
  background-color: #000;
}
.screen-shots > div > div:hover {
  opacity: 1;
}
.reason {
  margin-top: 8px;
  padding-left: 6px;
  display: inline-block;
  width: 298px;
}
.default {
  font-size: 21px;
  font-weight: 200;
  min-height: auto;
}
.main {
  padding-right: 10px;
  padding-top: 6px;
  line-height: 18px;
}
.additional {
  margin-top: 5px;
  font-size: 14px;
}
.additional > div {
  margin: 3px 0;
  display: inline-block;
  line-height: 19px;
  padding: 0 7px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: none;
  margin-right: 2px;
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 3px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 11px;
}
.discount-block {
  position: absolute;
  bottom: 10px;
  left: 632px;
  line-height: 15px;
}
</style>