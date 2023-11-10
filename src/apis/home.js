// 获取homeBanner的轮播图数据
import httpIntance  from '@/utils/http'
export function getBannerAPI(){
    return httpIntance(
        {url:'/home/banner'}
    )
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return httpIntance({
      url:'/home/new'
    })
  }