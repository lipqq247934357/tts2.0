<template>
    <div class="cotent-margin-adsdfgh">

       <div style="float: left;">
           <div style="text-align: center; width: 340px;margin-bottom: 24px;">
               每日减重计算器
           </div>

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
           结束时间：
           <el-date-picker
                   placeholder="结束日期"
                   type="date"
                   v-model="endTime"
                   value-format="yyyy-MM-dd"
           >
           </el-date-picker>
           <br>
           <br>
           从多少到多少(斤)：
           <el-input placeholder="eg:xx-xx" style="width: 162px" v-model="amount"></el-input>
           <br>
           <br>
           <div style="text-align: center;margin-top: 20px; width: 340px;">
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
        },
    })
    export default class weightCount extends Vue {

        // init data
        startTime: Date = (function () {
            let data = new Date(new Date().toLocaleDateString());
            data.setHours(8, 0, 0, 0);
            return data
        })();
        endTime: Date | null = window.localStorage.getItem('endTime') ? new Date(String(window.localStorage.getItem('endTime'))) : null; //
        amount: string | null = window.localStorage.getItem('amount');
        historyData: Array<listInterface> = [];

        getVal() {
            if (!this.amount || !this.startTime || !this.endTime) {
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
            let endTime = new Date(this.endTime);
            let date = Number(endTime) - Number(startTime);
            if(date <= 0){
                this.$message.info('结束时间不能小于等于起始日期');
            }
            date = (Number(endTime) - Number(startTime)) / (1000 * 60 * 60 * 24);

            // set localStorage
            window.localStorage.setItem('endTime', String(this.endTime));
            window.localStorage.setItem('amount', String(this.amount));

            // calc
            let val: number = (weight / date) * 500;
            let formatVal = formatNumber(String(val), 2);

            // push list
            this.pushData({
                nowWeight: Number(arr[0]),
                wantedWeight: Number(arr[1]),
                reduce: weight,
                startTime: this.startTime,
                endTime: this.endTime,
                key: '',
                everyAmount: formatVal || ''
            })

            this.$message.info(`每天需要减重${formatVal}g`)
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
<<<<<<< HEAD


=======
>>>>>>> 8feeb34b044f7128069c0626b3b1b5e3c3a512bd
</style>
