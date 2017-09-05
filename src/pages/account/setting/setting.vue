<template>
  <div class="wrapper">
    <v-header title="设置">
      <div slot="left" class="item" flex="main:center cross:center" @click="$router.go(-1)"><i class="iconfont icon-xtb-back"></i></div>
    </v-header>
    <div class="settingBox subMain">
      <div class="userinfo">
        <img class="userinfo-avatar" src="/static/images/logo.jpg" background-size="cover" />
        <div class="userinfo-nickname">paraller</div>
        <div class="btnBox" v-if="getuserinfo">
          <div class="quitLogin">退出登录</div>
        </div>
        <div v-else>
          <div class="loginBtn">快速登录</div>
        </div>
      </div>
    </div>
  </div>

</template>
<style scoped="">
  .wrapper{min-height: 100%;background: #fff;}
  .settingBox{
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    padding:100px 0;
    box-sizing:border-box;
  }
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
  }

  .userinfo-avatar {
    width: 75px;
    height: 75px;
    margin: 20px;
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #aaa;
    margin-bottom:100px;
    font-size: 16px;
  }
  .btnBox{
    width:100%;
    text-align: center;
  }
  .loginBtn{
    width:80%;
    height:40px;
    line-height: 40px;
    border-radius: 20px;
    border:1px solid #ccc;
    text-align: center;
    color: #989494;
    margin-bottom:20px;
    background: rgba(220,220,220,0.4);
    display: inline-block;
  }
  .quitLogin{
    width:80%;
    height:40px;
    line-height: 40px;
    border-radius: 20px;
    border:1px solid #ccc;
    text-align: center;
    color: #aaa;
    display: inline-block;
  }
</style>
<script>
  export default{
      data:function(){
          return{
            getuserinfo:true
          }
      }
  }
</script>
