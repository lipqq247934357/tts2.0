<template>
    <div :class="$style['weight-history']">
        <a-table
                :data="historyData"
                style="width: 800px;"
        >
            <a-table-column
                    :formatter="formatDate"
                    label="开始时间"
                    prop="startTime"
            >
            </a-table-column>

            <a-table-column
                    :formatter="formatDate"
                    label="结束时间"
                    prop="endTime"
            >
            </a-table-column>
            <a-table-column
                    label="初始重量（斤）"
                    prop="nowWeight">
            </a-table-column>
            <a-table-column
                    label="目标重量（斤）"
                    prop="wantedWeight">
            </a-table-column>
            <a-table-column
                    label="减重（斤）"
                    prop="reduce">
            </a-table-column>
            <a-table-column
                    label="每日减重（g）"
                    prop="everyAmount">
            </a-table-column>
        </a-table>
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
