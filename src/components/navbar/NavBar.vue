<template>
  <div id="nav-bar">
    <div class="home-page-content">
      <div class="content">
      <div class="logo">
        <img src="@/assets/img/common/logo_steam.svg" alt="">
      </div>
      <div id="supernav-container" class="supernav-container">
        <div v-for="(item, index) in superNavList" 
          class="title-item"
          :key="index" 
          @click="navItemClick(item)">
          <supernav-item :identification="index" :supernavItem="item.title" :isActive="item.isActive" :submenuContent="item.menuList"/>        
        </div>
      </div>
      <global-actions class="global-actions"/>
    </div>
    </div>
  </div>
</template>

<script>
import GlobalActions from './supernav/GlobalActions.vue';
import SupernavItem from './supernav/SupernavItem.vue';
export default {
  components: {SupernavItem, GlobalActions},
  name: "NavBar",
  created() {},
  data() {
    return {
      superNavList: [
        {
          title: '商店',
          path: '/store',
          menuList: ['精选', '搜索队列', '愿望单', '点数商店', '新闻', '统计数据', '关于']
        },
        {
          title: '社区',
          path: '/community',
          menuList: ['主页', '讨论', '创意工坊', '市场', '实况直播']
        },
        {
          title: '丶PR0PHET',
          path: '/mine',
          menuList: ['动态', '个人资料', '好友', '组', '内容', '徽章', '库存']
        },
        {
          title: '库',
          path: '/library',
          menuList: []
        },
        {
          title: '客服',
          path: '/service',
          menuList: []
        },
      ],
      isShowList: [
        {isShow: false},
        {isShow: false},
        {isShow: false},
      ],
      isSubmenuShow: false
    };
  },
  props: {},
  methods: {
    navItemClick(item) {
      this.$router.replace(item.path).catch(err => err)
    },
  }
};
</script>

<style lang="css" scoped>
#nav-bar {
  padding: 0 16px 0 16px;
  font-size: 14px;
  z-index: 999;
  height: 104px;
  background-color: #171a21;
  color: #c6d4df;
  font-family: "Motiva Sans", Sans-serif;
  /* text-align: center; */
  cursor: default;
}
.home-page-content {
  transition: padding 0.25s;
  position: relative;
  width: 940px;
  padding-right: 16px;
  margin: 0 auto;
}
.content {
  position: relative;
  width: 940px;
  height: 104px;
  transition: padding 0.25s;
  margin: 0 auto;
}
.supernav-container {
  position: absolute;
  left: 200px;
  display: flex;
  cursor: pointer;
  padding: 0;
  margin: 0;
}
.logo:hover {
  cursor: pointer;
}
.logo img {
  float: left;
  height: 44px;
  padding-top: 30px;
  margin-right: 40px;
}
.global-actions {
  position: absolute;
  right: 0;
  top: 6px;
  height: 21px;
  line-height: 21px;
  color: #b8b6b4;
  font-size: 11px;
  z-index: 401;
  display: block;
  margin: 0;
  padding: 0;
}
.active {
  color: #ffffff;
}
/* @media screen and (min-width: 1224px) {
  .content {
    right: 0px !important;
    position: relative;
  }
} */
</style>