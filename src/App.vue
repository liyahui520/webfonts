<template>
  <div id="app">
  <div class="demo-spin-container">
        <!-- <Spin fix></Spin> -->
    
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  font-size: 12px !important;
  /* margin-top: 60px; */
  margin: 0.5%;
}
.ivu-btn-ghost{
  color: initial !important;
}
   .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }

</style>
