<template>
  <div class="special-offers">
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
      specialOffersList: [
        [
          {
            offer: {
              img: require('@/assets/img/specialspotlight/alyx/spotlight-image.jpg'),
              title: '疯狂周三',
              time: '优惠截止日期: 3月27日上午1:00',
              discount: '-50%',
              oldPrice: 198,
              finalPrice: 99
            },
            target: {
              header: require('@/assets/img/specialtarget/steep/header.jpg'),
              discount: '-80%',
              oldPrice: 148,
              finalPrice: 29
            }
          },
          {
            offer: {
              img: require('@/assets/img/specialspotlight/overcooked/spotlight-image.jpg'),
              title: '疯狂周三',
              time: '优惠截止日期: 3月27日上午1:00',
              discount: '最高可省 -76%',
            },
            target: {
              header: require('@/assets/img/specialtarget/eurotruck/header.jpg'),
              discount: '-76%',
              oldPrice: 99,
              finalPrice: 24
            }
          },
        ],
        [
          {
            offer: {
              img: require('@/assets/img/specialspotlight/killingfloor2/spotlight-image.jpg'),
              title: '疯狂周三',
              time: '优惠截止日期: 3月27日上午1:00',
              discount: '-75%',
              oldPrice: 88,
              finalPrice: 22
            },
            target: {
              header: require('@/assets/img/specialtarget/reddead/header.jpg'),
              discount: '-33%',
              oldPrice: 249,
              finalPrice: 166
            }
          },
          {
            offer: {
              img: require('@/assets/img/specialspotlight/rpgmaker/spotlight-image.jpg'),
              title: '疯狂周三',
              time: '优惠截止日期: 3月27日上午1:00',
              discount: '最高可省 -92%',
            },
            target: {
              header: require('@/assets/img/specialtarget/farcry5/header.jpg'),
              discount: '-80%',
              oldPrice: 298,
              finalPrice: 59
            }
          },
        ]
      ],
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
      if (flag) {
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