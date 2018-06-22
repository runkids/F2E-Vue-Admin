<template>
  <div id='header'>
    <div class="head_container">

      <div class='main'>
        <div class='title'>
          <span>Shoptime</span>
        </div>

        <div class="menu">
          <el-menu :default-active="active" mode="horizontal" router
                    background-color='#4c4c4c' active-text-color='#fedc4a'>
            <el-menu-item index="home">HOME</el-menu-item>
            <el-menu-item index="orders">ORDERS</el-menu-item>
            <el-menu-item index="product">PRODUCT</el-menu-item>
          </el-menu>
        </div>
      </div>

      <div class='userInfo'>
        <div class='github'>
          <a href='https://github.com/runkids/F2E-Vue-Admin' target="_blank"><i class="fab fa-github"></i></a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    active() {
      return this.$route.name;
    },
  },
};
</script>


<style lang="scss">
  @import '../../../assets/style/mixin.scss';
  @import '../../../assets/style/color.scss';
  @import '../../../assets/style/keyframes.scss';

  #header{
    .head_container{
      @include size(100%,70px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      position:relative;
      background-color: $black_color;

      .main{
        display: flex;
        align-items: center;
        justify-content: space-around;
        .title{
          font-family: 'HelveticaNeue-Bold';
          font-size: 24px;
          color: $white_color;
          padding-left: 10%;
          margin: 0 10px 0 10px;
        }

        .el-menu{
          margin-left: 100px !important;
          width: 400px;
        }
        .el-menu-item{
          font-size: 20px;
          color: $white_color;
        }
        .el-menu--horizontal{
          border: none;
        }
      }

      .userInfo{
        color: $white_color;
        padding-right: 42px;
        font-family: 'HelveticaNeue-Bold';
        .github{
          a{
            color: #fff;
            &:visited{
              color: #fff;
            }
          }
          i{
            font-size: 35px;
            cursor: pointer;
            &:hover{
              animation: .8s github alternate infinite;
            }
          }
        }
      }

    }
  }
</style>
