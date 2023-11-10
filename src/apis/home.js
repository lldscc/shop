
import httpInstance  from '@/utils/http'

/**
 * @description: 获取轮播图的数据
 * @param {*}
 * @return {*}
 */
export function getBannerAPI(){
    return httpInstance(
        {url:'/home/banner'}
    )
}

/**
 * @description: 获取新鲜好物模块的数据
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return httpInstance({
      url:'/home/new'
    })
  }

/**
 * @description: 获取人气推荐模块的数据
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return httpInstance({
    url:'/home/hot'
  })
};