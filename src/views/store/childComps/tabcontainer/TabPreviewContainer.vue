<template>
  <div id="tab-preview-container">
    <div class="tab-preview" 
      :class="{focus: index === activeItemIndex}" 
      v-for="(item, index) in tabItemList1" 
      :key="index">
      <h2>{{item.name}}</h2>
      <div class="tab-review-summary">
        <div class="title">总体用户评测</div>
        <span class="game-review-summary" 
          :class="{positive: item.type === 'positive', mixed: item.type === 'mixed'}">
          {{item.summary}}
        </span>
      </div>
      <div class="tags">
        <a href="" v-for="(tag, index) in item.tags" :key="index">{{tag}}</a>
      </div>
      <div class="screen-shot" 
        v-for="(screenshot, indey) in item.screenShots" 
        :key="indey" 
        :style="'background-image: url(' + screenshot.img + ')'">
      </div>
    </div>
  </div>
</template>

<script>
import {tabItemList1} from './tabItemContent.js';
export default {
  name: "TabPreviewContainer",
  created() {},
  data() {
    return {
      tabItemList1,
    };
  },
  props: {
    activeItemIndex: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  methods: {},
};
</script>

<style lang="css" scoped>
#tab-preview-container {
  position: relative;
  margin-top: 39px;
  background: linear-gradient( to right, #95bbd4 5%,#859bac 95%);
  height: 735px;
}
.tab-preview {
  position: absolute;
  top: 9px;
  left: 16px;
  opacity: 0;
  transition: opacity 300ms;
  pointer-events: none;
  width: 292px;
}
.tab-preview > h2 {
  text-transform: none;
  font-size: 21px;
  letter-spacing: 0px;
  color: #263645;
  height: 30px;
  padding-right: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 7px;
  margin-top: 0px;
}
.focus {
  opacity: 1.0;
  pointer-events: auto;
}
.tab-review-summary {
  padding: 5px 7px;
  margin-bottom: 10px;
  background-color: rgba( 38, 54, 69, 0.6);
  width: 258px;
  border-radius: 2px;
}
.game-review-summary {
  color: #A34C25;
}
.game-review-summary.positive {
  color: #66C0F4;
}
.game-review-summary.mixed {
  color: #B9A074;
}
.tags {
  margin-top: 5px;
  height: 22px;
  overflow: hidden;
}
.tags > a {
  margin-right: 5px;
  background-color: rgba( 38, 54, 69, 0.6);
  display: inline-block;
  line-height: 19px;
  padding: 0 7px;
  box-shadow: none;
  margin-right: 2px;
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 3px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 11px;
}
.screen-shot {
  width: 258px;
  height: 134px;
  margin-top: 3px;
  background-size: cover;
  background-position: center center;
  padding: 8px;
}
</style>