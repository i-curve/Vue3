export default {
    storeMessage (state, data) {
        console.log("mutation")
        console.log(data.result)
        state.reason = data.reason
        state.result = data.result
        state.error_code = data.error_code
    }
}