// pinia状态管理：常规导航与吸附导航的数据请求优化
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {getCategoryAPI}from '@/apis/layout'


export const useCategoryStore = defineStore('category', () => {
    //state 导航列表数据
    const categoryList = ref([])  
    // action 获取导航数据的方法
    const getCategory = async() =>{
    const res = await getCategoryAPI()
    // console.log(res)
    categoryList.value = res.result
    }

    return{
        categoryList,
        getCategory
    }


})
