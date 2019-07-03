<template>
    <div class="cotent-margin-adsdfgh">

        开始时间：
        <el-date-picker
                placeholder="开始日期(默认今天)"
                type="date"
                v-model="value1"
                value-format="yyyy-MM-dd"
        >
        </el-date-picker>
        <br>
        <br>
        结束时间：
        <el-date-picker
                placeholder="结束日期"
                type="date"
                v-model="value2"
                value-format="yyyy-MM-dd"
        >
        </el-date-picker>
        <br>
        <br>
        从多少到多少(斤)：
        <el-input placeholder="eg:xx-xx" style="width: 200px" v-model="amount"></el-input>
        <br>
        <br>

        <el-button @click="getVal">求值</el-button>


    </div>
</template>
<script lang="ts">


    import {Component, Vue} from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import {formatNumber} from '@/utils/utils.ts';

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class Home extends Vue {

        value1: Date = new Date();
        value2: Date | null = window.localStorage.getItem('endTime') ? new Date(String(window.localStorage.getItem('endTime'))) : null; //
        amount: string | null = window.localStorage.getItem('amount');

        getVal() {
            if (!this.amount || !this.value1 || !this.value2) {
                this.$message.info('请输入正确参数!');
                return;
            }
            let arr = this.amount.split('-');
            if (arr.length !== 2) {
                this.$message.info('请输入正确的体重');
            }
            let weight = Number(arr[0]) - Number(arr[1]);


            let val1 = new Date(this.value1);
            let val2 = new Date(this.value2);
            let date = (Number(val2) - Number(val1)) / (1000 * 60 * 60 * 24);

            window.localStorage.setItem('endTime', String(this.value2));
            window.localStorage.setItem('amount', String(this.amount));

            let val: number = (weight / date) * 500;
            this.$message.info(`每天需要减重${formatNumber(String(val), 2)}g`)
        }
    }


</script>
<style lang="scss" module>


</style>
