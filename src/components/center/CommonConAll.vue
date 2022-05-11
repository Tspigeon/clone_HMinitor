<template>
    <div ref="chart" style="height:300px;background-color:#0C1250"></div>
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
        var randomData = [];
        
        for(var i = 0; i<30; i++){
            date.push('第' + (i+1) + '天');
            randomData.push(Math.floor(Math.random()*100));
        }
        
        // 指定图表的配置项和数据
        var option = {
            xAxis: {
                type: 'category',
                data: date
            },
            yAxis: {
                type: 'value',
                axisLine:{
                            lineStyle:{
                                color:'#7FFF00',
                                width:1,//这里是为了突出显示加上的
                            }
                }
            },
            grid: {
                        top:'5%',
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
            series: [{
                data: randomData,
                type: 'bar'
            }]
        };
        
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);  
        
        var len = date.length;
        
        setInterval(function(){
            randomData.push(Math.floor(Math.random()*100));
            randomData.shift();
            date.push(len++);
            date.shift();
            myChart.setOption({
                xAxis: {
                    data: date
                },
                series: [{
                    data: randomData,
                    itemStyle:{
                        color:"#fff"
                    },
                }]
            }); 
        }, 2000)
            },
}
</script>

<style>

</style>