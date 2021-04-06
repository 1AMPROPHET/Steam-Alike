<template>
  <div class="store-nav">
    <store-nav-tab
      :tabText="tabList[0]" 
      :index="0"
      @mouseenter.native="showMenu(0, true)"
      @mouseleave.native="showMenu(0, false)">
      <store-nav-popup 
        ref="foryouPopup" 
        id="foryouPopup" 
        :menuList="foryouMenuList" 
        :seperatorNumber="[1, 8, 13]"/>
    </store-nav-tab>
    <store-nav-tab
      :tabText="tabList[1]" 
      :index="1"
      @mouseenter.native="showMenu(1, true)"
      @mouseleave.native="showMenu(1, false)">
      <glare-menu-popup
        id="glarePopup" 
        :firstRow="glareMenuListFirst" 
        :secondRow="glareMenuListSecond"
        :thirdRow="glareMenuListThird"
        :seperatorNumber1="[5, 7, 9]" 
        :seperatorNumber2="[9]"/>
    </store-nav-tab>
    <store-nav-tab-a v-for="(item, index, key) in tabAList" :key="key" :aText="item" class="tab-a"/>
    <search-area/>
  </div>
</template>

<script>
import GlareMenuPopup from './GlareMenuPopup.vue';
import SearchArea from './SearchArea.vue';
import StoreNavPopup from './StoreNavPopup.vue';
import StoreNavTab from './StoreNavTab.vue';
import StoreNavTabA from './StoreNavTabA.vue';
export default {
  name: "StoreNav",
  components: {StoreNavTab, StoreNavTabA, StoreNavPopup, SearchArea, GlareMenuPopup},
  created() {},
  data() {
    return {
      tabList: ['您的商店', '浏览'],
      tabAList: ['点数商店', '新闻', 'Steam 实验室'],
      foryouMenuList: [
        {content: '主页'}, {content: '偏好'}, {content: '社区推荐'}, {content: '交互式推荐模式'}, {content: '探索队列'}, 
        {content: '好友中热门'}, {content: 'Steam 鉴赏家'}, {content: '最近更新'}, {content: '关注的游戏和软件'},
        {content: '自动化', subtitle: '因为您喜爱'}, {content: '城市建造'}, {content: '资源管理'}, {content: '汽车模拟'}, 
        {content: '竞速'}, {content: '为您推荐更多标签'}
      ],
      glareMenuListFirst: [{content: '免费游玩'}, {content: '抢先体验'}, {content: '试玩'}, {content: '支持控制器'}, 
        {content: '网吧游戏'}, {content: '远程畅玩'}, 
        {content: 'VR 游戏与体验', subtitle: '虚拟现实'}, {content: 'VR硬件'},
        {content: 'Mac OS X', subtitle: '平台'}, {content: 'SteamOS + linux'},
        {content: '原声音轨', subtitle: '额外内容'}],
      glareMenuListSecond: [{content: '休闲', subtitle: '游戏类型'}, {content: '体育'}, {content: '冒险'}, 
        {content: '动作'}, {content: '大型多人在线'}, {content: '模拟'}, {content: '独立'}, {content: '竞速'}, {content: '策略'}, 
        {content: '角色扮演'}, {content: '更多热门标签...'}],
      glareMenuListThird: [{content: '动画制作和建模', subtitle: '软件'}, {content: '实用工具'}, {content: '教育'}, 
        {content: '游戏开发'}, {content: '照片编辑'}, {content: '网络出版'}, 
        {content: '视频制作'}, {content: '设计与插画'}, {content: '音频制作'},]
    }
  },
  props: {},
  methods: {
    showMenu(index, flag) {
      // console.log(1);
      let obj = document.getElementById('foryouPopup')
      let obj1 = document.getElementById('glarePopup')
      if (index === 0 && obj !== null) {
        // console.log(2);
        if (flag) {
          obj.style.opacity = 1
          obj.style.pointerEvents = 'auto'
        }
        else {
          obj.style.opacity = 0
          obj.style.pointerEvents = 'none'
        }
      }
      else if (index === 1 && obj1 !== null) {
        if (flag) {
          obj1.style.opacity = 1
          obj1.style.pointerEvents = 'auto'
        }
        else {
          obj1.style.opacity = 0
          obj1.style.pointerEvents = 'none'
        }
      }
    }
  },
};
</script>

<style lang="css" scoped>
#foryouPopup {
  opacity: 0;
  transition-duration: 300ms;
  pointer-events: none;
  text-shadow: none;
  cursor: default;
}
#glarePopup {
  opacity: 0;
  transition-duration: 300ms;
  pointer-events: none;
  text-shadow: none;
  cursor: default;
}
</style>