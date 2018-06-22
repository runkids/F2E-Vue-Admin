<template>
  <div class="count_block">
    <div>
      <div class="inner">
        <div>
          <i class="fas fa-hand-holding-usd" style='float:left;'></i>
        </div>
        <div class="number">
          <div class="title">
            TOTAL REVENUE
          </div>
          $ <AnimatedInteger :value="54540"></AnimatedInteger>
        </div>
      </div>
    </div>
    <div>
      <div class="inner">
        <div>
          <i class="fas fa-boxes"></i>
        </div>
        <div class="number">
          <div class="title">
            TOTAL COST
          </div>
          $ <AnimatedInteger :value="34540"></AnimatedInteger>
        </div>
      </div>
    </div>
    <div>
      <div class="inner">
        <div>
          <i class="fas fa-money-bill"></i>
        </div>
        <div class="number">
          <div class="title">
            NET INCOME
          </div>
          $ <AnimatedInteger :value="24540"></AnimatedInteger>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimatedInteger from '@/components/AnimatedInteger';

export default {
  components: {
    AnimatedInteger,
  },
};
</script>


<style lang="scss">
@import '../../../assets/style/mixin.scss';
@import '../../../assets/style/color.scss';
.count_block{
  width: 100%;
  display: flex;
  margin-top: 20px;
  > * {
    float: left;
    height: 138px;
    width: calc( (100%-20px*2)/3 );
    background-color: $white_color;
    font-family: 'HelveticaNeue-Medium';
    font-size: 16px;
    border-radius: 10px;
    box-shadow: 1px 1px 30px #4c4c4c42;

    &:nth-child(1){
      .number{
        color: #54bf8e;
      }
    }

    &:nth-child(2){
      .number{
        color: #fd6769;
      }
    }

    &:nth-child(3){
      .number{
        color: #57a9e0;
      }
    }

    + *{  /*第一塊後面*/
      margin-left: 20px;
    }

    .inner{
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 30px;
      i{
        font-size: 60px;
      }

      .number{
        font-size: 36px;
        .title{
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 20px;
          color: $black_color;
        }
      }
    }

  }
}

</style>
