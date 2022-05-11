<template>
    <div ref="chart13" style="height:240px"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name:'CommonAll',
    mounted(){
        const myChart = echarts.init(this.$refs.chart13);
        var option = {
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            series: [
                {
                name: 'Pressure',
                type: 'gauge',
                progress: {
                    show: true
                },
                detail: {
                    valueAnimation: true,
                    formatter: '{value}'
                },
                data: [
                    {
                    value: 50,
                    }
                ],
                itemStyle:{
                    color:'#7FFF00'
                }
                }
            ],
            };
            myChart.setOption(option)
            setInterval(()=>{
                myChart.setOption({
                    series:[{
                        data:[{value:parseInt(Math.random()*100)}]
                    }]
                })
            },3000)
    }
    
}
</script>

<style>

</style>