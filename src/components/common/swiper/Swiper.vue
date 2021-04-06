<template>
  <div class="hy-swiper">
    <div class="swiper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  created() {
  },
  mounted() {
    setTimeout(() => {
      this.getImage()
      this.startTimer()
    }, 200);
  },
  data() {
    return {
      timer: null,
      count: 0,
      imageWidth: 0,
      swiperStyle: {},
      currentIndex: 1,
      duration: 500,
      isScroll: false
    };
  },
  props: {
    thumbIndex: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  methods: {
    getImage() {
      let swiperEl = document.querySelector('.swiper')
      let slideEls = document.getElementsByClassName('slide')
      this.count = slideEls.length
      if (this.count > 1) {
        let cloneFirst = slideEls[0].cloneNode(true)
        let cloneLast = slideEls[this.count - 1].cloneNode(true)
        swiperEl.insertBefore(cloneLast, slideEls[0])
        swiperEl.appendChild(cloneFirst)
        this.imageWidth = swiperEl.offsetWidth
        // console.log(this.imageWidth);
        this.swiperStyle = swiperEl.style
      }
      this.setTransform(-this.imageWidth)
      this.$emit('indexChanged', this.currentIndex - 1)
    },
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
      this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
    },
    startTimer() {
      this.timer = window.setInterval(() => {
        this.currentIndex += 1
        this.$emit('indexChanged', this.currentIndex - 1)
        this.scrollSwiper(-this.currentIndex * this.imageWidth)
      }, 3000)
    },
    scrollSwiper(position) {
      this.isScroll = true
      this.swiperStyle.transition = 'transform ' + this.duration + 'ms'
      this.setTransform(position)
      this.checkPosition()
      this.isScroll = false
    },
    checkPosition() {
      window.setTimeout(() => {
        this.swiperStyle.transition = '0ms'
        if (this.currentIndex === this.count + 1) {
          this.currentIndex = 1
          this.setTransform(-this.currentIndex * this.imageWidth)
        }
        else if (this.currentIndex === 0) {
          this.currentIndex = this.count
          this.setTransform(-this.currentIndex * this.imageWidth)
        }
      }, this.duration)
    },
    stopTimer() {
      window.clearInterval(this.timer)
    },
    previous() {
      this.stopTimer()
      this.currentIndex -= 1
      this.scrollSwiper(-this.currentIndex * this.imageWidth)
      this.startTimer()
      this.$emit('indexChanged', this.currentIndex - 1)
    },
    next() {
      this.stopTimer()
      this.currentIndex += 1
      this.scrollSwiper(-this.currentIndex * this.imageWidth)
      this.startTimer()
      this.$emit('indexChanged', this.currentIndex - 1)
    },
    scrollTo(thumbIndex) {
      this.stopTimer()
      this.currentIndex = thumbIndex
      this.scrollSwiper(-this.currentIndex * this.imageWidth)
      this.startTimer()
    }
  },
};
</script>

<style lang="css" scoped>
.hy-swiper {
  border: 2px solid #000;
  height: 353px;
  display: flex;
  overflow: hidden;
  width: 615px;
  margin: 0 auto;
  left: 0;
  right: 0;
}
.swiper {
  display: flex;
  width: 100%;
}

</style>