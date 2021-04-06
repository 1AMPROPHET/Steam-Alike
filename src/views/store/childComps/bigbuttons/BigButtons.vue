<template>
  <div class="big-buttons">
    <div class="buttons-list home-page-content">
      <h2>浏览 Steam</h2>
      <div class="button-container">
        <div class="btn-wrapper" v-for="(item, index) in buttonsList" :key="index">
          <a href="" class="big-button">{{item}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BigButtons",
  created() {},
  data() {
    return {
      buttonsList: ['新品', '优惠', '免费游戏', '按用户标签']
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.buttons-list {
  min-height: 95px;
  margin-top: 40px;
  margin-bottom: 25px;
}
.btn-wrapper {
  margin-right: 8px;
  display: inline-block;
}
.big-button {
  width: 226px;
    height: 58px;
    font-family: "Motiva Sans", Sans-serif;
    font-weight: 300;
    display: inline-block;
    font-size: 18px;
    line-height: 56px;
    color: #66c0f4;
    text-align: center;
    background-position-y: -105px;
    border-radius: 3px;
    box-shadow: 0 0 4px #000;
    background-image: url('../../../../assets/img/common/background-spotlight.jpg');
}
.big-button:hover {
  color: #fff;
  background-position-y: -350px;
}
</style>