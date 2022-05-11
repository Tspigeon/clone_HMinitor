<template>
    <div id="he-plugin-standard"></div>
</template>

<script>
export default {
    name:"CommonWeather",
    created(){
        window.WIDGET = {
        "CONFIG": {
                "layout": "1",
                "width": "500",
                "height": "223",
                "background": "1",
                "dataColor": "FFFFFF",
                "key": "93b1d17f7f1c47e5a7d9f88b5e9dff48"
            }
        };
        (function(d){
                var c = d.createElement('link')
                c.rel = 'stylesheet';
                c.href = "https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0";
                var s = d.createElement('script');
                s.src = "https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0";
                var sn = d.getElementsByTagName("script")[0];
                sn.parentNode.insertBefore(c,sn)
                sn.parentNode.insertBefore(s,sn)
            }(document));
    }
    
}
</script>

<style>

</style>