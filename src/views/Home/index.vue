<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'

import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div><h1>Home页 /的默认子路由</h1></div>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />

  <!--  -->


  <HomePanel title="新鲜好物">
    
  </HomePanel>
</template>




<style>

</style>