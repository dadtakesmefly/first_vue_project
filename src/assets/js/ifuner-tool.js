/**
 * ifuner 制作 @18658226071@163.com
 */
// var axios = require('./axios')

class ifunerTool {
  constructor () {
    /*通用正则*/
    this.reg = {
      phone: /^1\d{10}$/,
      pw: '',
      /*验证码正则 6位数 纯数字*/
      code: /^\d{6}$/
    }

    /*全局变量*/
    this.globleVars = {
      env: process.env.NODE_ENV,
      apiHost: process.env.API_HOST,
      debug: process.env.DEBUG
    }
  }


  ToUnicode (str) {
    return escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u')
  }

  isWeiXin () {
    var ua = window.navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true
    } else {
      return false
    }
  }

  parseTwitterDate (tdate) {
    var system_date = tdate * 1000
    var user_date = new Date()
    var diff = Math.floor((user_date - system_date) / 1000)
    console.log(diff)
    if (diff <= 1) {
      return 'just now'
    }
    if (diff < 20) {
      return diff + ' seconds ago'
    }
    if (diff < 40) {
      return 'half a minute ago'
    }
    if (diff < 60) {
      return 'less than a minute ago'
    }
    if (diff <= 90) {
      return 'one minute ago'
    }
    if (diff <= 3540) {
      return Math.round(diff / 60) + ' minutes ago'
    }
    if (diff <= 5400) {
      return '1 hour ago'
    }
    if (diff <= 86400) {
      return Math.round(diff / 3600) + ' hours ago'
    }
    if (diff <= 129600) {
      return '1 day ago'
    }
    if (diff < 604800) {
      return Math.round(diff / 86400) + ' days ago'
    }
    if (diff <= 777600) {
      return '1 week ago'
    }
    return system_date
  }

  delAllCookie () {
    var myDate = new Date()
    myDate.setTime(-1000)//设置时间
    var data = document.cookie
    var dataArray = data.split('; ')
    for (var i = 0; i < dataArray.length; i++) {
      var varName = dataArray[i].split('=')
      document.cookie = varName[0] + '=\'\'; expires=' + myDate.toGMTString() + ';path=/'
    }
  }

  iConsole (type, res) {
    let data = {
      style: '',
      tips: ''
    }
    if (type == 'response') {
      data.style = 'color: #fff; background: green'
      data.tips = 'response'
    } else if (type == 'request') {
      data.style = 'color: red; background: yellow'
      data.tips = 'request'
    }
    console.groupCollapsed('%c%s', `${data.style};font-size: 12px;font-weight:normal`, `拦截全局的${data.tips}`)
    console.time('time')
    console.log(res)
    console.timeEnd('time')
    console.groupEnd()
  }

}

var iTool = new ifunerTool()
export default iTool
