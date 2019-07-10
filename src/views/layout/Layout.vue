<template>
	<div :class="[classObj,$style['app-wrapper']]">
		<div :class="$style['drawer-bg']" @click="handleClickOutside" v-if="device==='mobile'&&sidebar.opened"/>
		<sidebar class="sidebar-container"/>
		<div class="main-container">
			<navbar/>
			<app-main/>
		</div>
	</div>
</template>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator'
	import Navbar from './components/Navbar/index.vue';
	import Sidebar from './components/Sidebar/index.vue';
	import AppMain from './components/AppMain.vue';
	import ResizeMixin from './mixin/ResizeHandler'

	@Component({
		components: {
			Navbar,
			Sidebar,
			AppMain
		},
		mixins: [ResizeMixin]
	})

	export default class Layout extends Vue {

		get sidebar() {
			return this.$store.state.app.sidebar
		}


		get device() {
			return this.$store.state.app.device
		}


		get classObj() {
			return {
				hideSidebar: !this.sidebar.opened,
				openSidebar: this.sidebar.opened,
				withoutAnimation: this.sidebar.withoutAnimation,
				mobile: this.device === 'mobile'
			}
		}

		handleClickOutside() {
			this.$store.dispatch('CloseSideBar', {withoutAnimation: false})
		}
	}
</script>

<style lang="scss" module>

	.app-wrapper {
		position: relative;
		height: 100%;
		width: 100%;

		&.mobile.openSidebar {
			position: fixed;
			top: 0;
		}
	}

	.drawer-bg {
		background: #000;
		opacity: 0.3;
		width: 100%;
		top: 0;
		height: 100%;
		position: absolute;
		z-index: 999;
	}
</style>
