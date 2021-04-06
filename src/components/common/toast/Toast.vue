<template>
  <div class="toast" v-if="isShow === true">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  created() {},
  data() {
    return {
      message: '',
      isShow: false
    };
  },
  props: {},
  methods: {
    show(message, duration) {
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration)
    }
  },
};
</script>

<style lang="css" scoped>
.toast {
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  color: aliceblue;
  padding: 8px 10px;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>