<template>
  <div class="recommend-carousel carousel-container">
    <recommend-carousel-item 
      :carouselList="carouselList" 
      :currentIndex="currentIndex" 
      :delay="3000"
      @indexChanged="indexChanged"/>
    <carousel-thumbs class="carousel-thumb" v-if="carouselList.length !== 1">
      <div v-for="(item, index) in carouselList.length" 
        :key="index"
        :class="{focus: index ===currentIndex}">
      </div>
    </carousel-thumbs>
    <left-arrow class="arrow left" @click.native="arrowClick(false)"/>
    <right-arrow class="arrow right" @click.native="arrowClick(true)"/>
  </div>
</template>

<script>
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
      carouselList: [
        [
          {
            img: require('../../../../../assets/img/recommend/header1.jpg'),
            finalPrice: 288
          },
          {
            img: require('../../../../../assets/img/recommend/header2.jpg'),
            discount: '-71%',
            oldPrice: 163,
            finalPrice: 48
          },
          {
            img: require('../../../../../assets/img/recommend/header3.jpg'),
            finalPrice: 138
          },
          {
            img: require('../../../../../assets/img/recommend/header4.jpg'),
            finalPrice: 126
          }
        ],
        [
          {
            img: require('../../../../../assets/img/recommend/header5.jpg'),
            finalPrice: 50
          },
          {
            img: require('../../../../../assets/img/recommend/header6.jpg'),
            finalPrice: 128
          },
          {
            img: require('../../../../../assets/img/recommend/header7.jpg'),
            discount: '-67%',
            oldPrice: 199,
            finalPrice: 65
          },
          {
            img: require('../../../../../assets/img/recommend/header8.jpg'),
            finalPrice: 138
          }
        ]
      ],
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