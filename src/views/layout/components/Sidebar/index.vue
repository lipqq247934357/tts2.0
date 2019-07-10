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

<script lang="ts">
    import {mapGetters} from 'vuex'
    import  variables from '~/styles/variables.scss'
    import SidebarItem from './SidebarItem.vue'
    import {treeUtil} from '~/utils/utils'

    export default {
        components: {SidebarItem},
        computed: {
            ...mapGetters([
                'sidebar', 'tree'
            ]),
            variables() {
                return variables
            },
            isCollapse(): any {
                // @ts-ignore
                return !this.sidebar.opened
            }
        },
        data() {
            return {treeData: []}
        },
        created() {
            // TODO 已知bug：一个子节点的时候会出问题，而且一个节点样式展示也有问题
            // this.treeData = (treeUtil(this.tree));
            // @ts-ignore
            this.treeData = (treeUtil([
                {
                    "menuId": "100100",
                    "menuLevel": "1",
                    "menuName": "活动管理",
                    "menuOrder": "1",
                    "menuUrl": "",
                    "parentMenuId": ""
                },
                {
                    "menuId": "100101",
                    "menuLevel": "2",
                    "menuName": "新建活动",
                    "menuOrder": "1",
                    "menuUrl": "/monitorm/trade",
                    "parentMenuId": "100100"
                },
                {
                    "menuId": "100102",
                    "menuLevel": "2",
                    "menuName": "活动列表",
                    "menuOrder": "2",
                    "menuUrl": "/monitorm/trade",
                    "parentMenuId": "100100"
                },
                {
                    "menuId": "100103",
                    "menuLevel": "1",
                    "menuName": "奖品管理",
                    "menuOrder": "2",
                    "menuUrl": "",
                    "parentMenuId": ""
                },
                {
                    "menuId": "100104",
                    "menuLevel": "2",
                    "menuName": "新建奖品",
                    "menuOrder": "1",
                    "menuUrl": "/monitorm/trade",
                    "parentMenuId": "100103"
                },
                {
                    "menuId": "100105",
                    "menuLevel": "2",
                    "menuName": "奖品列表",
                    "menuOrder": "2",
                    "menuUrl": "/monitorm/trade",
                    "parentMenuId": "100103"
                },
                {
                    "menuId": "100106",
                    "menuLevel": "2",
                    "menuName": "抽奖列表",
                    "menuOrder": "3",
                    "menuUrl": "",
                    "parentMenuId": "100103"
                },
                {
                    "menuId": "100107",
                    "menuLevel": "2",
                    "menuName": "派奖列表",
                    "menuOrder": "4",
                    "menuUrl": "/monitorm/trade",
                    "parentMenuId": "100103"
                },


                {
                    "menuId": "100108",
                    "menuLevel": "1",
                    "menuName": "报表",
                    "menuOrder": "3",
                    "menuUrl": "/monitorm/trade",
                    "parentMenuId": ""
                }, {
                    "menuId": "100109",
                    "menuLevel": "2",
                    "menuName": "活动统计",
                    "menuOrder": "1",
                    "menuUrl": "",
                    "parentMenuId": "100108"
                },
                {
                    "menuId": "100110",
                    "menuLevel": "1",
                    "menuName": "系统管理",
                    "menuOrder": "4",
                    "menuUrl": "/monitorm/trade",
                    "parentMenuId": ""
                },
                {
                    "menuId": "100111",
                    "menuLevel": "2",
                    "menuName": "账号",
                    "menuOrder": "1",
                    "menuUrl": "/monitorm/trade",
                    "parentMenuId": "100110"
                }, {
                    "menuId": "100112",
                    "menuLevel": "2",
                    "menuName": "角色",
                    "menuOrder": "2",
                    "menuUrl": "",
                    "parentMenuId": "100110"
                },
                {
                    "menuId": "100113",
                    "menuLevel": "2",
                    "menuName": "行员列表",
                    "menuOrder": "3",
                    "menuUrl": "/monitorm/trade",
                    "parentMenuId": "100110"
                }
            ]))
        }
    }
</script>
