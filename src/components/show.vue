<template>
    <div class="data-show"
    v-if="error_code !== -1"
    >
        <div v-if="error_code===0">
            {{result.city}}
            {{result.realtime.temperature}}℃&nbsp;
            
        </div>
        <div>
            {{result.realtime.info}}
            {{result.realtime.direct}}
            {{result.realtime.power}}
        </div>
        <div v-if="error_code!==0">
            {{reason}}
        </div>
    </div>
</template>
<script>
import { computed, toRef, toRefs, watch } from 'vue'
import { useStore } from 'vuex'
export default {
    name: "dataShow",
    setup () {
        const store = useStore()
        watch(()=>{
            return store.state
        },(value)=>{
            console.log(store.state.result)
        })
        return {
            error_code: computed(() => store.state.error_code),
            reason: computed(() => store.state.reason),
            result: computed(() => store.state.result),
        }
    }
}
</script>
<style scoped>
.data-show {
    text-align: center;
    padding-top: 30px;
}
</style>