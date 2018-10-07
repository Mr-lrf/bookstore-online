<template>
  <div class="banner">
    <ul>
      <router-link to="/home" tag="li" exact>
        <i class="iconfont icon-home"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/classify" tag="li" exact>
        <i class="iconfont icon-fenlei"></i>
        <span>分类</span>
      </router-link>
      <router-link to="/cart" tag="li" exact>
        <i class="iconfont icon-gouwuche-copy"></i>
        <span>购物车</span>
      </router-link>
      <router-link to="/me" tag="li" exact>
        <i class="iconfont icon-wode_1"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  ul{
    list-style: none;
    display: flex;
    align-items:center;
    justify-content: space-around;
  }
  .active{
    color: #339933;
  }
  .banner{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top:1px solid #D7D7D7;
    padding: 0.5rem;
    color: #666666;
  }
  ul li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
</style>
