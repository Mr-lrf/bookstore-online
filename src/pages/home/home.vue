<template>
  <div>
    <lrf-swiper :slides="imgDatas"></lrf-swiper>
    <div class="ads">
      <i class="iconfont icon-zhong"></i>
      <marquee>双12全场图书低至1折，更有隐藏神秘惊喜</marquee>
    </div>
  </div>
</template>

<script>
  import swiper from '@/components/swiper'
  export default {
    name: "home",
    components:{
      'lrf-swiper':swiper
    },
    data(){
      return{
        imgDatas:[{
          src:'../../static/images/1.png'
        },{
          src:'../../static/images/2.png'
        },{
          src:'../../static/images/3.png'
        }]
      }
    }

  }
</script>

<style scoped>
  .ads{
    padding: 0 0.2rem;
  }
  .ads marquee{
    width: 80vw;
    font-size: 0.02rem;
  }
  .icon-zhong{
    color: orange;
  }
</style>
