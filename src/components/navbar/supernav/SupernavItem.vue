<template>
  <div class="supernav-item"
    @mouseenter="submenuShow(true)" 
    @mouseleave="submenuShow(false)">
    <span :class="{active: isActive}">{{supernavItem}}</span>
    <div :id="idGenerator(identification)" class="supernav-content">
      <div class="submenu">
        <div class="submenu-item" v-for="(item, index) in submenuContent" :key="index">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "SuperNavItemr",
  created() {},
  mounted() {
    // this.showSubmenu()
  },
  data() {
    return {
      isActive: false
    };
  },
  props: {
    supernavItem: {
      type: String,
      default() {
        return ''
      }
    },
    submenuContent: {
      type: Array,
      default() {
        return []
      }
    },
    identification: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  methods: {
    // showSubmenu() {
    //   let title = document.getElementById('supernav-item')
    //   let submenu = document.getElementById('supernav-content')
    //   if (title !== null) {
    //     title.onmouseenter = function() {
    //       this.isActive = true
    //       submenu.style.opacity = 1
          // submenu.style.pointerEvents = 'auto'
    //     }
    //     title.onmouseleave = function() {
    //       this.isActive = false
    //       submenu.style.opacity = 0
    //       submenu.style.pointerEvents = 'none'
    //     }
    //   }
    // }
    submenuShow(flag) {
      if (flag) {
        this.isActive = true
        if (this.submenuContent.length !== 0) {
          let obj = document.getElementById(this.identification)
          obj.style.opacity = 1
          obj.style.pointerEvents = 'auto'
        }
      } else {
        this.isActive = false
        let obj = document.getElementById(this.identification)
        obj.style.opacity = 0
        obj.style.pointerEvents = 'none'
      }
    },
    idGenerator(index) {
      return index
    }
  },
};
</script>

<style lang="css" scoped>
.supernav-item {
  padding: 45px 7px 7px 7px;
  display: block;
  position: relative;
  color: #b8b6b4;
  font-family: "Motiva Sans", Sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: normal;
  line-height: 16px;
}
.supernav-content {
  left: -10px;
  width: 70px;
  box-shadow: 3px 3px 5px -3px #000;
  position: absolute;
  z-index: 1500;
  background: #171a21;
  padding: 5px 15px 10px 15px;
  max-width: 132px;
  text-align: left;
  opacity: 0;
  transition-duration: 300ms;
  pointer-events: none;
  /* display: none; */
}
.supernav-content:hover {
  opacity: 1;
}
.submenu-item {
  display: flex;
  color: #b8b6b4;
  padding-right: 10px;
  transform: scale(0.80);
  font-family: "Motiva Sans", Sans-serif;
  padding: 6px 0;
}
.submenu-item:hover {
  color: #ffffff;
}
.active {
  color: #ffffff;
}
</style>