<template>
  <div class="header">
    <p>{{title}}</p>
  </div>
</template>

<script>
  export default {
    computed:{
      title(){
        return this.$route.meta;
      }
    }
  }
</script>

<style scoped>
  .header p{
    text-align: center;
    background: black;
    color: white;
    padding: 0.5rem;
  }
</style>
