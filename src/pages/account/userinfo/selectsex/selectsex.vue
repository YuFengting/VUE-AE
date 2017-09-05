<template>
  <div class="wrapper">
    <v-header title="修改昵称">
      <div slot="left" class="item" flex="main:center cross:center" @click="$router.go(-1)">
        <i class="icon-font icon-xtb-back"></i>
      </div>
    </v-header>
    <div class="subMain">
        <div class="selectOptBox">
            <div class="optInforList" flex="box:justify" @click="selectgirl">
              <span>女</span>
              <span></span>
              <i v-if="girl" flex="main:center cross:center" class="icon-select-cur selectIcon"></i>
            </div>
          <div class="optInforList" flex="box:justify" @click="selectboy">
            <span>男</span>
            <span></span>
            <i v-if="!girl" flex="main:center cross:center" class="icon-select-cur selectIcon"></i>
          </div>
        </div>
    </div>
  </div>
</template>
<style scoped="">
  .selectOptBox{
    margin-top: 20px;
    padding-left:10px;
    background: #fff;
  }
  .optInforList{
    padding-left: 10px;
    height:50px;
    line-height: 50px;
    border-bottom:1px solid #ccc;
    font-size: 14px;
  }
  .optInforList:last-child{
    border-bottom: 0 none;
  }
  .selectIcon{
    margin-right: 20px;
  }
  .selectIcon:before{
    color:green;
    font-size: 20px;
  }
</style>
<script>
  export default{
      data:function(){
          return {
              girl:true
          }
      },
      methods:{
        selectgirl:function(){
            this.girl = true;
            localStorage.setItem("sex","女")
        },
        selectboy:function(){
          this.girl = false;
          localStorage.setItem("sex","男")
        }
      },
      created:function(){
          if(localStorage.getItem("sex")){
              var sex = localStorage.getItem("sex");
              if(sex == "女"){
                  this.girl = true
              }else{
                this.girl = false
              }
          }
      }
  }
</script>
