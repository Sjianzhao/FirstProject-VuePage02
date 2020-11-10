import Vue from 'vue';
import 'xe-utils';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VXETable);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
