<template>
  <div>
    <!--轮播图组件-->
    <lrf-swiper :slides="imgDatas"></lrf-swiper>
    <div class="ads">
      <i class="iconfont icon-zhong"></i>
      <marquee style="font-size:0.2rem">双12全场图书低至1折，更有隐藏神秘惊喜</marquee>
    </div>
    <!--新书上架-->
    <div class="book-list">
      <div class="title">新书上架</div>
      <div class="book-box" v-for="item in newBooks">
        <div class="img" @click="getBookInfo(item)">
          <img :src="item.cover" alt="">
        </div>
        <div class="detail">
          <div>{{item.name}}</div>
          <div class="money">￥<span>{{item.price}}</span></div>
        </div>
      </div>
    </div>
    <!--热门新书-->
    <div class="book-list">
      <div class="title">热门推荐</div>
      <div class="book-box" v-for="item in hotBooks">
        <div class="img">
          <img :src="item.cover" alt=""  @click="getBookInfo(item)">
        </div>
        <div class="detail">
          <div>{{item.name}}</div>
          <div class="money">￥<span>{{item.price}}</span></div>
        </div>
      </div>
    </div>
    <!--编辑推荐-->
    <div class="book-list">
      <div class="title">编辑推荐</div>
      <div class="book-box" v-for="item in editBooks">
        <div class="img">
          <img :src="item.cover" alt=""  @click="getBookInfo(item)">
        </div>
        <div class="detail">
          <div>{{item.name}}</div>
          <div class="money">￥<span>{{item.price}}</span></div>
        </div>
      </div>
    </div>
    <!--获取图书信息弹框组件-->
    <lrf-getBookInfo :bookInfo="bookInfo" class="book-info" :class="show" @hidden="hiddenBox"></lrf-getBookInfo>
  </div>
</template>

<script>
  import swiper from '@/components/swiper'
  import getBookInfo from '@/components/getBookInfo'
  export default {
    name: "home",
    created(){
      this.getNewBooks();
      this.getHotBooks();
      this.getEditBooks();
    },
    components:{
      'lrf-swiper':swiper,
      'lrf-getBookInfo':getBookInfo,
    },
    data(){
      return{
        imgDatas:[{
          src:'../../static/images/1.png'
        },{
          src:'../../static/images/2.png'
        },{
          src:'../../static/images/3.png'
        }],
        newBooks:[],
        hotBooks:[],
        editBooks:[],
        bookInfo:{},//点击图书弹框的书本信息
        show:''
      }
    },
    methods:{
      getNewBooks(){
        this.axios.get(`${this.url}/new-book.json`).then((res)=>{
          this.newBooks = res.data;
        }).catch((err)=>{
          console.error(err);
        });
      },
      getHotBooks(){
        this.axios.get(`${this.url}/hot-book.json`).then((res)=>{
          this.hotBooks = res.data;
        }).catch((err)=>{
          console.error(err);
        });
      },
      getEditBooks(){
        this.axios.get(`${this.url}/editor-recommend.json`).then((res)=>{
          this.editBooks = res.data;
        }).catch((err)=>{
          console.error(err);
        });
      },
      /*获取图书详情*/
      getBookInfo(item){
        this.bookInfo = item;
        this.show = 'show';
      },
      /*隐藏弹框*/
      hiddenBox(){
        this.show = '';
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
  .title{
    padding: 0 0.25rem 0.25rem 0.5rem;
    font-weight: 700;
  }
  .book-box{
    width: 50%;
    display: inline-block;
    box-sizing: border-box;
    float: left;
    height: 5.5rem;
  }
  .book-box .img{
    text-align: center;
  }
  .book-box img{
    width:70%;
    height: 3.5rem;
  }
  .detail{
    padding: 0.2rem 0.5rem;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  .detail div:nth-child(1){
    font-size: 0.25rem;
  }
  .book-list{
    display: inline-block;
  }
  .money{
    color: orange;
  }
  .book-info{
    position: fixed;
    border: 1px solid black;
    top: 1rem;
    left: 0.4rem;
    right: 0.4rem;
    z-index: 999;
    display: none;
  }
  .show{
    display: block;
  }
</style>
