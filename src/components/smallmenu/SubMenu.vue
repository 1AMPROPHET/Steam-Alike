<template>
  <div id="sub-menu">
    <div v-for="(item, index) in menuList" :key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: "SubMenu",
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
    }
  },
  methods: {},
};
</script>

<style lang="css" scoped>
#sub-menu {
  display: inline-block;
  padding: 5px;
  width: 110%;
  background-color: rgb(42, 43, 46);
  color: #c8c3c3;
  font-size: 12px;
  text-align: left;
  border: 1px solid rgb(3, 3, 20);
  /* -webkit-transform-origin-x: 0; */
  /* -webkit-transform-origin-x: scale(0.40); */
  transform: scale(0.70);
}
</style>