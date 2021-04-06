<template>
  <div class="popup" id="popup">
    <div class="popup-body">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  created() {},
  data() {
    return {
    };
  },
  props: {
    popupMenuList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
  },
};
</script>

<style lang="css" scoped>
.popup-body {
  position: relative;
}
.popup-body a {
  text-decoration: none;
}
</style>