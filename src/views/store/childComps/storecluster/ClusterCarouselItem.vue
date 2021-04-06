<template>
  <carousel-item class="carousel-item">
    <store-main-capsule v-for="(item, index) in gameInfo" 
      :key="index" 
      :capsule="item.capsule" 
      :screenshots="item.screenshots"
      :class="{active: index === currentIndex}"
      :name="item.name"
      :priceInfo="item.priceInfo"/>
  </carousel-item>
</template>

<script>
import CarouselItem from '../../../../components/common/carouselitem/CarouselItem.vue';
import StoreMainCapsule from './StoreMainCapsule.vue';
export default {
  name: "ClusterCarouselItem",
  components: {StoreMainCapsule, CarouselItem},
  created() {},
  mounted() {
    setTimeout(() => {
      this.startTimer()
    }, 200)
  },
  data() {
    return {
      count: 0
    };
  },
  props: {
    gameInfo: {
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
    timeDelay: {
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
        // console.log(this.count);
        if (this.count >= this.gameInfo.length) {
          this.count = 0
        }
        this.$emit('indexChanged', this.count)
      }, this.timeDelay)
    }
  },
};
</script>

<style lang="css" scoped>
.carousel-item {
  height: 353px;
  overflow: hidden;
  box-shadow: 0 0 7px 0 #000;
  position: relative;
  /* clear: both; */
}
.carousel-item > * {
  opacity: 0;
  width: 940px;
  transition: opacity 400ms;
  box-sizing: border-box;
  position: absolute;
}
.active {
  opacity: 1;
  width: 940px;
  transition: opacity 400ms;
  box-sizing: border-box;
  position: absolute;
}
</style>