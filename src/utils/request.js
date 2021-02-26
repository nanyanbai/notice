import axios from 'axios'
import { Loading, Message } from  'element-ui'

//loading加载对象
const loading = { 
    loadingInstance: null,
    //打开加载
    open(){
        // 如果实例 为空，则创建
        if(this.loadingInstance===null){ 
            this.loadingInstance=Loading.service({
                text:'加载中...', //加载图标下的文字
                spinner: 'el-icon-loading', //加载图标
                background:'rgba(0, 0, 0, 0.5)', //背景色
                customClass:'loading' //自定义样式的类名
            })
        }
    },
    //关闭加载
    close(){
      // 不为空时, 则关闭加载窗口
        if(this.loadingInstance !== null) {
            this.loadingInstance.close()
        }
        this.loadingInstance = null
    }
}


axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const request = axios.create({
    baseURL: '/api',
    timeout: 10000
})


// 请求拦截器
request.interceptors.request.use(function (config) {
    //打开加载窗口
    loading.open() 
    return config
}, function (err) {
    return Promise.reject(err)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
    //关闭加载窗口
    loading.close() 
    //错误提示
    if(response.status===500){
        Message({  //elemen组件库中的提示组件
            message:'后台服务器错误',
            type:'error',
            duration:5000
        })
        return Promise.reject() //要返回一个promise对象出去
    }
    if(response.status===404){
        Message({  
            message:'接口地址错误',
            type:'error',
            duration:5000
        })
        return Promise.reject()
    }

    //成功返回
    if (response.status===200) {
        return response.data
    }
}, function (err) {
    return Promise.reject(err)
})

//导出请求方法
export  default  request