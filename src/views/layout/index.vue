<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <scroll-top-button></scroll-top-button>
  </div>
</template>

<script>
import Header from './Header/index';
import ScrollTopButton from '../../components/ScrollTopButton';

export default {
  components: {
    Header,
    ScrollTopButton,
  },
};
</script>
