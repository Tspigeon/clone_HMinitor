<template>
        <div class="main-box">
            <!-- 左侧 -->
            <div class="column">
                <div class="panel">
                    <common-weather></common-weather>
                    <div class="panel-footer"></div>
                </div>
                <div class="panel">
                    <h2></h2>
                    <!-- <common-battery></common-battery> -->
                    <img src="../../public/img/储氢罐.png" style="height:300px;margin-left:90px">
                    <div class="panel-footer"></div>
                </div>
                <div  style="margin-top:30px;">
                    <img src="../../public/img/bomb1.png" style="margin-left:150px;margin-top:100px">
                </div>
            </div>
            <!-- 中间 -->
            <div class="column">
                <div class="head">车载氢浓度实时监测系统</div>
                <div class="warn">
                    <Warning/>
                </div>
                <div class="panel" style="height:300px;margin-top:46px;background-color:#0C1250;padding: 0px 0px 40px;">
                    <h2>氢气浓度检测</h2>
                    <common-con-all></common-con-all>
                    <div class="panel-footer"></div>
                </div>
                <div class="panel" style="margin-top:30px;">
                    <!-- <h2>历史车载氢部件安全度</h2> -->
                    <common-Tnt></common-Tnt>
                    <div class="panel-footer"></div>
                </div>   
            </div>
            <!-- 右侧 -->
            <div class="column">
                <div class="panel" style="margin-top:30px">
                    <!-- <h2>车载氢部件浓度监测</h2> -->
                    <common-part></common-part>
                    <div class="panel-footer"></div>
                </div>
                <div class="panel" style="margin-top:30px">
                    <h2>整体安全度</h2>
                    <common-all></common-all>
                    <div class="panel-footer"></div>
                </div>
                <div class="panel" style="margin-top:30px">
                    <h2>车载氢部件安全度</h2>
                    <common-people></common-people>
                    <div class="panel-footer"></div>
                </div>
               
                <!-- <div class="panel" style="margin-top:30px">
                    <h2>车辆安全度</h2>
                    <common-car></common-car>
                    <div class="panel-footer"></div>
                </div> -->
            </div>
        </div>
</template>

<script>
    import CommonHeader from '../../src/components/center/head/CommonHeader.vue'
    import CommonWeather from '../../src/components/left/CommonWeather.vue'
    import CommonPeople from '../../src/components/left/CommonPeople.vue'
    import CommonAll from '../../src/components/right/CommonAll.vue'
    import Warning from '../../src/components/center/Warning.vue'
    import CommonCon from '../../src/components/right/CommonCon.vue'
    import CommonTnt from '../../src/components/center/CommonHSafe.vue'
    import CommonBattery from '../../src/components/left/CommonBattery.vue'
    import CommonConAll from '../../src/components/center/CommonConAll.vue'
    import CommonPart from '../../src/components/right/CommonPart.vue'

    export default {
        name:'Home',
        components:{
            CommonHeader,
            CommonWeather,
            CommonPeople,
            CommonAll,
            Warning,
            CommonCon,
            CommonTnt,
            CommonBattery,
            CommonConAll,
            CommonPart
        }
    }
</script>    

<style scoped>
    .main-box{
        display: flex;
        min-width: 1024px;
        max-width: 2650px;
        margin: 0 auto;
        padding: 10px 10px 0;
        height: 20px;
        justify-content: space-around;
    }
    .main-box .column:nth-child(1){
        /* height: 223.188px;
        width: 720px; */
        flex: 3;
    }
    .main-box .column:nth-child(2){
        /* height: 223.188px;
        width: 720px;*/
        flex: 5;
        margin: 0 10px 15px;
    }     
    .main-box .column:nth-child(3){
        /* height: 223.188px;
        width: 720px; */
        flex: 3;
    } 
    .panel{
        position: relative;
        height: 310px;
        /* border: 1px solid rgba(99, 165, 145, 0.17); */
        background: url(../../public/img/line1.png);
        padding: 0 15px 40px;
        margin-bottom: 15px;
    }
    /* .panel:nth-child(1){
        margin-bottom: 0px;
        padding: 0px;
    } */
    /* .panel::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-left:2px solid #02a6b5;
        border-top:2px solid #02a6b5;
    }
    .panel::after{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-right:2px solid #02a6b5;
        border-top:2px solid #02a6b5;
    }
    .panel-footer{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    .panel-footer::before{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-left:2px solid #02a6b5;
        border-bottom:2px solid #02a6b5;
    }
    .panel-footer::after{
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-right:2px solid #02a6b5;
        border-bottom:2px solid #02a6b5;
    } */
    .panel h2{
        height: 48px;
        color:#fff;
        line-height: 48px;
        text-align: center;
        /* font-size: 18px; */
        font-weight: bolder;
    }
    .panel .chart{
        height: 240px;
    }
    .warn{
        position: relative;
        width: 500px;

    }
    .bomb{
        background:no-repeat;
        background-size: 100%;

    }
    .head{
        color: #fff;
        text-align: center;
        font-size: 50px;
    }
</style>