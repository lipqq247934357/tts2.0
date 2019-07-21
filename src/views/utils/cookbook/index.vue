<template>
    <div>
        <div :class="$style.title">
            推荐食谱
        </div>
        <div :class="$style.content">
            <div :class="$style.header">
                <div>
                    时间
                </div>
                <div>
                    星期一
                </div>
                <div>
                    星期二
                </div>
                <div>
                    星期三
                </div>
                <div>
                    星期四
                </div>
                <div>
                    星期五
                </div>
                <div>
                    星期六
                </div>
                <div>
                    星期日
                </div>
            </div>
            <div :class="$style.body">
                <div>
                    早上
                </div>
                <div>
                    全麦面包 2片
                    脱脂牛奶一瓶
                </div>
                <div>
                    星期二
                </div>
                <div>
                    星期三
                </div>
                <div>
                    星期四
                </div>
                <div>
                    星期五
                </div>
                <div>
                    星期六
                </div>
                <div>
                    星期日
                </div>
            </div>
            <div :class="$style.body">
                <div>
                    中午
                </div>
                <div>
                    焦耳外卖或者
                    和番丼饭
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div :class="$style.body">
                <div>
                    下午
                </div>
                <div>
                    boom外卖
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div :class="$style.body">
                <div>
                    加餐
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>

        </div>

        <pic style="margin-top: 400px;" ></pic>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import pic from './pic.vue';

    @Component({
        components: {pic}
    })
    export default class cookBook extends Vue {

        data: Object = {};
    }
</script>
<style lang="scss" module>

    .title {
        margin: 30px auto 0;
        text-align: center;
        font-weight: 700;
        font-size: 25px;
    }

    .content {
        width: 60%;
        margin: 40px auto 0;
        text-align: center;
    }

    .header {
        display: flex;
        div {
            width: 12.5%;
            text-align: center;
            border: 1px solid #ccc;
            box-sizing: border-box;
            height: 40px;
            line-height: 40px;
            background: #f5f5f5;
        }
    }

    .body {
        display: flex;
        div {
            width: 12.5%;
            text-align: center;
            border: 1px solid #ccc;
            box-sizing: border-box;
            min-height: 40px;
            line-height: 40px;
        }
    }

</style>
