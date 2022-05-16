<template>
    <div>
        <div ref="chart" style="height:260px" @click="toPeople"></div>
        <img src="../../../public/img/bg3.png" alt="" id="bg_img" style="display:none">
        <!-- <img src="../../../public/img/round1" alt="" style="display:none" ref="round1"> -->
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name:'CommonPeople',
    data(){
        return{
            src:"../../../public/img/round1"
        }
    },
    mounted(){
        var value = 0.8, // 值，0~1之间
        startAngle = 215, // 开始角度
        endAngle = -35, // 结束角度
        splitCount = 60, // 刻度数量
        pointerAngle = (startAngle - endAngle) * (1 - value) + endAngle; // 当前指针（值）角度
        var myChart = echarts.init(this.$refs.chart);
        var option = {
            series: [
            {
                type: 'gauge',
                radius: '90%',
                startAngle: pointerAngle,
                endAngle: endAngle,
                splitNumber: 1,
                axisLine: {
                show: false,
                lineStyle: {
                    width: 3,
                    opacity: 0
                }
                },
                title: { show: false },
                detail: { show: false },
                splitLine: { show: false },
                axisTick: {
                length: 27,
                splitNumber: Math.ceil((1 - value) * splitCount),
                lineStyle: {
                    color: '#001242',
                    width: 3
                }
                },
                axisLabel: { show: false },
                pointer: { show: false },
                itemStyle: {},
                markPoint: {
                    animation: false,
                    silent: false,
                    data: [
                        {
                        symbol: 'image://' + this.src,
                        x: '50%',
                        y: '50%',
                        symbolSize: 280,
                        itemStyle: {
                            borderWidth: 3
                        }
                        },
                        {
                        symbol: 'circle',
                        symbolSize: 200
                        }
                    ]
                },
                data: [
                {
                    value: value,
                    name: 'test gauge'
                }
                ]
            },
            {
                type: 'gauge',
                radius: '90%',
                startAngle: startAngle,
                endAngle: pointerAngle,
                splitNumber: 1,
                axisLine: {
                show: false,
                lineStyle: {
                    width: 3,
                    opacity: 0
                }
                },
                title: { show: false },
                detail: { show: false },
                splitLine: { show: false },
                axisTick: {
                length: 27,
                splitNumber: Math.ceil(value * splitCount),
                lineStyle: {
                    color: {
                    image: document.getElementById('bg_img'),
                    repeat: 'no-repeat'
                    },
                    width: 3
                }
                },
                axisLabel: { show: false },
                pointer: { show: false },
                itemStyle: {},
                data: [
                {
                    value: value,
                    name: 'test gauge'
                }]
            },
            {
                type: 'gauge',
                radius: '90%',
                startAngle: pointerAngle,
                endAngle: pointerAngle,
                splitNumber: 1,
                axisLine: {
                show: false,
                lineStyle: {
                    width: 3,
                    opacity: 0
                }
                },
                title: { show: false },
                detail: { show: false },
                splitLine: { show: false },
                axisTick: {
                length: 20,
                splitNumber: 1,
                lineStyle: {
                    color: {
                    image: document.getElementById('bg_img'),
                    repeat: 'no-repeat'
                    },
                    width: 3
                }
                },
                axisLabel: { show: false },
                pointer: { show: false },
                itemStyle: {},
                detail:{
                    textStyle: {
                            color: '#5bdbff',
                            fontSize:30,
                            offsetCenter: ['0','80%']
                    },
                    formatter:function(value){
                        return value*100 + '%'
                    }
                },
                data: [
                {
                    value: value,
                    name: 'test gauge'
                }
                ]
            }
            ]
        };
        myChart.setOption(option);
    }
}
</script>

<style>

</style>