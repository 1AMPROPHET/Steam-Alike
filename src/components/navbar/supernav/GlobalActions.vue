<template>
  <div id="global-actions">
    <div class="actions-menu">
      <div class="install-btn">
        <img src="@/assets/img/common/download.png" alt="">
        安装 Steam
      </div>
      <div class="notification-area" @click="notificationPopupShow">
        <div class="notification-btn">
          <span>{{this.$store.state.notifications[1].count}}</span>
          <span class="envelope"><img src="@/assets/img/common/notifications.png" alt=""></span>
        </div>
      </div>
      <notification-popup class="popup notificationPopup" ref="notificationPopup"/>
      <span class="acount" @click="popupShow">{{this.$store.state.username}}</span>
      <acount-popup class="popup acountPopup" ref="acountPopup" :acountMenu="acountMenu"/>
    </div>
    <a href="" class="user">
      <img src="@/assets/img/common/user.jpg" alt="">
    </a>
  </div>
</template>

<script>
import AcountPopup from './AcountPopup.vue';
import NotificationPopup from './NotificationPopup.vue';
export default {
  components: {AcountPopup, NotificationPopup},
  name: "GlobalActions",
  created() {},
  data() {
    return {
      acountMenu: [
        {
          item: '查看个人资料',
          content: ''
        }, 
        {
          item: '帐户明细',
          content: ''
        }, 
        {
          item: '注销: ',
          content: this.$store.state.acount
        },
        {
          item: '偏好',
          content: ''
        }, 
        {
          item: '语言设置',
          content: ''
        } 
      ]
    };
  },
  props: {},
  methods: {
    popupShow() {
      this.$refs.acountPopup.showPopupMenu()
    },
    notificationPopupShow() {
      this.$refs.notificationPopup.showPopupMenu()
    }
  },
};
</script>

<style lang="css" scoped>
.actions-menu {
  line-height: 24px;
  vertical-align: top;
  display: inline-block;
}
.install-btn {
  display: inline-block;
  position: relative;
  /* height: 24px; */
  width: 107px;
  line-height: 21px;
  margin-right: 3px;
  color: #e5e4dc;
  font-size: 11px;
  background-color: #616a72;
  vertical-align: top;
  text-align: center;
}
.install-btn img {
  width: 14px;
  margin: 5px 5px 0 0;
}
.install-btn:hover {
  color: #ffffff;
  cursor: pointer;
}
.notification-area {
  display: inline-block;
  color: #ffffff;
  margin: 0 3px 0 8px;
  cursor: pointer;
}
.notification-btn {
  background-color: #5c7e10;
  padding: 0 10px;
  font-weight: bold;
  vertical-align: top;
}
.notification-btn:hover {
  background-color: #9ac43f;
}
.envelope {
  margin-left: 4px;
}
.envelope img {
  width: 11px;
  aspect-ratio: auto 11 / 8;
  height: 8px;
}
.acount {
  display: inline-block;
  padding-left: 4px;
  line-height: 25px;
  margin-right: 5px;
  padding-right: 18px;
  vertical-align: top;
  background-image: url(../../../assets/img/common/pulldown.png);
  background-position: right center;
  background-repeat: no-repeat;
  cursor: pointer;
  font-family: "Motiva Sans", Sans-serif;
}
.acount:hover {
  color: #ffffff;
}
.popup {
  display: block;
  top: 24px;
  left: 104px;
}
.user {
  width: 34px;
  height: 34px;
  line-height: 34px;
  position: relative;
  padding: 1px;
}
.user img {
  width: 32px;
  height: 32px;
  border: 2px solid #616a72;
}
</style>