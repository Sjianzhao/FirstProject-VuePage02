<template>
<div class="home">
  <el-container>
    <el-header>
      <el-button class="el-button1" @click="buttonFlag = 0">测量计量</el-button>
      <el-button class="el-button1" @click="buttonFlag = 1">控制</el-button>
      <el-button class="el-button1" @click="buttonFlag = 2">运行状态</el-button>
      <el-button class="el-button1" @click="buttonFlag = 3">参数设置</el-button>
      <el-button class="el-button1" @click="buttonFlag = 4">备电设置</el-button>
      <el-button class="el-button1" @click="buttonFlag = 5">信息查寻</el-button>
      <el-button class="el-button1" @click="buttonFlag = 6">回路设置</el-button>
      <el-button class="el-button1" @click="buttonFlag = 7">其他设置</el-button>
      <el-button class="el-button1" @click="buttonFlag = 8">串口配置</el-button>
      <el-button class="el-button1" @click="buttonFlag = 9">写入</el-button>
      <el-button class="el-button1" @click="buttonFlag = 10">读取</el-button>
    </el-header>
    <el-main>
      <div style="height: 100%;width: 100%" v-if="buttonFlag == 0">
        <Measurement></Measurement>
      </div>
      <div style="height: 100%;width: 100%" v-else-if="buttonFlag == 1">
        <Control></Control>
      </div>
      <div style="height: 100%;width: 100%" v-else-if="buttonFlag == 2">
        <Run></Run>
      </div>
      <div style="height: 100%;width: 100%" v-else-if="buttonFlag == 3">
        <Para></Para>
      </div>
      <div style="height: 100%;width: 100%" v-else-if="buttonFlag == 4">
        <Stand></Stand>
      </div>
      <div style="height: 100%;width: 100%" v-else-if="buttonFlag == 5">
        <Inform></Inform>
      </div>
      <div style="height: 100%;width: 100%" v-else-if="buttonFlag == 6">
        <Loop></Loop>
      </div>
      <div style="height: 100%;width: 100%" v-else-if="buttonFlag == 7">
        <Other></Other>
      </div>
      <div style="height: 100%;width: 100%" v-else-if="buttonFlag == 8">
        <Uart></Uart>
      </div>
      <div style="height: 100%;width: 100%" v-else-if="buttonFlag == 9">
        <Write></Write>
      </div>
      <div style="height: 100%;width: 100%" v-else-if="buttonFlag == 10">
        <Read></Read>
      </div>
    </el-main>
  </el-container>
</div>
</template>

<script>
import Measurement from '@/views/measure/Measurement.vue';
import Control from '@/views/measure/Control.vue';
import Inform from '@/views/information/Information.vue';
import Loop from '@/views/information/Loop.vue';
import Run from '@/views/runstate/Runstate.vue';
import Stand from '@/views/runstate/Standby.vue';
import Para from '@/views/runstate/Paramer.vue';
import Other from '@/views/otherset/Otherset.vue';
import Uart from '@/views/otherset/uart.vue';
import Read from '@/views/otherset/Read.vue';
import Write from '@/views/otherset/Write.vue';

// 主页面，设置八个按钮，用于跳转到其他页面
export default {
  name: 'Home',
  data() {
    return {
      buttonFlag: 0,
    };
  },
  mounted() {
  },
  methods: {
  },
  components: {
    Measurement,
    Control,
    Inform,
    Loop,
    Run,
    Stand,
    Para,
    Other,
    Uart,
    Read,
    Write,
  },
};
</script>

<style>
.home {
  height: 100%;
  width: 100%;
  display: flex;
}
.el-header{
  /* background-color: #f0f0f0; */
  color: #ffffff;
  height: 5% !important;
  width: 100%;
}
.el-button1 {
  margin-left: 0px !important;
  margin-top: 3px;
  padding: 8px;
  border-radius:6px;
}
.el-main {
  /* background-color: #f0f0f0; 这里设置颜色会覆盖页面的颜色 */
  color: rgb(0, 0, 0);
  /*text-align: center;*/
  height: 95%;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 0px;
}

</style>
