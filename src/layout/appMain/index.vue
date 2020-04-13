<template>
<div class="appMain">
    <div class="btn" @click="sildebarChange">
      
    </div>
</div>
</template>

<script>
export default {
    methods:{
        sildebarChange(){
            console.log('点击了')
        }
    }
}
</script>

<style lang="scss" scoped>
.appMain{
    width: 100%;
    height: 100%;
    background-color: black;
}
.btn{
  width: 40px;
  height: 40px;
  background-color: #fff;
}
</style>