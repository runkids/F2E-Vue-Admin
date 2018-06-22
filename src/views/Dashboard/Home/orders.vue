<template>
  <div class="right">
    <div>
      <div class="title">
        <span>Latest Orders</span>
      </div>

      <div class="order_block" v-for="(x,index) in 3" :key="index">
        <div>
          <div>
            <img :src="require(`@/assets/images/c${x}.jpeg`)">
          </div>
          <div class="info">
            <div class="good_name">Vintage T-shirt</div>
            <div><i class="fas fa-clock"> 2018-06-13 13:42</i></div>
            <div><i class="fas fa-user"> Belle Willis</i></div>
          </div>
          <div class="total">
            <div>Total</div>
            <div>3200</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss">
  @import '../../../assets/style/mixin.scss';
  @import '../../../assets/style/color.scss';
  .right{
    .title{
      @include inner_title();
      margin-bottom: 30px;
    }
    .order_block{
      padding: 5px 30px 10px 30px;
      > * {
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 1px solid #00000018;
        position: relative;
        .info{
          width: 400px;
          padding: 0 30px 0 30px;
          > * {
            padding: 10px;
            i {
              color: rgba(0, 0, 0, 0.384);
            }
          }
          .good_name{
            font-size: 20px;
            font-family: 'HelveticaNeue-Bold';
          }
        }
        .total{
          width: 150px;
          text-align: right;
          position: absolute;
          right: 30px;
          bottom: 30px;
          :first-child{
            font-family: 'HelveticaNeue';
            font-size: 14px;
            margin-bottom: 10px;
          }
          :last-child{
            font-family: 'HelveticaNeue-Bold';
            font-size: 20px;
          }
        }
      }
      img{
        @include size(120px,120px);
        border: 1px solid #00000018;
      }
    }
  }
</style>
