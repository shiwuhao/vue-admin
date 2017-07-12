import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import axios from 'axios'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import routes from './routes.js'
Vue.use(ElementUI)
Vue.use(VueRouter)

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
Vue.prototype.$http=axios
const router=new VueRouter({
    routes
})
const vm=new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

//����ָ��


