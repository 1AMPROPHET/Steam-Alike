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
        v-for="(item, index) in tabItemList" 
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
export default {
  name: "HomeTabContent",
  components: {TabItem},
  created() {},
  data() {
    return {
      currentIndex: 0,
      tabItemList: [
        {
          img: require('../../../../assets/img/newreleases/capsule1.jpg'),
          finalPrice: 53,
          name: 'Element TD 2 - Multiplayer Tower Defense',
        },
        {
          img: require('../../../../assets/img/newreleases/capsule2.jpg'),
          finalPrice: '免费',
          name: 'Enderal: Forgotten Stories (Special Edition)'
        },
        {
          img: require('../../../../assets/img/newreleases/capsule3.jpg'),
          finalPrice: 70,
          name: 'Totally Accurate Battle Simulator'
        },
        {
          img: require('../../../../assets/img/newreleases/capsule4.jpg'),
          finalPrice: 299,
          name: 'OUTRIDERS'
        },
        {
          img: require('../../../../assets/img/newreleases/capsule5.jpg'),
          finalPrice: '免费',
          name: 'OpenTTD'
        },
        {
          img: require('../../../../assets/img/newreleases/capsule6.jpg'),
          finalPrice: 198,
          name: '双人成行'
        },
        {
          img: require('../../../../assets/img/newreleases/capsule7.jpg'),
          finalPrice: 67,
          name: 'Summer~Life in the Countryside~'
        },
        {
          img: require('../../../../assets/img/newreleases/capsule8.jpg'),
          finalPrice: 49,
          name: 'Succubus Farm'
        },
        {
          img: require('../../../../assets/img/newreleases/capsule9.jpg'),
          finalPrice: 70,
          name: '末日准备狂'
        },
        {
          img: require('../../../../assets/img/newreleases/capsule10.jpg'),
          finalPrice: 99,
          name: 'Endzone - A World Apart'
        }
      ]
    };
  },
  props: {},
  methods: {
    itemActive(index) {
      this.currentIndex = index;
      // console.log(this.currentIndex);
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