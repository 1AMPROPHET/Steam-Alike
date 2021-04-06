<template>
  <div class="recommend-carousel carousel-container"  v-if="carouselList !== undefined">
    <recommend-carousel-item 
      :carouselList="carouselList" 
      :currentIndex="currentIndex" 
      :delay="3000"
      @indexChanged="indexChanged"/>
    <carousel-thumbs class="carousel-thumb" v-if="carouselList.length !== 1">
      <div v-for="(item, index) in carouselList.length" 
        :key="index"
        :class="{focus: index === currentIndex}">
      </div>
    </carousel-thumbs>
    <left-arrow class="arrow left" @click.native="arrowClick(false)"/>
    <right-arrow class="arrow right" @click.native="arrowClick(true)"/>
  </div>
</template>

<script>
import {carouselList} from './carouselList';
import LeftArrow from '../../../../../components/common/arrow/LeftArrow.vue';
import RightArrow from '../../../../../components/common/arrow/RightArrow.vue';
import CarouselThumbs from '../../../../../components/common/carouselthumbs/CarouselThumbs.vue';
import RecommendCarouselItem from '../recommend/RecommendCarouselItem.vue';
export default {
  name: "RecommendCarousel",
  components: {RecommendCarouselItem, CarouselThumbs, LeftArrow, RightArrow},
  created() {},
  data() {
    return {
      carouselList,
      currentIndex: 0
    };
  },
  props: {},
  methods: {
    arrowClick(flag) {
      if (flag) {
        this.currentIndex += 1;
        if (this.currentIndex >= this.carouselList.length) {
          this.currentIndex = 0
        }
      }
      else {
        this.currentIndex -= 1;
        if (this.currentIndex < 0) {
          this.currentIndex = this.carouselList.length - 1
        }
      }
    },
    indexChanged(index) {
      this.currentIndex = index
    }
  },
};
</script>

<style lang="css" scoped>
.focus {
  background-color: hsla(0, 0%, 100%, 0.6) !important;
}
.arrow {
  transform: translateY(-34px);
}
</style>