<template>
    <div class="warning" :style="{'background':`linear-gradient(to right,${color},transparent)`}">
        <div v-show="warnData == '0'" style="
        font-size:20px;
        " >当前车辆状况良好</div>
        <div v-show="warnData == '1'" style="font-size:20px;">当前行车状况危险，建议立马停车</div>
    </div>
</template>

<script>
export default {
    name:'Warning',
    data() {
        return {
            warnData:'0',
            color:'#00FFFF'
        }
    },
    watch:{
            warnData(){
                    if(this.warnData==='0'){
                    this.color='#00ff7f'
                    }
                    if(this.warnData==='1'){
                        this.color="#f40"
                    }
            }
        
    },
}
</script>

<style>
    .warning{
        position: relative;
        width: 700px;
        height: 200px;
        margin-left: 50%;
        text-align: center;
        line-height:200px;
    }
</style>