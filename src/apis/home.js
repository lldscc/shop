// home页相关接口数据


import httpInstance from '@/utils/http'

/**
 * @description: 获取轮播图的数据,distributionSite可传参，1为首页，2为分类商品页） 默认是1
 * @param {*}
 * @return {*}
 */
export function getBannerAPI(param = {}) {
  // 默认为1
  const { distributionSite = '1' } = param
  return httpInstance(
    {
      url: '/home/banner',
      params: {
        distributionSite
      }

    }
  )
}

/**
 * @description: 获取新鲜好物模块的数据
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  })
}

/**
 * @description: 获取人气推荐模块的数据
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return httpInstance({
    url: '/home/hot'
  })
};


/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}