<template>
<div class="h1">header
  <div class="components-index">
      <h2 @click="test"> Index for app</h2>
      <em>{{clickNum}}</em>
    </div>
</div>
  
</template>
<script>
 import { mapState } from 'vuex';
  export default{
    name: 'vheader',
    computed:mapState({ 
         clickNum: state =>state.addNum.clickNum.length
    }),
    methods:{
      test(){
        //Actions support the same payload format and object-style dispatch:
        this.$store.dispatch('addInfo',{txt:'hahah'});
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