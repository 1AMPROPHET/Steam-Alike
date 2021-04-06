<template>
  <div class="discovery-static" @mouseenter="changeAlpha(true)" @mouseleave="changeAlpha(false)">
    <a href="" id="discovery-link" class="discovery-overlay">
      <div class="begin-exploring">点击这里开始探索您的队列</div>
    </a>
    <div class="discovery-queue">
      <div class="dq-item dq-static-pos-2">
        <div class="dq-item-overlay" :style="{background: 'rgba(0,0,0,' + alpha[0] + ')'}"></div>
        <img class="dq-item-cap" src="@/assets/img/discovery/header1.jpg" alt="">
      </div>
      <div class="dq-item dq-static-pos-3">
        <div class="dq-item-overlay" :style="{background: 'rgba(24,31,39,' + alpha[1] + ')'}"></div>
        <img class="dq-item-cap" src="@/assets/img/discovery/header2.jpg" alt="">
      </div>
      <div class="dq-item dq-static-pos-4">
        <div class="dq-item-overlay" :style="{background: 'rgba(24,31,39,' + alpha[2] + ')'}"></div>
        <img class="dq-item-cap" src="@/assets/img/discovery/header3.jpg" alt="">
      </div>
      <div class="dq-item dq-static-pos-5">
        <div class="dq-item-overlay" :style="{background: 'rgba(24,31,39,' + alpha[3] + ')'}"></div>
        <img class="dq-item-cap" src="@/assets/img/discovery/header4.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscoveryStatic",
  created() {},
  data() {
    return {
      alpha: [
        0.1, 0.4, 0.6, 0.8
      ],
      beta: [0,0,0,0]
    };
  },
  props: {},
  methods: {
    changeAlpha(flag) {
      if (flag) {
        this.beta = [0, 0.2, 0.4, 0.6]
        this.alpha = this.beta
      } else {
        this.alpha = [0.1, 0.4, 0.6, 0.8]
      }
    }
  },
};
</script>

<style lang="css" scoped>
.discovery-static {
  border: none;
  margin-top: 0;
  background: transparent;
  padding-top: 14px;
  position: relative;
  z-index: 1;
}
.discovery-overlay {
  border: none;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 30;
}
.discovery-queue {
  height: 180px;
  position: relative;
}
.dq-item {
  position: absolute;
  box-shadow: 0 0 8px 0 #000;
}
.dq-item img {
  user-select: none;
}
.dq-static-pos-2 {
  top: 0;
  left: 0;
  z-index: 5;
  opacity: 1;
  width: 386px;
  height: 180px;
}
.dq-item-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
}
.dq-item-cap {
  width: 100%;
  height: auto;
  display: block;
}
.dq-static-pos-3 {
  box-shadow: 0 0 6px rgba(0 0 0 / 60%);
  top: 11px;
  left: 221px;
  z-index: 4;
  opacity: 1;
  width: 345px;
  height: 162px;
}
.dq-static-pos-4 {
  box-shadow: 0 0 4px rgb(0 0 0 / 40%);
  top: 20px;
  left: 431px;
  z-index: 3;
  opacity: 1;
  width: 306px;
  height: 144px;
}
.dq-static-pos-5 {
  box-shadow: 0 0 2px rgb(0 0 0 / 20%);
  top: 28px;
  left: 641px;
  z-index: 2;
  opacity: 1;
  width: 267px;
  height: 125px;
}
.begin-exploring {
  background: linear-gradient( to bottom, #e8f5fc 5%, #cce9f9 95%);
  line-height: 50px;
  font-size: 18px;
  padding: 0 15px;
  width: 80%;
  color: #000;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: 300;
  position: relative;
  margin-top: 8.5%;
  margin-left: 5%;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
}
.begin-exploring::after {
  content: ' ';
  display: block;
  width: 36px;
  height: 36px;
  top: 7px;
  right: -18px;
  position: absolute;
  transform: rotate(45deg) scale(1.0);
  background: linear-gradient( 134deg, #e8f5fc 5%,#cce9f9 95%);
}
</style>