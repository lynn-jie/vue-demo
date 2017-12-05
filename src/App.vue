<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="mian">
    	
    	
    	<home></home>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>

import home from '@/components/common/home'

export default {
  name: 'app',
  componens:{
  	home
  }
}



</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.main{
  float:left;
  width:95%; 
  background-color: #EFF2F7;
  height:100%;
  overflow: auto;

}
</style>
