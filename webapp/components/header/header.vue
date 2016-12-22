<template>
<div class="h1">header
  <div class="components-index">
      <button @click="test"> test1</button>
      <em>{{clickNum}}</em>
    </div>

     <div class="components-index">
      <button @click="test2"> test2</button>
      <em>{{clickNum2}}</em>
    </div>
</div>
  
</template>
<script>
 import { mapState } from 'vuex';
  export default{
    name: 'vheader',
    computed:mapState({ 
         clickNum: state =>state.addNum.clickNum.length,
         clickNum2: state =>state.addNum.d
    }),
    methods:{
      test(){
        //Actions support the same payload format and object-style dispatch:
        this.$store.dispatch('addInfo',{txt:'test1'});
      },
      test2(){
        //Actions support the same payload format and object-style dispatch:
        this.$store.dispatch('checkout',{txt:'222'});
      }
    }


  }
</script>
<style>

  .h1{
    height: 100px;
    background: yellow
  }

</style>