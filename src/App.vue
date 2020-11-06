<template>
<div class="master">
  <!-- 标题 -->
  <div id="titlehead">
    <h5 style= "margin: 10px;  color: rgb(181,205,231);
    text-align:center; margin: 1px; width: 100%"
    >智能配电单元上位机测试软件</h5>
  </div>
  <!-- 8个按键 代表home中的东西-->
  <div class="masterpage">
    <Home></Home>
  </div>
</div>
</template>

<script>
import Home from '@/views/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  },
};
</script>

<style>
html {
  height: 100%;
  width: 100%;
}
body {
  height: 100%;
  width: 100%;
  margin: 0px;
}
.master {
  background-size:cover;
  height: 100%;
  width: 100%;
  background-color: #eaeaea;
  /* background: url('./assets/background017.jpg') no-repeat center; */
}
#titlehead {
  overflow: hidden;
  box-shadow: 1px 1px 0.1px rgba(202, 193, 193, 0.63);
  height: 3%;
  width: 100%;
  display: flex;
  background-image: -webkit-linear-gradient(top, #e73221, #1a4b79, #0c0722);
/* 规定背景绘制区域 */
  -webkit-background-clip: text;
/* 将文字隐藏 */
  -webkit-text-fill-color: transparent;
}
.masterpage {
  height: 97%;
  width: 100%;
  display: flex;
}

</style>
