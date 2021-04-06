<template>
    <div class="home-page-content">
      <div class="carousel-container">
        <swiper ref="swiper" @indexChanged="indexChanged">
          <swiper-item v-for="(item, index) in swiperList" :key="index">
            <img :src="item.img" alt="">
          </swiper-item>
        </swiper>
        <carousel-thumbs class="carousel-thumb">
          <div v-for="(item, indey) in swiperList.length" 
            :key="indey"
            :class="{focus: indey === currentIndex}"
            @click="thumbClick(indey)">
          </div>
        </carousel-thumbs>
        <left-arrow class="arrow left" @click.native="arrowClick(false)"/>
        <right-arrow class="arrow right" @click.native="arrowClick(true)"/>
      </div>
    </div>
</template>

<script>
import LeftArrow from '../../../../components/common/arrow/LeftArrow.vue';
import RightArrow from '../../../../components/common/arrow/RightArrow.vue';
import CarouselThumbs from '../../../../components/common/carouselthumbs/CarouselThumbs.vue';
import Swiper from '../../../../components/common/swiper/Swiper.vue';
import SwiperItem from '../../../../components/common/swiper/SwiperItem.vue';
export default {
  name: "StoreSwiper",
  components: {Swiper, SwiperItem, RightArrow, LeftArrow, CarouselThumbs,},
  created() {},
  data() {
    return {
      currentIndex: 1,
      swiperList: [
        {
          img: require('../../../../assets/img/gtav/capsule.jpg')
        },
        {
          img: require('../../../../assets/img/rainbow6/capsule.jpg')
        },
        {
          img: require('../../../../assets/img/witcher/capsule.jpg')
        },
      ]
    };
  },
  props: {},
  methods: {
    arrowClick(flag) {
      if (!flag) {
        this.$refs.swiper.previous()
      }
      else {
        this.$refs.swiper.next()
      }
    },
    indexChanged(index) {
      this.currentIndex = index
      if (index === 3) {
        this.currentIndex = 0
      }
      // console.log(this.currentIndex);
    },
    thumbClick(indey) {
      this.currentIndex = indey
      this.$refs.swiper.scrollTo(indey + 1)
    }
  },
};
</script>

<style lang="css" scoped>
.left {
  left: 115px;
}
.right {
  right: 115px;
}
.focus {
  background-color: hsla(0, 0%, 100%, 0.6) !important;
}
</style>