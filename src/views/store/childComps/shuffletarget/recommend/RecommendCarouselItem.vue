<template>
  <carousel-item class="carousel-item">
    <div v-for="(carousel, index) in carouselList" :key="index" :class="{focus: index === currentIndex}">
      <a class="store-capsule" href="" 
        v-for="(item, indey) in carousel" 
        :key="indey" 
        @mouseenter="active(indey, true)" 
        @mouseleave="active(indey, false)" :class="{active: indey === itemIndex}">
        <div class="header"><img :src="item.img" alt=""></div>
        <div>
          <discount-block-inline
            class="discount-block" 
            :discount="item.discount" 
            :finalPrice="item.finalPrice" 
            :oldPrice="item.oldPrice"/>
        </div>
      </a>
    </div>
  </carousel-item>
</template>

<script>
import CarouselItem from '../../../../../components/common/carouselitem/CarouselItem.vue';
import DiscountBlockInline from '../../../../../components/common/discount/DiscountBlockInline.vue';
export default {
  name: "RecommendCarouselItem",
  components: {CarouselItem, DiscountBlockInline},
  created() {},
  mounted() {
    this.startTimer()
  },
  data() {
    return {
      count: 0,
      itemIndex: -1
    };
  },
  props: {
    carouselList: {
      type: Array,
      default() {
        return []
      }
    },
    currentIndex: {
      type: Number,
      default() {
        return 0
      }
    },
    delay: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  methods: {
    startTimer() {
      this.count = this.currentIndex
      setInterval(() => {
        this.count++
        if (this.count >= this.carouselList.length) {
          this.count = 0
        }
        this.$emit('indexChanged', this.count)
      }, this.delay)
    },
    active(index, flag) {
      if (flag) {
        this.itemIndex = index
      } else {
        this.itemIndex = -1
      }
    }
  },
};
</script>

<style lang="css" scoped>
.carousel-item {
  display: block;
  position: relative;
  clear: both;
  height: 134px;
}
.carousel-item > * {
  opacity: 0;
  display: flex;
  transition: opacity 400ms;
  width: 940px;
  position: absolute;
  left: 0;
  top: 0;
}
.store-capsule {
  margin-right: 8px;
  flex-shrink: 0;
  box-shadow: 0 0 5px #000;
  display: inline-block;
  position: relative;
  vertical-align: top;
  width: 229px;
  background: linear-gradient(-45deg, rgba(64,121,153,1) 5%,rgba(42,62,89,1) 95%);
}
.header {
  padding-top: 46.6%;
  overflow: hidden;
  vertical-align: top;
  position: relative;
}
.store-capsule div img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  vertical-align: top;
}
.discount-block {
  margin: 0;
  text-align: right;
  padding: 5px;
  line-height: 17px;
  min-height: 17px;
  font-size: 12px;
}
.focus {
  opacity: 1;
}
.active {
  background: rgb(70, 135, 179);
}
</style>