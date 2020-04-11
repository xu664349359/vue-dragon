<template>
  <div class="dragon_loginContent">
    <div class="loginBox">
      <div class="col-lg-4 col-md-6 ml-auto mr-auto boxContent">
        <div class="dragonCard-header">
          <img src="@/assets/card-primary.png" alt />
          <h1>login</h1>
        </div>
        <div class="animate" ref="animate"></div>
        <v-form v-model="loginForm">
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="username"
                  :rules="nameRules"
                  :counter="20"
                  label="username"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  type="password"
                  label="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row style="padding:10px">
              <button type="button" class="btn btn-dragon" style="width:100%">login</button>
            </v-row>
          </v-container>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: false,
      username: "",
      password: "",
      nameRules: [v => !!v || "username is required"],
      passwordRules: [v => !!v || "password is required"]
    };
  },
  watch: {
    username(value) {
      // this.$refs.animate.style.left = `${value.length * 10}px`;
      let color = value.length * 10;
      if (color > 255) {
        color /= 10;
      }
      console.log(color);
      // console.log(this.$refs.animate.)
      var beforeStyle = window.getComputedStyle(this.$refs.animate, ":before");
      console.log(beforeStyle);
      this.$refs.animate.style.background = `rgb(45,150,${color})`;
      this.$refs.animate.style.borderColor = `rgb(45,150,${color})`;
      // beforeStyle.backgroundColor = `rgb(45,150,${color})`
      // document.styleSheets[0].addRule(`${this.$refs.animate}::before`,`backgroundColor:rgb(45,150,${color})`)
    }
  }
};
</script>

<style lang="scss" scoped>
.dragon_loginContent {
  width: 100%;
}
.loginBox {
  // background-color: #fff;
  margin: 0 auto;
  // padding: 20px;
  // border-radius: 5px;
  // position: relative;
}
.animate {
  width: 100%;
  height: 20px;
  background-color: rgb(0, 0, 0);
  // transform: translate(0,0);
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  transition: all 0.1s;
  border: 1px solid rgb(0, 0, 0);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.705);
  &::before {
    content: "";
    height: 20px;
    width: 20px;
    background-color: rgb(0, 0, 0);
    position: absolute;
    left: -20px;
    perspective: 200;
    transform: skew(178deg, 144deg) translateY(6px);
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.705);
  }
  &::after {
    content: "";
    height: 20px;
    width: 20px;
    background-color: rgb(0, 0, 0);
    position: absolute;
    left: -20px;
    perspective: 200;
    transform: skew(179deg, 217deg) translateY(21px);
    z-index: -1;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.705);
  }
}
.boxContent {
  background-color: #fff;
  border-radius: 5px;
  padding: 0;
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.363);
}
.dragonCard-header{
  position: relative;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
  h1{
    position: absolute;
    left: -10px;
    color: #fff;
    top:0;
    font-size:100px ;
    font-weight: bolder;
  }
  img{
    position: absolute;
    left: -2px;
    max-width: 100%;
  }
}
@media screen and (min-width: 1200px) {
  .loginBox {
    max-width: 1140px;
  }
}
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .loginBox {
    max-width: 960px;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .loginBox {
    max-width: 720px;
  }
}
@media screen and (min-width: 576px) and (max-width: 767px) {
  .loginBox {
    max-width: 540px;
  }
}
</style>