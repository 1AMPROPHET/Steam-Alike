<template>
  <div class="recommender">
    <div class="home-page-content">
      <div class="recommend-by-steam flex-container">
        <div class="recommend-by-steam lower-block">
          <div class="recommend-by-steam lower-left-block">
            <h1>
              像您一样的玩家喜欢
              <span class="header-inline-reason">
                基于您玩过的游戏
              </span>
            </h1>
          </div>
          <div class="recommend-by-steam lower-right-block">
            <div class="flex-container">
              <a href="" class="btn-white-transparent btn-small btn-uppercase">
                <span>探索与自定义</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <recommend-carousel/>
    </div>
  </div>
</template>

<script>
import RecommendCarousel from './RecommendCarousel.vue';
export default {
  name: "Recommender",
  components: {RecommendCarousel},
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.recommender {
  margin-bottom: 8px;
  position: relative;
}
.flex-container {
  display: flex;
  flex-direction: column;
}
.lower-block {
  display: flex;
  flex-direction: row;
}
.lower-left-block {
  padding-top: 20px;
  flex-grow: 1;
}
.lower-left-block h1 {
  color: #fff;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: normal;
  padding-top: 2px;
  padding-bottom: 10px;
}
.header-inline-reason {
  color: #9099a1;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: normal;
  padding-top: 2px;
  padding-bottom: 10px;
  padding-right: 8px;
  float: right;
}
.lower-right-block {
  padding-top: 19px;
  width: auto;
  justify-content: center;
}
.flex-container a {
  margin-top: 4px;
  float: right;
  z-index: 10;
  color: #fff;
}
</style>