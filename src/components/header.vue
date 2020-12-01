<template>
    <div class="header">
        <span>天气信息</span>
    </div>
</template>
<script>
export default {
    name: "NavHeader"
}
</script>
<style scoped>
.header {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 60px;
    background-color: black;;
    text-align: center;
}
span {
    position: relative; 
    color: white;
    /* top: 50%; */
    /* transform: translateY(-50%); */
    top: 22px;
}
</style>