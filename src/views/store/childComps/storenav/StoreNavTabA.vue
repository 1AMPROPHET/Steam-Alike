<template>
  <a href="" class="tab flyout-tab" id="foryou-tab">
    <span class="a-text">{{aText}}</span>
  </a>
</template>

<script>
export default {
  name: "StoreNavTabA",
  created() {},
  data() {
    return {};
  },
  props: {
    aText: {
      type: String,
      default() {
        return ''
      }
    }
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.tab {
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
.tab > span {
  color: #d9dadd;
  font-size: 13px;
  line-height: 34px;
  text-shadow: -1px -1px 0px rgb(0 0 0 / 25%);
  font-family: "Motiva Sans", Sans-serif;
  font-weight: 300;
  padding: 0 15px;
  display: block;
}
.a-text:hover {
  color: #000;
  text-shadow: 1px 1px 0px rgb(255 255 255 / 25%);
  /* font-weight: normal; */
}
</style>