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
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">电压</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="RealData[0].DianYa"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 20px;">V</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:12.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">电流</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="RealData[0].DianLiu"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 20px;">A</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:12.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">功率</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="RealData[0].GongLv"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 14px;">KW</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:12.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">电量</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="RealData[0].DianLiang"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 10px;">KW·h</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:15%;"></div>
          <div style="height:20%;text-align:center;">
            <el-button style="padding-left:40px;padding-right:40px;
            border-radius: 18px;border-color: #424242;">读取</el-button>
            <el-button style="padding-left:40px;padding-right:40px;
            border-radius: 18px;margin-left:40px;border-color: #424242;">写入</el-button>
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
          <div style="height:15%;width:100%;padding:0px;text-align:center;">
            <el-select
            v-model="YongHuData"
            style="width: 78%;padding-top:10px;padding-left:2%;"
            size="mini"
            >
              <el-option v-for="item in RealData[1].options"  :key="item.value"
                :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div style="height:12.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">电压</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="RealData[1].DianYa"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 20px;">V</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:12.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">电流</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="RealData[1].DianLiu"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 20px;">A</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:12.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">功率</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="RealData[1].GongLv"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 14px;">KW</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:12.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">电量</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="RealData[1].DianLiang"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 10px;">KW·h</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:15%;"></div>
          <div style="height:20%;text-align:center;">
            <el-button style="padding-left:40px;padding-right:40px;
            border-radius: 18px;border-color: #424242;">读取</el-button>
            <el-button style="padding-left:40px;padding-right:40px;
            border-radius: 18px;margin-left:40px;border-color: #424242;">写入</el-button>
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
         <div style="height:15%;width:100%;padding:0px;text-align:center;">
           <el-col :span="8" style="height:100%;text-align:right;margin:0px">
              <el-select
              v-model="HuiLuData"
              style="width: 70%;padding-top:10px;"
              size="mini">
              <el-option v-for="item in RealData[2].options"  :key="item.value"
                :label="item.label" :value="item.value">
              </el-option>
            </el-select>
           </el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              style="width:70%;padding-top:10px;"
              v-model="YongHuData"
              :rows="2"
              placeholder="租户类型">
              </el-input>
            </el-col>
          </div>
          <div style="height:12.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">电压</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="RealData[2].DianYa"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 20px;">V</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:12.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">电流</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="RealData[2].DianLiu"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 20px;">A</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:12.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">功率</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="RealData[2].GongLv"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 14px;">KW</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:12.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">电量</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="RealData[2].DianLiang"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 10px;">KW·h</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:15%;"></div>
          <div style="height:20%;text-align:center;">
            <el-button style="padding-left:40px;padding-right:40px;
            border-radius: 18px;border-color: #424242;">读取</el-button>
            <el-button style="padding-left:40px;padding-right:40px;
            border-radius: 18px;margin-left:40px;border-color: #424242;">写入</el-button>
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
  name: 'Measurement',
  data() {
    return {
      // 和用户用电数据的下拉框进行绑定的数值
      YongHuData: 0,
      HuiLuData: 0,
      RealData: [{
        DianYa: 0,
        DianLiu: 0,
        GongLv: 0,
        DianLiang: 0,
      }, {
        options: [{
          label: '移动租户',
          value: 0,
        }, {
          label: '联通租户',
          value: 1,
        }, {
          label: '电信租户',
          value: 2,
        }, {
          label: '移动5G',
          value: 3,
        }, {
          label: '联通5G',
          value: 4,
        }, {
          label: '电信5G',
          value: 5,
        }, {
          label: '包干型',
          value: 6,
        }, {
          label: '计量型',
          value: 7,
        }, {
          label: '直流发电机',
          value: 8,
        }, {
          label: '其他',
          value: 9,
        }],
        DianYa: 0,
        DianLiu: 0,
        GongLv: 0,
        DianLiang: 0,
      }, {
        options: [{
          label: '第1回路',
          value: 0,
        }, {
          label: '第2回路',
          value: 1,
        }, {
          label: '第3回路',
          value: 2,
        }, {
          label: '第4回路',
          value: 3,
        }, {
          label: '第5回路',
          value: 4,
        }, {
          label: '第6回路',
          value: 5,
        }, {
          label: '第7回路',
          value: 6,
        }, {
          label: '第8回路',
          value: 7,
        }, {
          label: '第9回路',
          value: 8,
        }, {
          label: '第10回路',
          value: 9,
        }, {
          label: '第11回路',
          value: 10,
        }, {
          label: '第12回路',
          value: 11,
        }, {
          label: '发电机回路',
          value: 12,
        }],
        DianYa: 0,
        DianLiu: 0,
        GongLv: 0,
        DianLiang: 0,
      }],
    };
  },
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
.el-input__inner {
  border: 1px solid #000000;
  -webkit-appearance: none;
  background-color: transparent;
  background-image: none;
  border-radius: 0px;
  box-sizing: border-box;
}
.meaDownData {
  height: 48%;
}
</style>
