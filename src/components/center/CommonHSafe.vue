<template>
    <div ref="chart" style="height:240px;width:600px;margin-left: 15%;background-color:#0C1250"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    name:'CommonHSafe',
    data() {
        return {
            
        }
    },
    mounted() {
        var myChart = echarts.init(this.$refs.chart);
            var date = [];
            var randomData = [];
            
            for(var i = 0; i<30; i++){
                date.push('第' + (i+1) + '天');
                randomData.push(Math.floor(Math.random()*100));
            }
            
            // 指定图表的配置项和数据
            var option = {
                legend:{
                    top:'0%'
                },
                grid:{
                    top:'0%',
                    left:'10%'
                },
                xAxis: {
                    type: 'category',
                    data: date
                },
                yAxis: {
                    type: 'value',
                },
                series: [{
                    data: randomData,
                    // type: 'line'
                }]
            };
            
            // 使用刚指定的配置项和数据显示图表。
            // myChart.setOption(option);	
            
            var len = date.length;
            
            setInterval(function(){
                randomData.push(Math.floor(Math.random()*100));
                randomData.shift();
                date.push(len++);
                date.shift();
                myChart.setOption({
                    title:{
                    x:'center',
                    y:'0px',
                    text:'历史车载氢部件安全度',
                    textStyle: {
                        fontSize: '18px',
                        fontWeight: 'bolder',
                        color: '#fff',          // 主标题文字颜色
                        
                    },
                    },
                    xAxis: {
                        data: date
                    },
                    grid: {
                        top:'20%',
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    series: [{
                        data: randomData,
                                type: 'line',
                                smooth: true,
                                symbol: 'circle',
                                symbolSize: 5,
                                showSymbol: false,
                                lineStyle: {
                                    
                                    normal: {
                                        color: '#7CFC00',
                                        width: 2
                                    }
                                },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(124,252,0)'
                                }, {
                                    offset: 0.8,
                                    color: 'rgba(124,252,0, 0.1)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                            }
                        },
                            itemStyle: {
                            normal: {
                                color: '#0184d5',
                                borderColor: 'rgba(124,252,0,0.1)',
                                borderWidth: 12
                            }
                    },
                    }]
                });	
            }, 2000)
        myChart.setOption(option);
    },
}
</script>

<style>

</style>