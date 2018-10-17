<template>
  <div class="info-box">
    <div class="box-header">
      <span class="cancle" @click="$emit('hidden')">×</span>
    </div>
    <div class="box-main">
      <!--{{bookInfo}}-->
      <div class="img">
        <img :src="bookInfo.cover" alt="">
      </div>
      <div class="info">
        <div><label class="gray">作者</label>{{bookInfo.author}}</div>
        <div><label class="gray">页数</label>{{bookInfo.page}}</div>
        <div><label class="gray">书号</label>{{bookInfo.ISBN}}</div>
        <div><label class="gray">出版日期</label>{{bookInfo.day}}</div>
        <div><label class="gray">价格</label>￥{{bookInfo.price}}</div>
      </div>
      <div class="detail">
        <div class="title">{{bookInfo.name}}</div>
        <div class="describe">{{bookInfo.describe}}</div>
        <div class="describe2">{{bookInfo.describe_2}}</div>
      </div>
    </div>
    <div class="box-footer">
      <button class="add-cart">加入购物车</button><button class="buy">立即购买</button>
    </div>

  </div>
</template>

<script>
  export default {
    props:['bookInfo'],
    methods:{


    },
    data(){
      return{
        price:0,
        count:1,
      }
    }
  }
</script>

<style scoped>
  .info-box{
    background: white;
    height:90vh;
  }
  .box-header{
    text-align: right;
    border-bottom: 1px solid #858585;
  }
  .cancle{
    display: inline-block;
    padding: 0.1rem 0.25rem;
  }
  .img,.info,.detail{
    float: left;
  }
  .img img{
    width: 2.5rem;
  }
  .box-main{
    padding: 0.2rem 0.3rem;
  }
  .box-main:after{
    content: '';
    display: block;
    visibility: hidden;
    height: 0;
    clear: both;
  }
  .gray{
    color: #858585;
  }
  .info{
    font-size: 0.2rem;
    padding: 0.3rem 0 0.3rem 0.2rem;
    box-sizing: border-box;
    width: calc(100% - 2.5rem);
  }
  .info label{
    display:inline-block;
    width: 1rem;
    padding-right: 0.1rem;
  }
  .info div{
    padding: 5px;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
  }
  .detail{
    width: 100%;
  }
  .title{
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    font-weight: 700;
  }
  .box-footer{
    text-align: center;
    padding: 0.2rem;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .describe,.describe2{
    font-size: 0.2rem;
    color: #858585;
  }
  .add-cart{
    outline: none;
    background: white;
    border: 1px solid black;
    padding: 0.2rem;
    width: 2rem;
  }
  .buy{
    outline: none;
    background: #339933;
    border: 1px solid black;
    border-left: none;
    padding: 0.2rem ;
    color: white;
    width: 2rem;
  }
</style>
