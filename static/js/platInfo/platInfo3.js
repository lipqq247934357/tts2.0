//立即投资
function toProjectList() {
    var device = $("#device").val();
    if (device == 2 || device == 1) {
        try {
            _LZLH.toProList("");
        } catch (e) {
            alert(e);
        }
    } else {
        window.location.href = customerPath + "/touch/project";
    }
}

$(function () {
    //运营报告
    TouchSlide({
        slideCell: "#picScroll",
        titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        autoPage: true, //自动分页
        pnLoop: "false", // 前后按钮不循环
        autoPlay: false
    });

//投资人投资金额分布
    var investAmountColor = ["#5dea8b", "#538efc", "#bc6cfe", "#ffb966", "#7972fd"];
    var investAmountChart = echarts.init(document.getElementById("investAmount"));
    var investAmountTitle = function (data) {
        var res = [];
        return res;
    }

    var investAmountData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            res.push({
                value: data[i].amountCount,
                name: ((data[i].y) * 100).toFixed(2) + "%" + "",
                itemStyle: {normal: {color: investAmountColor[i]}}
            });
        }
        return res;
    };

    investAmountOption = {
        legend: {
            orient: 'vertical',
            x: 'right',
            y: 'center',
            left: '10%',
            top: '10%',
            align: 'right',
            itemWidth: '15',
            selectedMode: false,
            data: investAmountTitle(info.investAmount)
        },
        series: [
            {
                type: 'pie',
                silent: true,
                hoverAnimation: false,
                legendHoverLink: false,
                center: ['50%', '50%'],
                radius: ['35%', '60%'],
                label: {
                    normal: {
                        show: true,
                        formatter: '{d}%'
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 8,
                        length2: 6
                    }
                },
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 12
                        }
                    }
                },
                data: investAmountData(info.investAmount)
            }
        ]
    };
    investAmountChart.setOption(investAmountOption);

//区域
    var investProvinceChart = echarts.init(document.getElementById("investProvince"));
    var investProvinceData = function (data) {
        var res = [];
        for (var i = 0; i < Math.min(data.length, 10); i++) {//仅显示前10名数据
            res.push({value: data[i].y, name: data[i].province});
        }
        return res;
    };
    investProvinceOption = {
        visualMap: {
            left: 'left',
            top: 'bottom',
            show: false,
            color: ['#57c5ff', '#5691f9']
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params, ticket, callback) {
                var $value = params.value;
                var res = '';

                if (!isNaN($value)) {
                    res = TT.myMul(params.value, 100) + "%";
                }
                callback(ticket, res);
                return res;
            }
        },
        series: [
            {
                type: 'map',
                left: '15%',
                top: '10%',
                mapType: 'china',
                label: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#2e3960'
                    },
                    emphasis: {
                        color: '#57c500',
                        label: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                },
                data: investProvinceData(info.investProvince)
            }
        ],
    };
    investProvinceChart.setOption(investProvinceOption);

    //每月投资额
    var monthAmt = echarts.init(document.getElementById("monthAmt"));
    var monthInvestTitle = function (data) {
        var res = [];
        var l= data.length;
        var i = l >5 ? l-5:0;
        for (; i < l; i++) {
            res.push(data[i].date);
        }
        return res;
    };
    var monthInvest = function (data) {
        var res = [];
        var l= data.length;
        var i = l >5 ? l-5:0;
        for (; i < l; i++) {
            res.push(data[i].invest);
        }
        return res;
    };
    var monthAmtOption = {
        backgroundColor: "rgba(40,50,83)",
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            show: true,
            borderColor: '#283253',
            backgroundColor: '#283253',
            x:'15%'
        },
        xAxis: {
            offset: 5,
            borderWidth: 0,
            type: 'category',
            boundaryGap: false,
            data: monthInvestTitle(info.monthInvest),
            axisLine: {
                lineStyle: {
                    color: '#3a487a'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                "show": true,
                "textStyle": {
                    "color": "#fc6190"
                }
            }, boundaryGap: ['10%', '10%'],
        },
        yAxis: {
            offset: 5,
            type: 'value',
            axisLabel: {
                formatter: function (a) {
                    return a / 100000000;
                }
            },
            axisPointer: {
                snap: true
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#547bc9'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: ['#42528c', '#42528c'],
                    type: 'dotted'
                }
            },
        },
        series: [
            {
                type: 'line',
                smooth: true,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: function (params) {
                            return Math.round(parseFloat(params.value) / 100000) / 1000 + "亿";
                        },
                        textStyle: {
                            color: '#ccc'
                        }

                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: "1",
                        color:'#e07a02',
                        borderColor:'#fefbf6'
                    }
                },
                lineStyle: {
                    normal: {
                        width: "2",
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: '#e17400' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#ffe47a' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                    }
                },
                "symbolSize": function (value,params) {
                    if(params.name == info.monthInvest[info.monthInvest.length-1].date){
                        return 6;
                    }else{
                        return 0.0000000000000000000000000001;
                    }
                },
                "symbol": "circle",
                hoverAnimation: false,
                data: monthInvest(info.monthInvest)
            }
        ]
    };
    monthAmt.setOption(monthAmtOption);
});