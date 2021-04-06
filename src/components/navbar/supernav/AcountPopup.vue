<template>
  <div id="acount-popup">
    <pop-up class="popup-menu">
      <template v-slot:content>
        <popup-menu-item class="popup-menu-item" v-for="(item, index) in acountMenu" :key="index">
          <template v-slot:item>
            <a class="menu-item" href="">
              <span class="text">{{item.item}}</span>
              <span class="menu-content">{{item.content}}</span>
            </a>
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
  name: "AcountPopup",
  created() {},
  data() {
    return {
      isShow: false
    };
  },
  props: {
    acountMenu: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    showPopupMenu() {
      this.isShow = !this.isShow
      let obj = document.getElementById('acount-popup')
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
#acount-popup {
  transition-duration: 300ms;
  pointer-events: none;
  opacity: 0;
}
.popup-menu-item {
  display: block;
  padding: 6px 12px;
  font-family: Motiva Sans, Arial, Helvectica, Verdana, sans-serif;
  font-weight: normal;
  line-height: normal;
  text-align: left;
  cursor: pointer;
}
.popup-menu {
  width: 140px
}
.menu-item {
  color: #b8b6b4;
  text-decoration: none;
  font-size: 12px;
  text-align: left;
}
.text:hover {
  color: #ffffff;
}
.menu-content {
  color: #57cbde;
}
</style>