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
        background: url(../public/img/bg.jpg);
        background-size: cover;
    }
    *{
        margin: 0;
        border: 0;
    }
    body{
        line-height: 1.15;
    }
</style>