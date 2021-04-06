<template>
  <carousel-item class="carousel-item">
    <div v-for="(item, index) in specialOffersList" :key="index" :class="{focus: index === currentIndex}">
      <home-area-spotlight v-for="(spotlightItem, indey) in item" :key="indey" :spotlightItem="spotlightItem.offer"/>
      <div>
        <special-target class="special-target" v-for="(target, indez) in item" :key="indez" :target="target.target"/>
      </div>
    </div>
  </carousel-item>
</template>

<script>
import CarouselItem from '../../../../components/common/carouselitem/CarouselItem.vue';
import HomeAreaSpotlight from './HomeAreaSpotlight.vue';
import SpecialTarget from './SpecialTarget.vue';
export default {
  name: "SpecialCarouselItem",
  components: {CarouselItem, HomeAreaSpotlight, SpecialTarget},
  created() {},
  mounted() {
    setTimeout(() => {
      this.startTimer()
    }, 200);
  },
  data() {
    return {
      count: 0
    };
  },
  props: {
    specialOffersList: {
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
        this.count += 1
        if (this.count >= this.specialOffersList.length) {
          this.count = 0
        }
        this.$emit('specialIndexChanged', this.count)
      }, this.timeDelay);
    }
  },
};
</script>

<style lang="css" scoped>
.carousel-item {
  height: 390px;
  position: relative;
  clear: both;
}
.carousel-item > * {
  display: flex;
  transition: opacity 400ms;
  width: 940px;
  pointer-events: none;
  opacity: 0;
  position: absolute;
}
.focus {
  opacity: 1;
  pointer-events: auto;
}
.carousel-item > div > div {
  margin-right: 11;
}
.special-target {
  height: 201px;
}
</style>