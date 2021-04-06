<template>
  <div id="notification-popup">
    <pop-up class="popup-menu">
      <template v-slot:content>
        <popup-menu-item class="popup-menu-item" v-for="(item, index) in menuList" :key="index">
          <template v-slot:item>
            <a href="">
              <span class="icons"><img :src="item.icon" alt=""></span>
              <span :class="{active: item.count > 0}">
                <span>{{item.count}}</span>
                {{item.title}}
              </span>
            </a>
            <div class="seperator" v-if="index !== menuList.length-1"></div>
          </template>
        </popup-menu-item>
      </template>
    </pop-up>
  </div>
</template>

<script>
import PopUp from '../../common/popup/PopUp.vue';
import PopupMenuItem from '../../common/popup/PopupMenuItem.vue';
export default {
  components: {PopUp, PopupMenuItem},
  name: "NotificationPopup",
  created() {
    this.getMenuList()
  },
  data() {
    return {
      menuList: [],
      isShow: false
    };
  },
  props: {},
  methods: {
    getMenuList() {
      if (this.$store !== null && this.menuList !== null) {
        this.menuList = this.$store.state.notifications
      }
    },
    showPopupMenu() {
      this.isShow = !this.isShow
      let obj = document.getElementById('notification-popup')
      if (this.isShow) {
        obj.style.opacity = 1
        obj.style.pointerEvents = 'auto'
      } 
      else {
        obj.style.opacity = 0
        obj.style.pointerEvents = 'none'
      }
    }
  },
};
</script>

<style lang="css" scoped>
#notification-popup {
  transition-duration: 300ms;
  pointer-events: none;
  opacity: 0;
  left: 0;
}
.popup-menu {
  border: 1px solid;
  color: #171a21;
  width: 155px;
}
.popup-menu-item {
  display: block;
  font-family: Motiva Sans, Arial, Helvectica, Verdana, sans-serif;
  font-weight: normal;
  line-height: normal;
  text-align: left;
  cursor: pointer;
  line-height: 36px;
}
.popup-menu-item:hover {
  background-color: #3f4655;
}
.popup-menu-item>a {
  padding: 0px 8px;
  text-decoration: none;
  color: #bfbfbf;
}
.icons {
  /* background-repeat: no-repeat;
  background: url(../../../assets/img/common/icons.png);
  background-position: 0 -16px; */
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  position: relative;
  margin-right: 16px;
  top: -5px;
}
.icons img {
  width: 18px;
}
.seperator {
  height: 1px;
  background: #262a31;
}
.active {
  color: #7ea64b;
}
</style>