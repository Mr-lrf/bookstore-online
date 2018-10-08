<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../../static/images/1.png" alt=""></div>
      <div class="swiper-slide"><img src="../../static/images/2.png" alt=""></div>
      <div class="swiper-slide"><img src="../../static/images/3.png" alt=""></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <!--<div class="swiper-button-next"></div>-->
    <!--<div class="swiper-button-prev"></div>-->
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import Swiper from 'swiper'
    export default {
      methods: {
        runSwiper() {
          var swiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        }
      },
      mounted() {
        this.runSwiper();
      }
    }
</script>

<style scoped>
.swiper-slide img{
  width: 100%;
}

</style>
