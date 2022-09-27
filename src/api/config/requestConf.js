import Cookies from 'js-cookie'
// import store from '../../store';
import {AxiosRequestConfig} from 'axios';

export const requestConf = function (config) {
    // config.headers['systemId'] = 's000008'; // 系统id
    config.headers['ticket'] = Cookies.get('token');    // 通过cookie获取token并设置token
    // // 设置 menuId
    // config.headers['menuId'] = store.getters.menuId || '';
    // // btnId通过每个按钮自己去设置
    // config.headers['buttonId'] = store.getters.btnId || '';

    return config;
}
