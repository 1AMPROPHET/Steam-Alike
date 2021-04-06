<template>
  <div class="tab flyout-tab" id="foryou-tab" @mouseenter="changeColor(true, index)" @mouseleave="changeColor(false, index)">
    <span class="pulldown">
      <a href="" class="pulldown-desktop" :id="getId(index)">{{tabText}}</a>
      <span></span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "StoreNavTab",
  components: {},
  created() {
  },
  data() {
    return {
    };
  },
  props: {
    tabText: {
      type: String,
      default() {
        return ''
      }
    },
    index: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  methods: {
    changeColor(flag, index) {
      let obj = document.getElementById(this.getId(index))
      // console.log(index);
      // console.log(obj);
      // console.log(this.getId(index));
      if (flag) {
        // console.log(index);
        obj.style.color = '#000'
        obj.style.textShadow = '1px 1px 0px rgb(255 255 255 / 25%)'
      } else {
        obj.style.color = '#d9dadd'
        obj.style.textShadow = '-1px -1px 0px rgb(0 0 0 / 25%)'
      }
    },
    getId(index) {
      return index + 1000
    }
  },
};
</script>

<style lang="css" scoped>
.tab {
  color: #d9dadd;
  border-right: 1px solid rgba( 16, 21, 25, 0.3);
  padding: 1px;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  /* float: left; */ 
}
.tab:hover {
  background: linear-gradient( to bottom, #e3eaef 5%, #c7d5e0 95%);
}
.pulldown {
  color: inherit;
  padding-right: 7px;
  margin-right: 3px;
  line-height: 34px;
  height: 34px;
  cursor: pointer;
}
.pulldown > span {
  background: url('../../../../assets/img/common/pulldownwhite.png');
  width: 19px;
  height: 16px;
  padding: 0;
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  vertical-align: text-bottom;
}
.tab > span {
  color: inherit;
  font-size: 13px;
  line-height: 34px;
  text-shadow: -1px -1px 0px rgb(0 0 0 / 25%);
  font-family: "Motiva Sans", Sans-serif;
  font-weight: 300;
  padding-left: 15px;
}
.pulldown-desktop {
  display: inline;
  color: inherit;
  text-decoration: none;
}
</style>