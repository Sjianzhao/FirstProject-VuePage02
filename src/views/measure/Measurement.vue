<template>
  <div style="height: 100%;width: 100%">
    <div class="meaButton">
      <el-button class="meabuttonlayout" plain>实时数据</el-button>
      <el-button class="meabuttonlayout" plain>历史数据</el-button>
    </div>
    <div class="meaElecData">
      <el-col :span="8" style="height: 100%">
        <div class="meaBiaoti">
          <p style="height:100%; margin: 1px;background-color: rgba(125,125,125,0.6);
          text-align:center; border:1px solid #000">
            总用电量数据
          </p>
        </div>
        <div class="meaBiaoge">
          <div style="height:15%;"></div>
          <div style="height:12.5%;">
            <p style="width:30%;text-align:center;margin:0px">电压</p>
          </div>
          <div style="height:12.5%;">
            <p style="width:30%;text-align:center;margin:0px">电流</p>
          </div>
          <div style="height:12.5%;">
            <p style="width:30%;text-align:center;margin:0px">功率</p>
          </div>
          <div style="height:12.5%;">
            <p style="width:30%;text-align:center;margin:0px">电量</p>
          </div>
          <div style="height:15%;"></div>
          <div style="height:20%;text-align:center;">
            <el-button style="padding-left:40px;padding-right:40px;
            border-radius: 18px;">读取</el-button>
            <el-button style="padding-left:40px;padding-right:40px;
            border-radius: 18px;margin-left:40px">写入</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="8" style="height: 100%">
        <div class="meaBiaoti">
          <p style="height:100%; margin: 1px;background-color: rgba(125,125,125,0.6);
          text-align:center; border:1px solid #000">
            用户用电数据
          </p>
        </div>
        <div class="meaBiaoge">
          <div style="height:15%;"></div>
          <div style="height:12.5%;">
            <p style="width:30%;text-align:center;margin:0px">电压</p>
          </div>
          <div style="height:12.5%;">
            <p style="width:30%;text-align:center;margin:0px">电流</p>
          </div>
          <div style="height:12.5%;">
            <p style="width:30%;text-align:center;margin:0px">功率</p>
          </div>
          <div style="height:12.5%;">
            <p style="width:30%;text-align:center;margin:0px">电量</p>
          </div>
          <div style="height:15%;"></div>
          <div style="height:20%;text-align:center;">
            <el-button style="padding-left:40px;padding-right:40px;
            border-radius: 18px;">读取</el-button>
            <el-button style="padding-left:40px;padding-right:40px;
            border-radius: 18px;margin-left:40px">写入</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="8" style="height: 100%">
        <div class="meaBiaoti">
          <p style="height:100%; margin: 1px;background-color: rgba(125,125,125,0.6);
          text-align:center; border:1px solid #000">
            回路电量数据
          </p>
        </div>
        <div class="meaBiaoge">
          <div style="height:15%;"></div>
          <div style="height:12.5%;">
            <p style="width:30%;text-align:center;margin:0px">电压</p>
          </div>
          <div style="height:12.5%;">
            <p style="width:30%;text-align:center;margin:0px">电流</p>
          </div>
          <div style="height:12.5%;">
            <p style="width:30%;text-align:center;margin:0px">功率</p>
          </div>
          <div style="height:12.5%;">
            <p style="width:30%;text-align:center;margin:0px">电量</p>
          </div>
          <div style="height:15%;"></div>
          <div style="height:20%;text-align:center;">
            <el-button style="padding-left:40px;padding-right:40px;
            border-radius: 18px;">读取</el-button>
            <el-button style="padding-left:40px;padding-right:40px;
            border-radius: 18px;margin-left:40px">写入</el-button>
          </div>
        </div>
      </el-col>
    </div>
    <div class="meaDownData">
      ccc
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.meaButton {
  height: 8%;
}
.meabuttonlayout {
  border-radius: 4px;
  margin-left: 0px !important;
}
.meaElecData {
  height: 44%;
}
.meaBiaoti {
  height: 9%;
  width: 42%;
}
.meaBiaoge {
  border:1px solid #000;
  margin-right: 10px;
  margin-left: 1px;
  margin-top: 1px;
  height: 91%;
  background: rgb(255, 255, 255);
}
.meaDownData {
  height: 48%;
}
</style>
