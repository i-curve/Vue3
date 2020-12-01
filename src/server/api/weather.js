import { HTTP } from '@/lib/http'
import { KEY } from '@/config/index'
function Weather (type, data) {
    return new Promise((resolve, reject) => {
        var options = {
            url: "api",
            type: type,
            data: {
                key: KEY,
                city: data
            },
            success (ans) {
                resolve(ans)
            },
            error (ans) {
                reject(ans)
            }
        }
        HTTP(options)
    })
}

async function PostWeather (store, data) {
    let ans = null
    ans = await Weather('post', data)
    store.dispatch("storeMessage", ans.data)
}
async function GetWeather (store, data) {
    let ans = null
    ans = await Weather('get', data)
    store.dispatch("storeMessage", ans.data)
}
export {
    PostWeather,
    GetWeather
}