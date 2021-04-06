<template>
  <carousel-thumbs class="carousel-thumb">
    <div v-for="(item, index) in count" 
      :key="index" 
      :class="{focus: index === currentIndex}"
      @click="thumbClick(index)">
    </div>
  </carousel-thumbs>
</template>

<script>
import CarouselThumbs from '../../../../components/common/carouselthumbs/CarouselThumbs.vue';
export default {
  name: "specialCarouselThumbs",
  components: {CarouselThumbs},
  created() {},
  data() {
    return {};
  },
  props: {
    count: {
      type: Number,
      default() {
        return 0
      }
    },
    currentIndex: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  methods: {
    thumbClick(index) {
      this.$emit('thumbClick', index)
    }
  },
};
</script>

<style lang="css" scoped>
.focus {
  background-color: hsla(0, 0%, 100%, 0.6) !important;
}
</style>