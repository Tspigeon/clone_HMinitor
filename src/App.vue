<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'App',
    }
</script>

<style>
    html{
        background: url(../public/img/bg.jpg) no-repeat top center;
    }
    *{
        margin: 0;
        border: 0;
    }
    body{
        line-height: 1.15;
    }
</style>