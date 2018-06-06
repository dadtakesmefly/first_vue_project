/**
 * ifuner 制作 @18658226071@163.com
 */

'use strict'
import axios from 'axios'

var instance = axios.create({
  baseURL: process.env.NODE_ENV,
  timeout: 3000,
  // withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: function (status) {
    return status // default
  },
})

export default instance