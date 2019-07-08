<template>
    <div class="cotent-margin-adsdfgh">

        <div :class="$style['fl']">
            <div :class="$style['title']">
                每日减重计算器
            </div>
            从多少到多少(斤)：
            <el-input placeholder="eg:xx-xx" style="width: 162px" v-model="amount"></el-input>
            <br>
            <br>
            开始时间：
            <el-date-picker
                    placeholder="开始日期(默认今天)"
                    type="date"
                    v-model="startTime"
                    value-format="yyyy-MM-dd"
            >
            </el-date-picker>
            <br>
            <br>
            模式：
            <el-radio label="1" v-model="radio">设置结束时间</el-radio>
            <el-radio label="2" v-model="radio">设置每日减重</el-radio>
            <br>
            <br>
            <div v-if="radio === '1'">
                结束时间：
                <el-date-picker
                        placeholder="结束日期"
                        type="date"
                        v-model="endTime"
                        value-format="yyyy-MM-dd"
                >
                </el-date-picker>
            </div>

            <div v-else>
                每日减重(g)：
                <el-input style="width: 201px" v-model="everyAmount"></el-input>
            </div>
            <br>
            <br>

            <div :class="$style['get-value']">
                <el-button @click="getVal">求值</el-button>
            </div>

        </div>
        <!--  历史记录  -->
        <history :historyData="historyData"></history>
    </div>
</template>
<script lang="ts">


    import {Component, Vue} from 'vue-property-decorator';
    import history from './weightHistory.vue'
    import {formatNumber} from '@/utils/utils.ts';
    import dayjs from 'dayjs';


    interface listInterface {
        key: string,
        nowWeight: number,
        wantedWeight: number,
        reduce: number,
        startTime: Date,
        endTime: Date,
        everyAmount: string
    }

    @Component({
        components: {
            history
        }
        // todo 切换的时候清空内容
    })
    export default class weightCount extends Vue {

        // init data
        startTime: Date = (function () {
            let data = new Date(new Date().toLocaleDateString());
            data.setHours(8, 0, 0, 0);
            return data
        })();
        everyAmount: string | undefined = '';
        endTime: Date | null = window.localStorage.getItem('endTime') ? new Date(String(window.localStorage.getItem('endTime'))) : null; //
        amount: string | null = window.localStorage.getItem('amount');
        radio: string = '1';
        historyData: Array<listInterface> = [];

        getVal() {
            window.dayjs = dayjs;
            if (!this.amount || !this.startTime) {
                this.$message.info('请输入正确参数!');
                return;
            }
            // get reduce value
            let arr = this.amount.split('-');
            if (arr.length !== 2) {
                this.$message.info('请输入正确的体重');
            }
            let weight = Number(arr[0]) - Number(arr[1]);


            // get date value
            let startTime = new Date(this.startTime);

            let endTime = null;
            let date;
            if (this.radio === '1') { // 通过结束时间计算值
                if (!this.endTime) {
                    this.$message.info('请输入结束时间!');
                    return;
                }
                endTime = new Date(this.endTime);
                date = (Number(endTime) - Number(startTime)) / (1000 * 60 * 60 * 24);
                // calc
                let val: number = (weight / date) * 500;
                this.everyAmount = formatNumber(String(val), 2);
            } else {
                debugger;
                if (!this.everyAmount) {
                    this.$message.info('请输入每日减重!');
                    return;
                }
                date = Math.ceil(weight / Number(this.everyAmount) * 500);
                let endTime = dayjs(this.startTime);
                endTime = endTime.add(date, 'day');
                this.endTime = endTime.toDate();
            }

            // set localStorage
            window.localStorage.setItem('endTime', String(this.endTime));
            window.localStorage.setItem('amount', String(this.amount));


            // push list
            this.pushData({
                nowWeight: Number(arr[0]),
                wantedWeight: Number(arr[1]),
                reduce: weight,
                startTime: this.startTime,
                endTime: this.endTime,
                key: '',
                everyAmount: this.everyAmount || ''
            })

            this.$message.info(`到${dayjs(this.endTime).format("YYYY年MM月D日")},每天需要减重${this.everyAmount}g`)
        }


        pushData(obj: listInterface) {
            obj.key = '' + obj.nowWeight + obj.wantedWeight + obj.reduce + obj.startTime + obj.endTime;
            if (!this.haveKey(obj.key)) {
                this.historyData.push(obj);
                if (this.historyData.length > 8) {
                    this.historyData.splice(0, 1);
                }
            }
        }

        haveKey(key: string) {
            for (let item of this.historyData) {
                if (item.key === key)
                    return true;
            }
            return false;
        }

    }


</script>
<style lang="scss" module>

    .fl {
        float: left;
    }

    .title {
        text-align: center;
        width: 340px;
        margin-bottom: 24px;
    }

    .get-value {
        text-align: center;
        margin-top: 20px;
        width: 340px
    }

</style>
