<template>
  <div id='home'>
    <div class="contain">

      <div class='top'>
        <div class="title">
          <span>OVERVIEW</span>
        </div>

        <div class="date_pick">
          <div>
            <el-date-picker
              v-model="datePick.betweenDate" type="daterange"
              range-separator="~"
              start-placeholder="Start Date"
              end-placeholder="End Date">
            </el-date-picker>
          </div>
          <div>
            <el-radio-group v-model="datePick.type" size="small">
              <el-radio-button label="day">Day</el-radio-button>
              <el-radio-button label="week">Week</el-radio-button>
              <el-radio-button label="month">Month</el-radio-button>
            </el-radio-group>
          </div>
        </div>
      </div>

      <div>
        <count-block></count-block>
      </div>

      <div class='chart_box'>
        <div><span>Activity</span></div>
        <div>
          <Chart></Chart>
        </div>
      </div>

      <div class="bottom">
        <web-site></web-site>
        <orders></orders>
      </div>

    </div>
  </div>
</template>

<script>
import Chart from '@/components/Chart';
import WebSite from './website';
import Orders from './orders';
import CountBlock from './countBlock';

export default {
  components: {
    Chart,
    WebSite,
    Orders,
    CountBlock,
  },
  data() {
    return {
      datePick: {
        betweenDate: [],
        type: 'day',
      },
    };
  },
};

</script>

<style lang="scss">
@import '../../../assets/style/mixin.scss';
@import '../../../assets/style/color.scss';

#home{
  @include size(100%,100%);
  .contain{
    min-height: 1000px;
    display: flex;
    flex-direction: column;
    background-color: $bg_color;
    padding: 42px 5% 5% 5%;

    .top{
      display: flex;
      justify-content: space-between;

      .title{
        font-family: 'HelveticaNeue-Bold';
        font-size: 24px;
      }
      .date_pick{
        min-width: 550px;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .el-range-editor.el-input__inner{
          padding: initial;
          padding-left: 10px;
        }
        .el-radio-button__orig-radio:checked+.el-radio-button__inner {
          color: $hover_color;
          font-size: 12px;
          background-color: $black_color;
          border-color: $black_color;
        }
        .el-radio-button__inner:hover {
            color: $black_color;
        }
        .el-input__inner{
          height: 34px;
        }
      }
    }

    .chart_box{
      height: 600px;
      background-color: $white_color;
      margin-top: 18px;
      border-radius: 10px;
      box-shadow: 1px 1px 30px #4c4c4c42;
      > {
        & :first-child{ // Active
          @include size(90px,28px);
          @include inner_title();
        }
        & :last-child{
          @include size(100%,550px);
        }
      }
    }

    .bottom{
      display: flex;
      margin-top: 18px;
      > *{
        flex: 1;
        width: calc((100%-20px)/2) ;
        min-height: 400px;
        background-color: $white_color;
        border-radius: 10px;
        float: left;
        box-shadow: 1px 1px 30px #4c4c4c42;
      }
    }

  }
}
</style>
