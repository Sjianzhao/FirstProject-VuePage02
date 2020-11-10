<template>
  <div style="height: 100%;width: 100%">
    <div style="height: 8%;">
      <el-button class="meabuttonlayout" plain @click="Firstpage = 0">实时数据</el-button>
      <el-button class="meabuttonlayout" plain @click="Firstpage = 1">历史数据</el-button>
    </div>
    <div style="height: 91%;width: 100%" v-if="Firstpage == 0">
      <Measurrent></Measurrent>
    </div>
    <div style="height: 91%;width: 100%" v-else-if="Firstpage == 1">
      <Meahist></Meahist>
    </div>
  </div>
</template>

<script>
import Measurrent from './MeaCurrent.vue';
import Meahist from './MeaHistory.vue';

export default {
  name: 'Measurement',
  data() {
    return {
      // 显示切换
      Firstpage: 0,
    };
  },
  components: {
    Measurrent,
    Meahist,
  },
};
</script>

<style>
.meabuttonlayout {
  border-radius: 2px;
  margin-left: 0px !important;
  border-color: #424242;
}
</style>
