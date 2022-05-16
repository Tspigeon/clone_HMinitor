<template>
    <div ref="chart" style="height:260px"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    name:'CommonCon',
    data() {
        return {
            
        }
    },
    mounted() {

        var myChart = echarts.init(this.$refs.chart);
        var option;

        option = {
        xAxis: {
            type: 'category',
            data: ['储氢罐', '燃料电池', '再循环泵', '加注口']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            data: [
                {
                    value:100,
                    itemStyle:{
                        color:'green',
                        // borderRadius:10,
                        opacity:0.7,
                        
                    },
                },
                {
                    value: 200,
                    itemStyle: {
                        color: '#a90000',
                    }
                },
                {
                    value: 150,
                    itemStyle: {
                        color: 'yellow',
                        opacity:0.7,
                    }
                },
                {
                    value: 80,
                    itemStyle: {
                        color: 'blue',
                        opacity:0.7,
                    }
                },
            ],
            type: 'bar',
            barWidth:50
            }
        ]
        };

        option && myChart.setOption(option);

            }
        }
</script>

<style>

</style>