<template>
    <div :class="$style['weight-history']">
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
<script>
import {formatDate} from '../../../utils/utils.js'

export default {
    components: {
    },
    props: {
        historyData: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {}
    },
    methods: {
        formatDate(x, y, date) {
            return formatDate(date);
        }
    }
}


</script>
<style lang="scss" module>

    .weight-history {
        float: left;
        margin-left: 50px;
        margin-top: 20px;
    }

</style>
