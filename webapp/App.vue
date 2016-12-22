<template>
<div id="app">
   <vheader></vheader>
   <p>
      <div class="tab">
        <div class="item">
          <router-link to='/a'>👍</router-link>
        </div>
        <div class="item">
          <router-link to='/b'>👎</router-link>
        </div>
        
      </div>   
   </p> 
   <router-view></router-view>
</div> 

</template>
<script>
 import vheader from './components/header/header.vue';
  export default{
    name:"app",
    components: {
      vheader
    }
  }
</script>
<style>
 .tab{
  display: flex;
  background: #777;
 } 
 .item{
  flex:1;
  text-align: center;
  font-size: 20px
 }

</style>