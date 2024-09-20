<script setup>
import Header from './components/Header.vue'

</script>

<template>
  <div>
    <Header></Header>
    <main >
      <div class=" mx-auto max-w-full   md:max-w-7xl lg:max-w-full  sm:py-6  sm:px-6 lg:px-8 lg:py-0 ">
        <router-view >
      
        </router-view>
        
      </div>
    </main>
  </div>
</template>


<style >
</style>