<template>
  <div class="dragon_login">
    <div class="dragon_loginTop">
      <div class="dragon_loginTopContent">
        <h1 class="text-white">Welcome!</h1>
        <p class="text-description">Use these awesome forms to login or create new account in your project for free.</p>
      </div>
      <div class="dragon_loginBottomBg">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="2560 0 2560 100 0 100" class="fill-default" />
        </svg>
      </div>
    </div>
    <div class="dragon_expot">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.dragon_login {
  width: 100%;
  height: 100%;
  background-color: #525f7f;
  .dragon_loginTop {
    height: 65%;
    background: linear-gradient(87deg, #2dce89, #2dcecc);
    position: relative;
    .dragon_loginBottomBg {
      height: 60px;
      width: 100%;
      position: absolute;
      top: auto;
      bottom: 0;
      svg {
        height: 60px;
        width: 100%;
      }
      .fill-default {
        fill: #525f7f;
      }
    }
    .dragon_loginTopContent{
      position: absolute;
      left: 0;
      right:0;
      top: 30%;
      bottom: 0;
      margin: auto;
      width: 100%;
      height: auto;
      text-align: center;
      color: #ffffff;
      .text-white{
        font-weight: bold;
        font-size: 28px;
        line-height: 40px;
      }
      .text-description{
        width: 50%;
        margin: 0 auto;
      }
    }
  }
}
.dragon_expot{
  width: 80%;
  // margin: -10% auto 0;
  margin: -200px auto 0;
  // background-color: #fff;
  height: auto;
  position: relative;
  z-index: 1;
}
// @media screen and (min-width: 1200px) {
//   .dragon_expot {
//      margin: -10% auto 0;
//   }
// }
// @media screen and (min-width: 992px) and (max-width: 1199px) {
//   .dragon_expot {
//      margin: -15% auto 0;
//   }
// }
// @media screen and (min-width: 768px) and (max-width: 991px) {
//   .dragon_expot {
//      margin: -20% auto 0;
//   }
// }
// @media screen and (max-width: 767px) {
//   .dragon_expot {
//      margin: -25% auto 0;
//   }
// }
</style>