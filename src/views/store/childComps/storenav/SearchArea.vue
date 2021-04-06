<template>
  <div class="search-area">
    <div class="store-search">
      <form action="" id="searchForm">
        <div class="search-box">
          <input id="store-nav-search-term" 
            class="default" 
            type="text" 
            name="term" 
            placeholder="搜索商店" 
            onfocus="this.placeholder=''"
            onblur="this.placeholder='搜索商店'"
            size="22" 
            autocomplete="off">
          <a href="">
            <img src="../../../../assets/img/common/search-icon-btn.png" alt="">
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchArea",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.search-area {
  float: right;
  padding: 3px 4px 2px;
  height: 30px;
}
.search-box {
  background-image: none;
  background-color: #316282;
  border-radius: 3px;
  border: 1px solid rgba( 0, 0, 0, 0.3);
  box-shadow: 1px 1px 0px rgb(255 255 255 / 20%);
  color: #fff;
  margin-bottom: 0px;
  outline: none;
  height: 27px;
  padding: 0px 6px;
  width: 216px;
  cursor: text;
  position: relative;
}
.search-box:hover {
  border: 1px solid rgb(128, 187, 241);
}
.default {
  color: #0e1c25;
  font-size: 14px;
  margin-top: 1px;
  text-shadow: 1px 1px 0px rgb(255 255 255 / 10%);
  font-family: "Motiva Sans", Sans-serif;
  font-weight: 300;
  border: none;
  background-color: transparent;
  margin-left: 8px;
  width: 180px;
  outline: none;
  line-height: 26px;
  font-style: italic;
}
.default:focus {
  color: #eee;
}
input::-webkit-input-placeholder {
  color: #000;
}
a {
  position: absolute;
  right: 2px;
  top: 0;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
}
a > img {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 1px;
  right: -1px;
  border-radius: 3px;
}
a > img:hover {
  background-color: rgb(128, 187, 241);
}
</style>