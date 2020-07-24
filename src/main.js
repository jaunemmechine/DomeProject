import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import router from "./router/index";
import "echarts/lib/component/title";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
    render: h => h(App),
    router
}).$mount("#app");
