<template>
  <div class="store-nav-popup">
    <pop-up class="pop-up">
      <template v-slot:content>
        <popup-menu-item v-for="(item, index) in menuList" :key="index">
          <template v-slot:item>
            <div class="sub-title">{{item.subtitle}}</div>
            <a :id="index" href="" class="popup-menu-item">{{item.content}}</a>
            <div class="seperator" v-if="index === showSeperatorNumber(index)"></div>
          </template>
        </popup-menu-item>
      </template>
    </pop-up>
  </div>
</template>

<script>
import PopUp from '../../../../components/common/popup/PopUp.vue';
import PopupMenuItem from '../../../../components/common/popup/PopupMenuItem.vue';
export default {
  name: "StoreNavPopup",
  components: {PopUp, PopupMenuItem},
  created() {},
  data() {
    return {};
  },
  props: {
    menuList: {
      type: Array,
      default() {
        return []
      }
    },
    seperatorNumber: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    showSeperatorNumber(number) {
      if (this.seperatorNumber !== []) {
        if(this.seperatorNumber.indexOf(number) !== -1) {
          return number
        }
      }
    },
    // showSubTitle(number) {
    //   if (this.subTitle !== '' && this.subTitleNumber !== []) {
    //     if(this.subTitleNumber.indexOf(number) !== -1) {
    //       return number
    //     }
    //   }
    // }
  },
  computed: {
    
  },
};
</script>

<style lang="css" scoped>
.store-nav-popup {
  visibility: visible;
  top: 42px;
  left: 0px;
  display: inline-block;
  z-index: 200;
  position: absolute;
}
.pop-up {
  width: 142px;
  display: block;
  padding: 14px 5px 14px 5px;
  background: linear-gradient( to bottom, #e3eaef 5%, #c7d5e0 95%);
}
.popup-menu-item {
  color: #000;
  cursor: pointer;
  padding: 7px 12px;
  display: block;
  text-align: left;
  text-decoration: none;
  line-height: normal;
  font-weight: normal;
  white-space: nowrap;
  margin-top: 1px;
}
.popup-menu-item:hover {
  color: #fff;
  background-color: #212d3d;
}
.seperator {
  height: 1px;
  line-height: 1px;
  background-color: #ffffff;
  margin: 5px 10px 5px 10px;
}
.sub-title {
  color: #4f94bc;
  margin: -5px 0 -2px 12px;
  font-weight: normal;
}
</style>