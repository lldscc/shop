<script setup>
// 导入轮播图数据API
import { getBannerAPI} from "@/apis/home"
import { onMounted, ref } from "vue";
// 创建响应式数据
const bannerList = ref([])
// 获取轮播图数据
const getBanner = async () => {
    const res = await getBannerAPI()
    console.log(res);
    // 赋值
    bannerList.value = res.result
}

onMounted(() =>getBanner())
    

</script>



<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>