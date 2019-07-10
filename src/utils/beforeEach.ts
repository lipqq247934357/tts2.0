import router from '../router';
import store from '../store';
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import {getToken, setToken} from './auth';
import Vue from 'vue';
import {urlParse4Search} from './utils';

const ucenterLoginUrl = process.env.VUE_APP_UCENTER_LOGIN_URL;

const whiteList = ['/login', '/regist', '/403', '/404'];
NProgress.configure({showSpinner: false})// NProgress Configuration

router.beforeEach((to: { path: string; }, from: any, next: { (): void; (): void; (): void; }) => {
    NProgress.start();
    // 在免登录白名单，直接进入
    if (whiteList.some(item => {
        return item === to.path;
    })) {
        NProgress.done();
        next();
    } else {
        let ticket = urlParse4Search().ticket;
        let token = getToken();
        if (ticket) {
            setToken(ticket);
            store.commit('SET_TREE', []);
            //url上删除 ticket
            window.location.href = window.location.href.split('?')[0] + '#/monitorm/trade';
        } else if (token) {
            if (store.getters.tree.length === 0) { // 是否已经获取当前用户信息和权限树等
                Vue.prototype.$api.common.privilegeInfo({ticket: token}).then((res: any) => {
                    if (res.data.resultCode !== '0000') { // 无效票据
                        NProgress.done();
                        window.location.href = ucenterLoginUrl;
                    } else {
                        //添加store中的tree和userInfo
                        store.commit('SET_TREE', res.data.menuPrivList);
                        store.commit('SET_BTN', res.data.buttonPrivList);
                        store.commit('SET_USERNAME', res.data.loginName);
                        setBtnArr(store, to.path); // 设置btnArr数组
                        NProgress.done();
                        next();
                    }
                }).catch(function (error: any) {
                    NProgress.done();
                    window.location.href = ucenterLoginUrl;
                });
            } else { // 如果用户已经有权限树和用户信息
                setBtnArr(store, to.path); // 通过请求路径设置btnArr
                next();
                NProgress.done();
            }
        } else {
            window.location.href = ucenterLoginUrl;
        }
    }
});

function setBtnArr(store: any, path: string) {
    store.getters.tree.some((item: any) => {
        if (item.menuUrl === path) {
            store.commit('SET_MENUID', item.menuId);
            for (let btn of store.getters.btn) {
                if (btn.menuId === item.menuId) {
                    store.commit('SET_BUTTONIDARR', btn.buttonIdArr);
                }
            }
            return true;
        }
    })
}



