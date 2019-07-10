import store from '@/store'
import {Vue, Component, Watch} from 'vue-property-decorator'

const {body} = document
const WIDTH = 992 // refer to Bootstrap's responsive design

@Component
export default class ResizeHandler extends Vue {

	@Watch('$route')
	$routeChange(route: any) {
		//@ts-ignore
		if (this.device === 'mobile' && this.sidebar.opened) {
			store.dispatch('CloseSideBar', {withoutAnimation: false})
		}
	}

	beforeMount() {
		window.addEventListener('resize', this.resizeHandler)
	}

	mounted() {
		const isMobile = this.isMobile()
		if (isMobile) {
			store.dispatch('ToggleDevice', 'mobile')
			store.dispatch('CloseSideBar', {withoutAnimation: true})
		}
	}

	isMobile() {
		const rect = body.getBoundingClientRect()
		return rect.width - 1 < WIDTH
	}

	resizeHandler() {
		if (!document.hidden) {
			const isMobile = this.isMobile()
			store.dispatch('ToggleDevice', isMobile ? 'mobile' : 'desktop')

			if (isMobile) {
				store.dispatch('CloseSideBar', {withoutAnimation: true})
			}
		}
	}
}
