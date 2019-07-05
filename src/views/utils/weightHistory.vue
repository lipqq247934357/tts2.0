<template>
    <div class="" style="float: left; margin-left: 50px; margin-top: 20px;">
        <el-table
                :data="historyData"
                style="width: 800px;"
        >
            <el-table-column
                    :formatter="formatDate"
                    label="开始时间"
                    prop="startTime"
            >
            </el-table-column>

            <el-table-column
                    :formatter="formatDate"
                    label="结束时间"
                    prop="endTime"
            >
            </el-table-column>
            <el-table-column
                    label="初始重量（斤）"
                    prop="nowWeight">
            </el-table-column>
            <el-table-column
                    label="目标重量（斤）"
                    prop="wantedWeight">
            </el-table-column>
            <el-table-column
                    label="减重（斤）"
                    prop="reduce">
            </el-table-column>
            <el-table-column
                    label="每日减重（g）"
                    prop="everyAmount">
            </el-table-column>
        </el-table>
    </div>
</template>
<script lang="ts">


    import {Component, Vue} from 'vue-property-decorator';
    import {formatDate} from '@/utils/utils'

    @Component({
        props: {
            historyData: Array
        }
    })
    export default class weightHistory extends Vue {
        formatDate(x: any, y: any, date: Date) {
            return formatDate(date);
        }


    }


</script>
<style lang="scss" module>


</style>
