<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang='scss'>
  @import './assets/style/reset.css';
  @import './assets/style/mixin.scss';
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');

  html,body{
     @include size(100%,100%);
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
    color: #4c4c4c;
  }
</style>
