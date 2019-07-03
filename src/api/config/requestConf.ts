import Cookies from 'js-cookie'
// import store from '../../store';
import {AxiosRequestConfig} from 'axios';

export const requestConf = function (config: AxiosRequestConfig) {
    // config.headers['systemId'] = 's000008'; // 系统id
    config.headers['ticket'] = Cookies.get('token');    // 通过cookie获取token并设置token
    // config.headers['menuId'] = store.getters.menuId || '';
    // let item = store.getters.btnId;
    // if (item) {
    //     config.headers['menuId'] = item || '';
    //     store.getters.btnId = '';
    // }
    return config;
}
