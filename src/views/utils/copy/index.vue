<template>
    <div>
        <el-input v-model="inputData" placeholder="Please input" style="width:400px;max-width:100%;" />
        <el-button v-clipboard:copy="inputData" v-clipboard:success="clipboardSuccess" type="primary" icon="document">
            copy
        </el-button>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {formatDate} from '@/utils/utils'

    // @ts-ignore
    import clipboard from '@/directive/clipboard/index.js'


    @Component({
        props: {
            historyData: Array
        },
        directives:{
            clipboard
        }
    })
    export default class weightHistory extends Vue {
        inputData:string = '';

        clipboardSuccess() {
            this.$message({
                message: 'Copy successfully',
                type: 'success',
                duration: 1500
            })
        }
    }


</script>
<style lang="scss" module>

</style>
