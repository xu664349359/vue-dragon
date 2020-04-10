<template>
  <div class="dragon_loginContent">
    <div class="loginBox">
        <div class="animate" ref="animate">

        </div>
      <v-form v-model="loginForm">
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                v-model="username"
                :rules="nameRules"
                :counter="10"
                label="username"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="password"
                :rules="nameRules"
                :counter="10"
                type="password"
                label="password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: false,
      username: '',
      password:'',
      nameRules:[
          v => !!v || 'username is required',
      ]
    };
  },
  watch:{
      username(value){
          console.log(value)
          console.log(this.$refs.animate)
        //   document.querySelectorAll()
        this.$refs.animate.style.left = `${value.length*10}px`
        console.log(value.length)
        // this.$refs.animate.style.background = `rgb(0,0,${value.length*10})`
      }
  }
};
</script>

<style lang="scss" scoped>
.dragon_loginContent {
  width: 100%;
}
.loginBox {
  background-color: #fff;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 0 2rem 0 rgba(136,152,170,.15)
}
.animate{
    width: 100%;
    height: 20px;
    background-color: rgb(0,0,0);
    // transform: translate(0,0);
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    transition: all .1s;
}
@media screen and (min-width: 1200px) {
  .loginBox {
    width: 50%;
  }
}
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .loginBox {
    width: 75%;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .loginBox {
    width: 90%;
  }
}
</style>