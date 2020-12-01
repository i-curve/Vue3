export default {
    storeMessage (store, data) {
        console.log('action')
        store.commit('storeMessage', data)
    }
}