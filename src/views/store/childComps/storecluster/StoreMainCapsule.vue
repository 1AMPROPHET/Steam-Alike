<template>
  <a href="" class="store-main-capsule">
    <div class="capsule" :style="{backgroundImage: 'url(' + capsule.img + ')'}">
      <div v-for="(item, index) in screenshots" 
        :key="index" 
        class="screen-shot" 
        :class="{active: index === currentIndex}"
        :style="{backgroundImage: 'url(' + item.img + ')'}"
        @mouseenter="showInfo">
      </div>
    </div>
    <info class="info" 
      :screenshots="screenshots" 
      @showScreenShot="showScreenShot" 
      :name="name"
      :priceInfo="priceInfo"/>
  </a>
</template>

<script>
import Info from './Info.vue';
export default {
  name: "StoreMainCapsule",
  components: {Info},
  created() {},
  data() {
    return {
      currentIndex: -1
    };
  },
  props: {
    screenshots: {
      type: Array,
      default() {
        return []
      }
    },
    capsule: {
      type: Object,
      default() {
        return {}
      }
    },
    name: {
      type: String,
      default() {
        return ''
      }
    },
    priceInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    showScreenShot(index, flag) {
      if (flag) {
        // console.log('show');
        this.currentIndex = index
      }
      else if (!flag) {
        this.currentIndex = -1
        // console.log('hide');
      }
    },
    showInfo() {
      this.$toast.show(this.name, 1000)
    }
  },
};
</script>

<style lang="css" scoped>
.store-main-capsule {
  display: flex;
  background-position: right;
  background-repeat: no-repeat;
  text-decoration: none;
}
.capsule {
  flex-shrink: 0;
  background-color: #000;
  position: relative;
  z-index: 2;
  margin-right: 10px;
  width: 616px;
  height: 353px;
  background-position: center center;
  background-size: cover;
  box-shadow: 0 0 10px 5px #000;
}
.screen-shot {
  opacity: 0;
  width: 616px;
  height: 353px;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  transition: opacity 300ms;
}
.active {
  opacity: 1;
  width: 616px;
  height: 353px;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  transition: opacity 300ms;
}
.info {
  flex: 1;
  flex-shrink: 1;
  color: #fff;
  display: block;
}
</style>