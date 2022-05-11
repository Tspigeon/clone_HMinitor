<template>
    <div> 
        <header class="header"><h1>车载氢浓度实时监测系统</h1></header>
        <div class="showTime">{{myTime}}</div>
    </div>
</template>

<script>
export default {
    name:'CommonHeader',
    data(){
        return{
            myTime:''
        }
    },
    watch:{
        'myTime':{
            immediate:true,
            handler(){
                setInterval(()=>{
                let dt = new Date();
                var y = dt.getFullYear();
                var mt = dt.getMonth() + 1;
                var day = dt.getDate();
                var h = dt.getHours();
                var m = dt.getMinutes();
                var s = dt.getSeconds();
                this.myTime = "当前时间" + y + "年"+mt+"月"+day+"日-"+h+"时"+m+"分"+s+"秒";
            },1000)
            }
        }
    }
}
</script>

<style scoped>
    header{
        height: 100px;
        background:url(../../../../public/img/head_bg.png) no-repeat top center;
        background-size: 100% 100%;
    }
    h1{
        font-size: 38px;
        color: #fff;
        text-align: center;
        line-height: 80px;
    }
    .showTime{
        position: absolute;
        top:0;
        right: 30px;
        line-height: 75px;
        color:rgba(255,255,255,0.7);
        font-size: 20px;
    }
</style>