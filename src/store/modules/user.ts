import vue from 'vue'
import {getToken, setToken, removeToken} from '@/utils/auth.ts'


const user = {
    state: {
        token: getToken(),
        name: '',
        avatar: '',
        roles: [],
        tree: [], // 树结构
        btn: [], // 按钮权限数组
        userInfo: {},
        menuId: '', // 当前页面所属按钮ID
        buttonArr: [], // 当前页面可以访问的按钮组
        btnId: '', // 点击按钮之后临时存放的btnId,在ajax请求获取这个值之后删除它
        userName: ''
    },

    mutations: {
        // @ts-ignore
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        // @ts-ignore
        SET_NAME: (state, name) => {
            state.name = name
        },
        // @ts-ignore
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        // @ts-ignore
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        // @ts-ignore
        SET_TREE: (state, tree) => {
            state.tree = tree
        },

        // @ts-ignore
        SET_BTN: (state, btn) => {
            state.btn = btn
        },

        // @ts-ignore
        SET_USERINFO: (state, userInfo) => {
            state.userInfo = userInfo
        },
        // @ts-ignore
        SET_USERNAME: (state, userName) => {
            state.userName = userName
        },
        // @ts-ignore
        SET_MENUID: (state, menuId) => {
            state.menuId = menuId
        },
        // @ts-ignore
        SET_BUTTONIDARR: (state, buttonArr) => {
            state.buttonArr = buttonArr
        },
        // @ts-ignore
        SET_BTNID: (state, btnId) => {
            state.btnId = btnId
        },
    },

    actions: {
        // 登录
        // @ts-ignore
        Login({commit}, userInfo) {
            const username = userInfo.username.trim()
            return new Promise((resolve, reject) => {
                // @ts-ignore
                vue.prototype.$api.common.login(username, userInfo.password).then(response => {
                    const data = response.data
                    setToken(data.token) // 设置token值
                    commit('SET_TOKEN', data.token)
                    resolve()
                    // @ts-ignore
                }).catch(error => {
                    reject(error)
                })

            })
        },

        // 获取用户信息
        // @ts-ignore
        GetInfo({commit, state}) {
            return new Promise((resolve, reject) => {
                // @ts-ignore
                vue.prototype.$api.common.getInfo(state.token).then(response => {
                    const data = response.data
                    if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
                        commit('SET_ROLES', data.roles)
                    } else {
                        reject('getInfo: roles must be a non-null array !')
                    }
                    commit('SET_NAME', data.name)
                    commit('SET_AVATAR', data.avatar)
                    resolve(response)
                    // @ts-ignore
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 登出
        // @ts-ignore
        LogOut({commit}) {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            removeToken()
        },

        // 前端 登出
        // @ts-ignore
        FedLogOut({commit}) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            })
        }
    }
}

export default user
