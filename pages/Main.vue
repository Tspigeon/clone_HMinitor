<template>
    <div>
        <!-- <common-header></common-header> -->
        <div style="height:50px"></div>
        <router-view></router-view>
    </div>   
</template>

<script>
import CommonHeader from '../src/components/center/head/CommonHeader.vue'
    export default {
        name:'Main',
        components:{
            CommonHeader
        },
        // mounted() {
        //     this.$router.push({
        //         name:'home'
        //     })
        // },
    }
</script>

<style>

</style>