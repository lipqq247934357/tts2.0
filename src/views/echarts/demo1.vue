<template>
    <div class="cotent-margin-adsdfgh">
        <div>
            <div id="de1" style="height: 400px;width: 400px;">
            </div>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts';
export default {
    mounted() {
        // 基于准备好的dom，初始化echarts实例
        let id = document.getElementById('de1');
        // @ts-ignore
        let myChart = echarts.init(id);
        // 绘制图表
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
}

</script>
<style lang="scss" module>

</style>
