<template>
  <div class="tab-container">
    <div class="home-page-content">
      <div class="home-left-col home-tabs-col">
        <div class="home-tabs-row-ctn">
          <div class="store-horizontal-minislider-ctn">
            <div class="home-tabs-row store-horizontal-minislider">
              <div class="home-tab" 
                v-for="(item, index) in tabsContent" 
                :key="index" 
                :class="{active: index === currentIndex}"
                @click="tabClick(index)">
                <div class="tab-content">{{item}}</div>
              </div>
            </div>
          </div>
        </div>
        <home-tab-content @activeIndex="activeIndex"/>
      </div>
      <div class="home-right-col">
        <tab-preview-container :activeItemIndex="activeItemIndex"/>
      </div>
    </div>
  </div>
</template>

<script>
import HomeTabContent from './HomeTabContent.vue';
import TabPreviewContainer from './TabPreviewContainer.vue';
export default {
  name: "TabContainer",
  components: {HomeTabContent, TabPreviewContainer},
  created() {},
  data() {
    return {
      tabsContent: [
        '新品与热门产品', '热销产品', '热门即将推出', '优惠'
      ],
      currentIndex: 0,
      activeItemIndex: 0
    };
  },
  props: {},
  methods: {
    tabClick(index) {
      this.currentIndex = index
    },
    activeIndex(index) {
      this.activeItemIndex = index
    }
  },
};
</script>

<style lang="css" scoped>
.tab-container {
  background: linear-gradient( to bottom, rgba(42,71,94,1.0) 5%, rgba(42,71,94,0.0) 70%);
  padding-top: 1px;
  margin-top: 60px;
  overflow: visible;
  height: 200px;
}
.tab-container > div {
  margin-top: -31px;
}
.home-tabs-col {
  position: relative;
}
.home-left-col {
  width: 618px;
  float: left;
}
.home-right-col {
  width: 308px;
  float: right; 
}
.home-tabs-row-ctn {
  margin-bottom: 8px;
}
.store-horizontal-minislider-ctn {
  height: 30px;
  position: relative;
  overflow: hidden;
}
.home-tabs-row {
  position: relative;
  overflow-x: auto;
  white-space: nowrap;
}
.home-tab {
  border: none;
  background: transparent;
  box-shadow: none;
  display: inline-block;
  margin-right: 0px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-size: 13px;
  color: #2f89bc;
  line-height: 24px;
  cursor: pointer;
  vertical-align: top;
  margin-top: 3px;
}
.tab-content:hover {
  color: #fff !important;
}
.tab-content {
  box-shadow: none;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-size: 13px;
  color: #4f94bc;
  line-height: 24px;
  padding: 0 10px;
  cursor: pointer;
  vertical-align: top;
}
.home-tab.active {
  background: transparent;
  margin-top: 0;
  box-shadow: none;
  padding: 1px;
}
.home-tab.active .tab-content {
  border: none;
  background-color: #2a475e !important;
  line-height: 29px;
  font-size: 14px;
  color: #ffffff;
  background: #1a2737;
  text-shadow: -1px -1px rgb(0 0 0 / 25%);
  cursor: default;
  margin-top: 0;
  box-shadow: none;
}
</style>