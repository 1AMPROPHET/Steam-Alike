<template>
  <div class="glare-menu-popup">
    <pop-up class="pop-up">
      <template v-slot:content>
        <div class="popup-menu-1">
          <popup-menu-item v-for="(item, index) in firstRow" :key="index">
            <template v-slot:item>
              <div class="sub-title-1">{{item.subtitle}}</div>
              <a :id="index" href="" class="popup-menu-item">{{item.content}}</a>
              <div class="seperator-1" v-if="index === showSeperatorNumber1(index)"></div>
            </template>
          </popup-menu-item>
        </div>
        <div class="popup-menu-2">
          <popup-menu-item v-for="(item, index) in secondRow" :key="index">
            <template v-slot:item>
              <div class="sub-title-1">{{item.subtitle}}</div>
              <a :id="index" href="" class="popup-menu-item">{{item.content}}</a>
              <div class="seperator-1" v-if="index === showSeperatorNumber2(index)"></div>
            </template>
          </popup-menu-item>
        </div>
        <div class="popup-menu-3">
          <popup-menu-item v-for="(item, index) in thirdRow" :key="index">
            <template v-slot:item>
              <div class="sub-title-1">{{item.subtitle}}</div>
              <a :id="index" href="" class="popup-menu-item">{{item.content}}</a>
              <div class="seperator-1" v-if="index === showSeperatorNumber3(index)"></div>
            </template>
          </popup-menu-item>
        </div>
      </template>
    </pop-up>
  </div>
</template>

<script>
import PopUp from '../../../../components/common/popup/PopUp.vue';
import PopupMenuItem from '../../../../components/common/popup/PopupMenuItem.vue';
export default {
  name: "GlareMenuPopup",
  components: {PopUp, PopupMenuItem},
  created() {},
  data() {
    return {};
  },
  props: {
    firstRow: {
      type: Array,
      default() {
        return []
      }
    },
    secondRow: {
      type: Array,
      default() {
        return []
      }
    },
    thirdRow: {
      type: Array,
      default() {
        return []
      }
    },
    seperatorNumber1: {
      type: Array,
      default() {
        return []
      }
    },
    seperatorNumber2: {
      type: Array,
      default() {
        return []
      }
    },
    seperatorNumber3: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    showSeperatorNumber1(number) {
      if (this.seperatorNumber1 !== []) {
        if(this.seperatorNumber1.indexOf(number) !== -1) {
          return number
        }
      }
    },
    showSeperatorNumber2(number) {
      if (this.seperatorNumber2 !== []) {
        if(this.seperatorNumber2.indexOf(number) !== -1) {
          return number
        }
      }
    },
    showSeperatorNumber3(number) {
      if (this.seperatorNumber3 !== []) {
        if(this.seperatorNumber3.indexOf(number) !== -1) {
          return number
        }
      }
    }
  },
};
</script>

<style lang="css" scoped>
.glare-menu-popup {
  visibility: visible;
  top: 42px;
  left: 100px;
  z-index: 200;
  position: absolute;
}
.pop-up {
  text-shadow: none;
  width: 380px;
  display: flex;
  flex-direction: row;
  padding: 14px 5px 14px 5px;
  background: linear-gradient( to bottom, #e3eaef 5%, #c7d5e0 95%);
}
.popup-menu-1 {
  top: 0;
  width: 130px;
  float: left;
}
/* .popup-menu-2 {
  float: left;
  margin-left: 5px;
  border-left: 1px solid #ffffff;
  padding-left: 5px;
} */
.popup-menu-2 {
  height: 100%;
  width: 110px;
  top: 0;
  float: left;
  margin-left: 5px;
  border-left: 1px solid #ffffff;
  padding-left: 5px;
}
.popup-menu-3 {
  height: 100%;
  width: 110px;
  top: 0;
  float: left;
  margin-left: 5px;
  border-left: 1px solid #ffffff;
  padding-left: 5px;
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
.seperator-1 {
  height: 1px;
  line-height: 1px;
  background-color: #ffffff;
  margin: 5px 10px 5px 10px;
}
.sub-title-1 {
  color: #4f94bc;
  margin: -5px 0 -2px 12px;
  font-weight: normal;
}
</style>