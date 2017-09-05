<template>
  <div class="wrapper">
    <v-header title="修改昵称">
      <div slot="left" class="item" flex="main:center cross:center" @click="$router.go(-1)">
        <i class="icon-font icon-xtb-back"></i>
      </div>
    </v-header>
    <div class="subMain">
      <div class="changeName">
        <input class="changeNickName"  type="text" v-model="inputvalue"  />
        <i v-if="inputvalue.length > 0" class="icon-publish-del2 closeNameIcon" @click="deleteTxt"></i>
      </div>
      <div class="submitBtn" @click="setNikeName">
        <button>保存</button>
      </div>
    </div>
  </div>
</template>
<style>
  .changeName{
    margin-top:15px;
    border-top:1px solid #e5e5e5;
    border-bottom:1px solid #e5e5e5;
    position: relative;
    background:#fff;
  }
  .changeNickName{
    background:#fff;
    height:50px;
    padding:5px 10px;
    border:0 none;
    width:75%;
    font-size:14px;
  }
  .closeNameIcon{
    position:absolute;
    right:20px;
    top:0px;
    z-index: 999;
    padding:13px;
    font-size: 25px;
  }

  .submitBtn{
    width: 100%;
    margin: 30px 0px 0;
  }

  .submitBtn button{
    border:1px solid rgba(0, 0, 0, 0.1);
    width: 95%;
    display:block;
    margin:0 auto;
    box-sizing:border-box;
    font-size:18px;
    text-align:center;
    text-decoration:none;
    line-height:2.55555556;
    border-radius:5px;
    -webkit-tap-highlight-color:transparent;
    overflow:hidden;
    background: #ffa614;
    color:#fff;
  }
</style>
<script>
  export default{
      data:function(){
          return {
            inputvalue:''
          }
      },
    methods:{
      setNikeName:function(){
          localStorage.setItem('nikename',this.inputvalue);
          this.$router.go(-1)
      },
      deleteTxt:function(){
          this.inputvalue = ""
      }
    },
    created:function(){
          if(localStorage.getItem('nikename')){
              var nikename = localStorage.getItem('nikename');
              this.inputvalue = nikename;
          }
    }

  }
</script>
