<template>
  <div class="wrapper">
    <v-header title="关于我们">
      <div slot="left" class="item" flex="main:center cross:center" @click="$router.go(-1)"><i class="iconfont icon-xtb-back"></i></div>
    </v-header>
    <div class="aboutusBox subMain">
      <img mode="scaleToFill" class="logoBox" src="/static/images/logo.jpg"  />
      <div class="titleBox">体验式学习</div>
      <div class="introInfor">体验式学习相关介绍体验式学习相关介绍体验式学习相关介绍体验式学习相关介绍体验式学习相关介绍体验式学习相关介绍体验式学习相关介绍体验式学习相关介绍体验式学习相关介绍体验式学习相关介绍体验式学习相关介绍体验式学习相关介绍体验式学习相关介绍体验式学习相关介绍体验式学习相关介绍体验式学习相关介绍体验式学习相关介绍体验式学习相关介绍.</div>
      <div class="contactus">联系我们：<a class="callNum" href="tel:18505199081" >18505199081</a></div>
    </div>
  </div>
</template>
<style scoped="">
.wrapper{min-height: 100%;background: #fff;}
.aboutusBox{
  text-align: center;
  padding: 20px;
  font-size:16px;
}
.aboutusBox .logoBox{
  width:90px;
  height:90px;
  border-radius: 50%;
  margin-top:40px;
}
.aboutusBox .titleBox{
  margin: 20px 0;
}
.aboutusBox .introInfor{
  text-indent:2em;
  font-size:16px;
  text-align: left;
  line-height: 25px;
}
.aboutusBox .contactus{
  text-align: left;
  margin-top:40px;
}
.aboutusBox .contactus .callNum{
  display: inline-block;
  color:#ffa614;
}
</style>
<script></script>
