import axios, {AxiosRequestConfig} from 'axios';
import {Message} from 'element-ui';
import router from '../../router';
import {requestConf} from './requestConf';
// axios 配置
axios.defaults.timeout = 6969;
if (process.env.NODE_ENV === 'development') {// 根据不同的环境使用不同的接口
    // axios.defaults.baseURL = '/CREDIT-API-WEB';
    axios.defaults.baseURL = '/mock';
} else {
    // axios.defaults.baseURL = '/CREDIT-API-WEB';
    axios.defaults.baseURL = '/mock';
}
axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8';

axios.interceptors.request.use(function (config: AxiosRequestConfig) {
    if (config.url && config.url.endsWith('/ucenter/service/validate/ticket')) {// 如果走的用户中心，修改地址
        config.baseURL = '';
        config.headers['Content-Type'] = 'text/plain;charset=UTF-8';
    }
    return requestConf(config);
}, err => {
    Message.error({message: '请求超时!', duration: 5 * 1000});
    return Promise.reject(err);
});

axios.interceptors.response.use(function (response) {
    // 移除对非正常状态的拦截，更加可控
    // if (response.data.resultCode === '9000') {
    //     //业务异常
    //     Message.error({message: response.data.resultMsg, duration: 5 * 1000});
    // } else if (response.data.resultCode === '9999') {
    //     //系统异常
    //     Message.error({message: response.data.resultMsg, duration: 5 * 1000});
    // }
    return response;
}, err => {
    if (!err.response) {
        return Promise.reject(err);
    }
    if (err.response.status === 504) {
        Message.error({message: '服务器未响应', duration: 5 * 1000});
    } else if (err.response.status === 401) {
        router.push({
            path: '/login'
        });
    } else if (err.response.status === 403) {
        Message.error({message: '您没有权限访问', duration: 5 * 1000});
    } else if (err.response.status === 404) {
        Message.error({message: '页面找不到', duration: 5 * 1000});
    } else {
        Message.error({message: '未知错误!', duration: 5 * 1000});
    }
    return Promise.reject(err);
});

export const get = (url: string, data = {}) => {
    return axios.get(url, {params: data});
}


export const post = (url: string, data = {}) => {
    return axios.post(url, data);
}
