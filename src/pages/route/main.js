/*
 * @Author: erye 
 * @Date: 2018-05-04 10:42:24 
 * @Last Modified by:   erye 
 * @Last Modified time: 2018-05-04 10:42:24 
 */
import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    "navigationBarTitleText": "公交快查",
    "backgroundColor": "#EFEFEF"
  }
}
