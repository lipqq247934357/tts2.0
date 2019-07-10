import Cookies from 'js-cookie'

const app = {
    state: {
        sidebar: {
			// @ts-ignore
            opened: !+Cookies.get('sidebarStatus'),
            withoutAnimation: false
        },
        device: 'desktop'
    },
    mutations: {
		// @ts-ignore
        TOGGLE_SIDEBAR: state => {
            if (state.sidebar.opened) {
				// @ts-ignore
                Cookies.set('sidebarStatus', 1)
            } else {
				// @ts-ignore
                Cookies.set('sidebarStatus', 0)
            }
            state.sidebar.opened = !state.sidebar.opened
            state.sidebar.withoutAnimation = false
        },
		// @ts-ignore
        CLOSE_SIDEBAR: (state, withoutAnimation) => {
			// @ts-ignore
            Cookies.set('sidebarStatus', 1)
            state.sidebar.opened = false
            state.sidebar.withoutAnimation = withoutAnimation
        },
		// @ts-ignore
        TOGGLE_DEVICE: (state, device) => {
            state.device = device
        }
    },
    actions: {
		// @ts-ignore
        ToggleSideBar: ({commit}) => {
            commit('TOGGLE_SIDEBAR')
        },
		// @ts-ignore
        CloseSideBar({commit}, {withoutAnimation}) {
            commit('CLOSE_SIDEBAR', withoutAnimation)
        },
		// @ts-ignore
        ToggleDevice({commit}, device) {
            commit('TOGGLE_DEVICE', device)
        }
    }
}

export default app
