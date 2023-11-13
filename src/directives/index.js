// 定义懒加载插件

// vueuse视口显示判断
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin={
    install(app){
        // 懒加载指令逻辑1
        // 定义全局指令 

        app.directive('img-lazy',{
                mounted(el,binding){
                // el:指令绑定的元素 img
                // binding：指令等于号后面绑定的表达式的值 imgurl
                console.log(el,binding.value);

                // 视口显示判断
                // el为元素
                // isIntersecting为布尔值,是否视图显示
                const{stop} = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                    console.log(isIntersecting);
                    if(isIntersecting){
                        // 加载图片
                        el.src = binding.value;
                        // 内存优化
                        stop();
                        }
                    }
                )
            }
        })

    }
}