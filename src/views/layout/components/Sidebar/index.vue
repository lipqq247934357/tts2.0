<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
            :active-text-color="variables.menuActiveText"
            :background-color="variables.menuBg"
            :collapse="isCollapse"
            :collapse-transition="false"
            :default-active="$route.path"
            :text-color="variables.menuText"
            mode="vertical"
        >
            <sidebar-item :item="route" :key="route.menuId" v-for="route in treeData"/>
        </el-menu>
    </el-scrollbar>
</template>

<script>
    import { mapGetters } from 'vuex'
    import variables from '@/styles/variables.scss'
    import SidebarItem from './SidebarItem'
    import { treeUtil } from '@/utils/utils'

    export default {
        components: { SidebarItem },
        computed: {
            ...mapGetters([
                'sidebar', 'tree'
            ]),
            variables () {
                return variables
            },
            isCollapse () {
                return !this.sidebar.opened
            }
        },
        data () {
            return { treeData: [] }
        },
        created () {
            // TODO 已知bug：一个子节点的时候会出问题，而且一个节点样式展示也有问题
            // this.treeData = (treeUtil(this.tree));
            this.treeData = (treeUtil([
                {
                    "menuId": "100100",
                    "menuLevel": "1",
                    "menuName": "监控管理",
                    "menuOrder": "1",
                    "menuUrl": "",
                    "parentMenuId": ""
                },
                {
                    "menuId": "100101",
                    "menuLevel": "2",
                    "menuName": "实时交易管控",
                    "menuOrder": "1",
                    "menuUrl": "/monitorm/trade",
                    "parentMenuId": "100100"
                }
            ]))
        }
    }
</script>
