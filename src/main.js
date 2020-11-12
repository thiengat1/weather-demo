/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2020-11-11 22:00:53
 * @LastEditTime: 2020-11-11 23:46:11
 * @LastEditors: Lewis
 */
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  render: h => h(App)
})
