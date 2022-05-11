<template>
    <div ref="chart" style="height:240px;"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    name:'CommonConAll',
    data() {
        return {
            
        }
    },
    mounted() {
        var myChart = echarts.init(this.$refs.chart);
        var date = [];
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];
        
        for(var i = 0; i<2; i++){
            date.push('第' + (i+1) + '天');
            data1.push(Math.floor(Math.random()*100));
            data2.push(Math.floor(Math.random()*100));
            data3.push(Math.floor(Math.random()*100));
            data4.push(Math.floor(Math.random()*100));
        }
        
        // 指定图表的配置项和数据
        var option = {
            color:[
                '#000000',
                '#FF0000',
                '#1E90FF',
                '#00FF00'
            ],
            tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        top:'25px',
                        data: ['储氢罐', '燃料电池', '再循环泵','加注口'],
                        textStyle:{
                            color:'#fff'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: date
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '储氢罐',
                            type: 'bar',
                            data: data1
                        },
                        {
                            name: '燃料电池',
                            type: 'bar',
                            data: data2
                        },
                        {
                            name: '再循环泵',
                            type: 'bar',
                            data: data3
                        },
                        {
                            name: '加注口',
                            type: 'bar',
                            data: data4
                        }
                    ],
                title:{
                    x:'center',
                    text:'车载氢部件浓度监测',
                    textStyle: {
                        fontSize: '18px',
                        fontWeight: 'bolder',
                        color: '#fff'          // 主标题文字颜色
                    },
                }
            };
        
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);  
        
        var len = date.length;
        
        setInterval(function(){
            function change(data){
                data.push(Math.floor(Math.random()*100));
                data.shift();
            }
            change(data1)
            change(data2)
            change(data3)
            change(data4)
            
            date.push(len++);
            date.shift();
            myChart.setOption({
                xAxis: {
                    data: date
                },
                series: [{
                            name: '储氢罐',
                            type: 'bar',
                            data: data1
                        },
                        {
                            name: '燃料电池',
                            type: 'bar',
                            data: data2
                        },
                        {
                            name: '再循环泵',
                            type: 'bar',
                            data: data3
                        },
                        {
                            name: '加注口',
                            type: 'bar',
                            data: data4
                        }]
            }); 
        }, 2000)
            },
}
</script>

<style>

</style>