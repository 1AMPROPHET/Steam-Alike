<template>
  <div class="store-cluster">
    <div class="home-page-content">
      <h2>精选和推荐</h2>
      <div class="carousel-container">
        <cluster-carousel-item 
          :gameInfo="gameInfo" 
          @indexChanged="indexChanged" 
          :currentIndex="currentIndex"
          :timeDelay="4000"/>
        <cluster-carousel-thumb 
          :count="gameInfo.length" 
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
import ClusterCarouselItem from './ClusterCarouselItem.vue';
import ClusterCarouselThumb from './ClusterCarouselThumb.vue';
export default {
  name: "StoreCluster",
  components: {ClusterCarouselItem, ClusterCarouselThumb, LeftArrow, RightArrow},
  created() {},
  data() {
    return {
      gameInfo: [
        {
          name: 'Grand Theft Auto V',
          capsule: {img: require('@/assets/img/gtav/capsule.jpg')},
          screenshots: [
            {
              img: require('@/assets/img/gtav/screenshot1.jpg')
            },
            {
              img: require('@/assets/img/gtav/screenshot2.jpg')
            },
            {
              img: require('@/assets/img/gtav/screenshot3.jpg')
            },
            {
              img: require('@/assets/img/gtav/screenshot4.jpg')
            }
          ],
          priceInfo: {
            discount: '-50%',
            oldPrice: 98,
            finalPrice: 49
          }
        },
        {
          name: 'The Witcher 3: Wild Hunt',
          capsule: {img: require('@/assets/img/witcher/capsule.jpg')},
          screenshots: [
            {
              img: require('@/assets/img/witcher/screenshot1.jpg')
            },
            {
              img: require('@/assets/img/witcher/screenshot2.jpg')
            },
            {
              img: require('@/assets/img/witcher/screenshot3.jpg')
            },
            {
              img: require('@/assets/img/witcher/screenshot4.jpg')
            }
          ],
          priceInfo: {
            discount: '-70%',
            oldPrice: 198,
            finalPrice: 59.4
          }
        },
        {
          name: 'Rainbow6: Seige',
          capsule: {img: require('@/assets/img/rainbow6/capsule.jpg')},
          screenshots: [
            {
              img: require('@/assets/img/rainbow6/screenshot1.jpg')
            },
            {
              img: require('@/assets/img/rainbow6/screenshot2.jpg')
            },
            {
              img: require('@/assets/img/rainbow6/screenshot3.jpg')
            },
            {
              img: require('@/assets/img/rainbow6/screenshot4.jpg')
            }
          ],
          priceInfo: {
            discount: '-40%',
            oldPrice: 98,
            finalPrice: 58.8
          }
        },
      ],
      currentIndex: 0
    };
  },
  props: {},
  methods: {
    indexChanged(index) {
      this.currentIndex = index
      // console.log(index);
    },
    thumbClick(index) {
      this.currentIndex = index
    },
    arrowClick(flag) {
      if (flag) {
        this.currentIndex = this.currentIndex + 1
        if (this.currentIndex >= this.gameInfo.length) {
          this.currentIndex = 0
        } 
      }
      else {
        this.currentIndex = this.currentIndex - 1
        if (this.currentIndex < 0) {
          this.currentIndex = this.gameInfo.length - 1
        }
      }
    }
  }    
}
</script>

<style lang="css" scoped>
.store-cluster {
  padding: 0px 0 40px 0;
  position: relative;
  overflow: hidden;
}
.carousel-container {
  height: 380px;
  margin-top: 5px;
  position: relative;
}
.arrow {
  top: 122px;
}
</style>