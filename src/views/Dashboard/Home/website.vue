<template>
  <div class="left">
    <div>

      <div class="title">
        <span>Transaction Website</span>
      </div>

      <div class="website first">
        <div class="web_site_info">
          <div class="icon">
            <i class="fab fa-facebook-square" style='color:#4468B0;'></i>
          </div>
          <div class='webUrl'>
            <span>facebook.com</span>
          </div>
        </div>
        <div class="web_site_info">
          <div>
            <span>
              <AnimatedInteger :value="54540" />
            </span>
          </div>
          <div>
            <img src="@/assets/images/arrow-up.png">
            <span> 20%</span>
          </div>
        </div>
      </div>

      <div class="website first">
        <div class="web_site_info">
          <div class="icon">
            <i class="fab fa-google-plus-square" style='color:#D3473B;'></i>
          </div>
          <div class='webUrl'>
            <span>google.com</span>
          </div>
        </div>
        <div class="web_site_info">
          <div>
            <span>
              <AnimatedInteger :value="54540" />
            </span>
          </div>
          <div>
            <img src="@/assets/images/arrow-up.png">
            <span> 20%</span>
          </div>
        </div>
      </div>

      <div class="website first">
        <div class="web_site_info">
          <div class="icon">
            <i class="fab fa-twitter-square" style='color:#2AA3EF;'></i>
          </div>
          <div class='webUrl'>
            <span>twitter.com</span>
          </div>
        </div>
        <div class="web_site_info">
          <div>
            <span>
              <AnimatedInteger :value="54540" />
            </span>
          </div>
          <div>
            <img src="@/assets/images/arrow-down.png">
            <span> 20%</span>
          </div>
        </div>
      </div>

      <div class="website first">
        <div class="web_site_info">
          <div class="icon">
            <i class="fab fa-youtube-square" style="color:#FC0D1C;"></i>
          </div>
          <div class='webUrl'>
            <span>youtube.com</span>
          </div>
        </div>
        <div class="web_site_info">
          <div>
            <span>
              <AnimatedInteger :value="54540" />
            </span>
          </div>
          <div class='number'>
            <img src="@/assets/images/arrow-down.png">
            <span> 20%</span>
          </div>
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
.left{
  margin-right: 20px;

  .title{
    @include inner_title();
  }
  .first{
    margin-top: 30px;
  }
  .website{
    display: flex;
    border-bottom: 1px solid #00000018;
    margin: 30px;
    padding-bottom: 40px;
    i{
      font-size: 45px;
      border-color: $black_color;
    }
    .web_site_info{
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 50%;
    }
  }
}
</style>

