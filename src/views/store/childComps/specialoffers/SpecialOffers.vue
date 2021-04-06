<template>
  <div class="special-offers" v-if="specialOffersList !== undefined">
    <div class="home-page-content special-offers">
      <h2>
        特别优惠
        <span class="span-right">
          <a href="" class="btn-white-transparent btn-small btn-uppercase">
            <span>浏览更多</span>
          </a>
        </span>
      </h2>
      <div class="carousel-container spotlight">
        <special-carousel-item 
          :specialOffersList="specialOffersList" 
          @specialIndexChanged="specialIndexChanged"
          :currentIndex="currentIndex"
          :timeDelay="3000"/>
        <special-carousel-thumbs 
          :count="specialOffersList.length" 
          :currentIndex="currentIndex"
          @thumbClick="thumbClick"/>
        <left-arrow class="arrow left" @click.native="arrowClick(false)"/>
        <right-arrow class="arrow right" @click.native="arrowClick(true)"/>
      </div>
    </div>
  </div>
</template>

<script>
import {specialOffersList} from './specialOffersList.js'
import LeftArrow from '../../../../components/common/arrow/LeftArrow.vue';
import RightArrow from '../../../../components/common/arrow/RightArrow.vue';
import SpecialCarouselItem from './SpecialCarouselItem.vue';
import SpecialCarouselThumbs from './SpecialCarouselThumbs.vue';
export default {
  name: "SpecailOffers",
  components: {SpecialCarouselItem, SpecialCarouselThumbs, RightArrow, LeftArrow},
  created() {},
  data() {
    return {
      specialOffersList,
      currentIndex: 0
    };
  },
  props: {
  },
  methods: {
    specialIndexChanged(index) {
      this.currentIndex = index
    },
    thumbClick(index) {
      this.currentIndex = index
    },
    arrowClick(flag) {
      if (flag && (this.specialOffersList !== undefined)) {
        this.currentIndex = this.currentIndex + 1
        if (this.currentIndex >= this.specialOffersList.length) {
          this.currentIndex = 0
        } 
      }
      else {
        this.currentIndex = this.currentIndex - 1
        if (this.currentIndex < 0) {
          this.currentIndex = this.specialOffersList.length - 1
        }
      }
    }
  },
};
</script>

<style lang="css" scoped>
.home-page-content {
  z-index: auto;
}
.carousel-container {
  padding: 0;
  margin: 0;
  position: relative;
}
</style>