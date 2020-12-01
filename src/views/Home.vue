<template>
    <div class="message-input">
        <input placeholder="请输入所在城市" v-model="site">
        <button @click="getMessage">查询</button>
    </div>
</template>
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { PostWeather, GetWeather } from '@/server/api/weather'

export default {
    name: "pageMain",
    setup () {
        const site = ref("北京")
        const store = useStore()
        const getMessage = () => {
            PostWeather(store, site.value)
        }
        return {
            site,
            getMessage
        }
    }
}
</script>
<style scoped>
.message-input {
    padding-top: 30px;
    text-align: center;
}
/* input, button {
    height: 20px;
} */
</style>