<template>
  <div class="home-page-content">
    <home-page-gutter class="home-page-gutter"/>
    <div class="store-nav-ctn">
      <div id="store-header">
        <div class="content">
          <div class="wishList">
            <a href="#">愿望单</a>
          </div>
          <div class="store-nav-area">
            <div class="store-nav-bg">
              <store-nav class="store-nav"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomePageGutter from './HomePageGutter.vue';
import StoreNav from './StoreNav.vue';
export default {
  name: "HomepageContent",
  components: {StoreNav, HomePageGutter},
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
@media (min-width: 1224px) {
  .home-page-gutter {
    display: block;
    width: 210px;
  }
}
#store-header {
  width: 100%;
  margin-bottom: 16px;
}
.content {
  height: 66px;
  z-index: 300;
  position: relative;
  width: 100%;
}
.store-nav-area {
  position: absolute;
  left: 0;
  right: 0;
  top: 24px;
  height: 49px;
}
.store-nav-bg {
  background: rgba( 62, 126, 167, 0.8);
  box-shadow: 0 0 3px rgb(0 0 0 / 40%);
  height: 35px;
  margin: 7px 0;
}
.store-nav {
  height: 35px;
}
.wishList {
  top: 8px;
  right: 0;
  position: absolute;
  font-size: 11px;
  box-shadow: 0 0 3px #000;
  height: 20px;
  background: url(../../../../assets/img/common/background-wishlist.jpg);
}
.wishList:hover {
  background: linear-gradient( to bottom, #e3eaef 5%, #c7d5e0 95%);
}
.wishList>a {
  text-decoration: none;
  color: #ffffff;
  padding: 0 25px;
  margin: 0 1px;
  line-height: 20px;
}
.wishList > a:hover {
  color: #000;
}
</style>