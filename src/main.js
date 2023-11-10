// 引入初始化样式
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 测试API
// import { getCategory } from './apis/testAPI'
// getCategory().then(res =>{
//     console.log(res)
// })


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 定义全局指令 

app.directive('img-lazy',{
    mounted(el,binding){
        // el:指令绑定的元素 img
        // binding：指令等于号后面绑定的表达式的值 imgurl
        console.log(el,binding.value);
    }
})



