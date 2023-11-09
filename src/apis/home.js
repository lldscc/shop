// 获取homeBanner的轮播图数据
import httpIntance  from '@/utils/http'
export function getBannerAPI(){
    return httpIntance(
        {url:'/home/banner'}
    )
}
