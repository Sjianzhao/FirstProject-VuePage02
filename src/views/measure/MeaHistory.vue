<template>
  <div style="wigth: 100%; height: 100%">
    <div class="meaElecData">
      <el-col :span="8" style="height: 100%">
        <div class="meaBiaoti">
          <p style="height:100%; margin: 1px;background-color: rgba(125,125,125,0.6);
          text-align:center; border:1px solid #000">
            总用电量数据
          </p>
        </div>
        <div class="meaBiaoge">
          <div style="height:13%;"></div>
          <div style="height:10.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">当月用电量</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="hisRealData[0].CurrentEle"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 20px;">V</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:10.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">上月用电量</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="hisRealData[0].LastEle"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 20px;">A</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:10.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">日冻结时间</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="hisRealData[0].DayFreeTime"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 14px;">KW</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:10.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">日冻结时电量</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="hisRealData[0].DayFreeEle"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 10px;">KW·h</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:10.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">月冻结时间</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="hisRealData[0].MonthFreeEle"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 10px;">KW·h</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:10.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">月冻结时电量</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="hisRealData[0].MonthFreeEle"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 10px;">KW·h</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:5%;text-align:center;"></div>
          <div style="height:19%;text-align:center;">
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
          <div style="height:13%;width:100%;padding:0px;text-align:center;">
            <el-select
            v-model="YongHuData"
            style="width: 82%;padding-top:10px;padding-right:2%;padding-top:5px"
            size="mini"
            >
              <el-option v-for="item in hisRealData[1].options"  :key="item.value"
                :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div style="height:10.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">当月用电量</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="hisRealData[1].CurrentEle"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 20px;">V</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:10.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">上月用电量</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="hisRealData[1].LastEle"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 20px;">A</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:10.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">日冻结时间</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="hisRealData[1].DayFreeTime"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 14px;">KW</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:10.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">日冻结时电量</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="hisRealData[1].DayFreeEle"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 10px;">KW·h</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:10.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">月冻结时间</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="hisRealData[1].MonthFreeEle"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 10px;">KW·h</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:10.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">月冻结时电量</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="hisRealData[1].MonthFreeEle"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 10px;">KW·h</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:5%;text-align:center;"></div>
          <div style="height:19%;text-align:center;">
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
         <div style="height:13%;width:100%;padding:0px;text-align:center;">
           <el-col :span="8" style="height:100%;text-align:right;margin:0px">
              <el-select
              v-model="HuiLuData"
              style="width: 80%;padding-top:5px;"
              size="mini">
              <el-option v-for="item in hisRealData[2].options"  :key="item.value"
                :label="item.label" :value="item.value">
              </el-option>
            </el-select>
           </el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              style="width:70%;padding-top:5px;"
              v-model="YongHuData"
              :rows="2"
              placeholder="租户类型">
              </el-input>
            </el-col>
          </div>
          <div style="height:10.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">当月用电量</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="hisRealData[2].CurrentEle"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 20px;">V</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:10.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">上月用电量</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="hisRealData[2].LastEle"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 20px;">A</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:10.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">日冻结时间</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="hisRealData[2].DayFreeTime"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 14px;">KW</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:10.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">日冻结时电量</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="hisRealData[2].DayFreeEle"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 10px;">KW·h</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:10.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">月冻结时间</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="hisRealData[2].MonthFreeEle"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 10px;">KW·h</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:10.5%;">
            <el-col :span="8" style="height:100%;text-align:center;margin:0px">月冻结时电量</el-col>
            <el-col :span="16" style="height:100%;text-align:center;margin:0px">
              <el-input class="meatextarea"
              auto-complete="on"
              type="text"
              size="mini"
              suffix-icon="el-icon-lightning"
              style="width:70%;"
              v-model="hisRealData[2].MonthFreeEle"
              :rows="2"
              placeholder=" "><i slot="suffix" style="font-style:normal;
              color:#000000;margin-right: 10px;">KW·h</i>
              </el-input>
            </el-col>
          </div>
          <div style="height:5%;text-align:center;"></div>
          <div style="height:19%;text-align:center;">
            <el-button style="padding-left:40px;padding-right:40px;
            border-radius: 18px;border-color: #424242;">读取</el-button>
            <el-button style="padding-left:40px;padding-right:40px;
            border-radius: 18px;margin-left:40px;border-color: #424242;">写入</el-button>
          </div>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 和用户用电数据的下拉框进行绑定的数值
      YongHuData: 0,
      // 和回路下拉框进行绑定的数值
      HuiLuData: 0,
      hisRealData: [{
        CurrentEle: 0,
        LastEle: 0,
        DayFreeTime: 0,
        DayFreeEle: 0,
        MonthFreeTime: 0,
        MonthFreeEle: 0,
      }, {
        options: [
          { label: '移动租户', value: 0 },
          { label: '联通租户', value: 1 },
          { label: '电信租户', value: 2 },
          { label: '移动5G', value: 3 },
          { label: '联通5G', value: 4 },
          { label: '电信5G', value: 5 },
          { label: '包干型', value: 6 },
          { label: '计量型', value: 7 },
          { label: '直流发电机', value: 8 },
          { label: '其他', value: 9 },
        ],
        CurrentEle: 0,
        LastEle: 0,
        DayFreeTime: 0,
        DayFreeEle: 0,
        MonthFreeTime: 0,
        MonthFreeEle: 0,
      }, {
        options: [
          { label: '第1回路', value: 0 },
          { label: '第2回路', value: 1 },
          { label: '第3回路', value: 2 },
          { label: '第4回路', value: 3 },
          { label: '第5回路', value: 4 },
          { label: '第6回路', value: 5 },
          { label: '第7回路', value: 6 },
          { label: '第8回路', value: 7 },
          { label: '第9回路', value: 8 },
          { label: '第10回路', value: 9 },
          { label: '第11回路', value: 10 },
          { label: '第12回路', value: 11 },
          { label: '发电机回路', value: 12 },
        ],
        CurrentEle: 0,
        LastEle: 0,
        DayFreeTime: 0,
        DayFreeEle: 0,
        MonthFreeTime: 0,
        MonthFreeEle: 0,
      }],
    };
  },
};
</script>

<style>
.meaElecData {
  height: 48%;
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
  height: 50%;
  margin-top:1%;
}
</style>
