<template>
  <div class="home-tab-content">
    <div class="tab-content" id="tab-newreleases-content">
      <div class="tab-see-more">
        查看更多
        <a href="" class="btn-white-transparent btn-small-tall">
          <span>新品</span>
        </a>
      </div>
      <tab-item 
        v-for="(item, index) in tabItemList1" 
        :key="index" 
        :tabItem="item" 
        :currentIndex="currentIndex"
        :itemIndex="index"
        @mouseenter.native="itemActive(index)"/>
    </div>
  </div>
</template>

<script>
import TabItem from './TabItem.vue';
import {tabItemList1} from './tabItemContent.js'
export default {
  name: "HomeTabContent",
  components: {TabItem},
  created() {},
  data() {
    return {
      currentIndex: 0,
      tabItemList1: tabItemList1
    };
  },
  props: {},
  methods: {
    itemActive(index) {
      this.currentIndex = index;
      // console.log(this.currentIndex);
      this.$emit('activeIndex', index)
    }
  },
};
</script>

<style lang="css" scoped>
.tab-see-more {
  text-align: right;
  background: rgba( 0, 0, 0, 0.2 );
  padding: 4px;
}
.btn-small-tall > span {
  padding: 0 15px;
  font-size: 12px;
  line-height: 24px;
}
</style>