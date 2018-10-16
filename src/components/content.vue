<template>
  <div class="content">
    <lrf-header class="header"></lrf-header>
    <router-view class="main"></router-view>
    <lrf-banner class="banner"></lrf-banner>
  </div>
</template>

<script>
  import header from '@/components/header'
  import banner from '@/components/banner'
  export default {
    components:{
      'lrf-header':header,
      'lrf-banner':banner
    }
  }
</script>

<style scoped>
  .header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  .main{
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }
</style>
