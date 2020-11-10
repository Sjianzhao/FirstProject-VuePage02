<template>
  <div style="height: 100%;width: 100%">
    <div style="height:8%;">
        <el-button class="Runbuttonlayout" @click="Runstate = 0" plain>继电器状态</el-button>
        <el-button class="Runbuttonlayout" @click="Runstate = 1" plain>备电状态</el-button>
        <el-button class="Runbuttonlayout" @click="Runstate = 2" plain>其他状态</el-button>
    </div>
    <div style="height: 91%;width: 100%" v-if="Runstate == 0">
      <JKstate></JKstate>
    </div>
    <div style="height: 91%;width: 100%" v-else-if="Runstate == 1">
      <Backcurstate></Backcurstate>
    </div>
    <div style="height: 91%;width: 100%" v-else-if="Runstate == 2">
      <Otherstate></Otherstate>
    </div>
  </div>
</template>

<script>
import JKstate from './JkState.vue';
import Backcurstate from './BackCurrState.vue';
import Otherstate from './OtherState.vue';

export default {
  data() {
    return {
      Runstate: 0,
    };
  },
  methods: {
  },
  components: {
    JKstate,
    Backcurstate,
    Otherstate,
  },
};
</script>

<style>
.Runbuttonlayout {
  border-radius: 2px;
  margin-left: 0px !important;
  border-color: #424242;
}
</style>
