<template>
  <div class="home-page-gutter">
    <div class="home-page-gutter-block">
      <div class="gutter-header">
        <a href="">
          <img src="@/assets/img/common/steamcards.png" alt="" class="home-page-gutter-giftcard">
          <br/>
          礼物卡
        </a>
      </div>
      <div class="gutter-items">
        <a href="" class="gutter-giftcard gutter-item">现已在 Steam 上推出</a>
      </div>
      <div class="gutter-header">推荐</div>
      <div class="gutter-items">
        <a href="" v-for="(item, index) in menuList[0]" :key="index" class="gutter-item">
          <span class="icon" :style="{backgroundPositionX: -index * 16 + 'px'}"></span>
          {{item}}
        </a>
      </div>
      <div class="gutter-header pad">探索队列</div>
      <div class="gutter-items">
        <a href="" v-for="(item, index) in menuList[1]" :key="index" class="gutter-item">
          <span class="icon" :style="{backgroundPositionX: -index * 16 - 48 + 'px'}"></span>
          {{item}}
        </a>
      </div>
      <div class="gutter-header pad">浏览分类</div>
      <div class="gutter-items">
        <a href="" v-for="(item, index) in menuList[2]" :key="index" class="gutter-item">
          <span v-if="item !== ''" class="icon" :style="{backgroundPositionX: -index * 16 - 80 + 'px'}"></span>
          {{item}}
        </a>
      </div>
    </div>
    <div class="home-page-gutter-block">
      <div class="gutter-header pad">按类型浏览</div>
      <a href="" v-for="(item, index) in menuList[3]" :key="index" class="gutter-item">{{item}}</a>
    </div>
    <div class="home-page-gutter-block">
      <div class="gutter-header pad">您的标签</div>
      <a href="" v-for="(item, index) in menuList[4]" :key="index" class="gutter-item">{{item}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePageGutter",
  created() {},
  data() {
    return {
      menuList: [
        ['由好友推荐', '由鉴赏家推荐', '标签'],
        ['推荐', '新品'],
        ['热销产品', '', '新品', '即将推出', '优惠', '虚拟现实', '支持控制器'],
        [
          '免费游玩', '抢鲜体验', '休闲', '体育', '冒险', '动作',
          '大型多人在线', '模拟', '独立', '竞速', '策略', '角色扮演'
        ],
        ['自动化', '太空模拟', '太空', '基地建设', '城市营造']
      ]
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.home-page-gutter {
  top: 465px;
  width: 0px;
  overflow: hidden;
  transition-property: width;
  transition-duration: 0.25s;
  transition-timing-function: ease;
  transition-delay: 0;
  margin-top: 20px;
  position: absolute;
  left: 0;
  z-index: 3;
}
.home-page-gutter-block {
  width: 210px;
  margin-bottom: 20px;
}
.gutter-header, .gutter-item {
  margin: 7px 0;
}
.gutter-header > a, .gutter-header {
  color: #c6d4df;
  font-size: 11px;
  line-height: 16px;
}
.gutter-giftcard {
  color: #66c0f4;
  line-height: 16px;
  display: block;
  margin: 0 0 14px 0;
}
.gutter-item {
  color: #66c0f4;
  font-size: 13px;
  cursor: pointer;
  display: block;
}
.icon {
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: top;
  margin-right: 4px;
  background-image: url('../../../../assets/img/common/store-gutter-icons.png');
}
.home-page-gutter-giftcard {
  max-width: 100%;
}
.pad {
  margin-top: 15px;
}
.gutter-item:hover {
  color: #fff !important;
}
</style>