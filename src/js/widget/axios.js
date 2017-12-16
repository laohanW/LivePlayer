/**
 * @Author: songqi
 * @Date:   2017-01-11
 * @Last modified by:   songqi
 * @Last modified time: 2017-05-08
 */

import { TIMEOUT,TYPE } from 'Config/apis'
var bmAxios = weex.requireModule('bmAxios')

export default {
    install(Vue, options) {
        Vue.prototype.$fetch = (options) => {
            // 不仅支持 success, error 的回调写法，还支持 promise 的写法
            return new Promise((resolve, reject) => {
                let url,method;
                if (options.url) {
                    url = options.url;
                    method = options.method || 'GET';
                } else {
                    if (TYPE ==='mock') {
                        let d='';
                        let keys = Object.keys(options.data);
                        keys.forEach((val) => {
                            keys += '_' + val+"-"+options.data[val];
                        });
                        url = Vue.prototype.eros.apis.mock[options.name]+keys;
                        method = 'GET';
                    } else {
                        url = Vue.prototype.eros.apis.http[options.name];
                        method = options.method || 'GET';
                    }
                }
                bmAxios.fetch({
                    method: method,
                    url:url,
                    header: options.header || {},
                    data: options.data || {},
                    timeout: TIMEOUT || 30000
                }, (resData) => {
                    // 可以做统一的监控
                    Vue.prototype.eros.responseHandler(options, resData, resolve, reject)
                })
            })
        }
    }
}
