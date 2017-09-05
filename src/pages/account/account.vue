<template>
  <div>
    <div class="accountBox">
        <div class="accountTitle" flex="box:justify">
          <router-link to="/userinfo">
            <img flex="main:center" class="userHeaderImg" src="../../../static/images/logo.jpg" />
          </router-link>
          <div class="accountInfor">
            <p class="userName">xiaoyu</p>
            <div class="integralBox">
                <span class="level" v-if="classnum > 1000">Lv.10</span>
                <span class="level" v-else-if="classnum > 900">Lv.9</span>
                <span class="level" v-else-if="classnum > 800">Lv.8</span>
                <span class="level" v-else-if="classnum > 700">Lv.7</span>
                <span class="level" v-else-if="classnum > 600">Lv.6</span>
                <span class="level" v-else-if="classnum > 500">Lv.5</span>
                <span class="level" v-else-if="classnum > 400">Lv.4</span>
                <span class="level" v-else-if="classnum > 300">Lv.3</span>
                <span class="level" v-else-if="classnum > 200">Lv.2</span>
                <span class="level" v-else-if="classnum > 100">Lv.1</span>
                <span class="level" v-else>Lv.0</span>
            </div>
          </div>
          <span flex="main:center" class="recordBtn" :class="{'recorded': setRecorded}" @click="clickRecorded">{{recordTxt}}</span>
        </div>
        <div class="accountLists">
          <router-link to="/mymsg">
            <div class="account-list" bindtap="goMyMsg">
              <img src="/static/images/mail.png" class="listIcon" />
              <div class="listName">我的消息</div>
              <div class="rightInfor"><span class="msgNum">14</span><span class="rightArrow icon-arrow"></span></div>
            </div>
          </router-link>
        </div>
        <div class="accountLists">
          <router-link to="/myCollect">
            <div class="account-list" bindtap="gomycollect">
              <img src="/static/images/heart.png" class="listIcon" />
              <div class="listName">我的收藏</div>
              <div class="rightInfor"><span class="rightArrow icon-arrow"></span></div>
            </div>
          </router-link>
          <router-link to="/aboutus">
            <div class="account-list" bindtap="aboutus">
              <img src="/static/images/about.png" class="listIcon" />
              <div class="listName">关于我们</div>
              <div class="rightInfor"><span class="rightArrow icon-arrow"></span></div>
            </div>
          </router-link>
          <router-link to="/setting">
            <div class="account-list" bindtap="goSetting">
              <img src="/static/images/set.png" class="listIcon" />
              <div class="listName">设置</div>
              <div class="rightInfor"><span class="rightArrow icon-arrow"></span></div>
            </div>
          </router-link>
        </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<style scoped="">

  .accountTitle{padding:20px;background: #fff; }
  .userHeaderImg{width:60px;height: 60px;border-radius: 50%;margin-right: 15px;}
  .accountTitle .accountInfor .userName{
    line-height: 32px;
    font-size:16px;
  }
  .accountTitle .accountInfor .level{
    font-size:12px;
    color:#ccc;
    border:1px solid #ccc;
    border-radius: 10px;
    height:20px;
    line-height: 20px;
    padding:0 5px;
  }
  .accountTitle .recordBtn{
    font-size:14px;
    color:#ffa614;
    border:1px solid #ffa614;
    border-radius: 10px;
    height:20px;
    line-height: 20px;
    padding:0 10px;
    align-self: center;
    -webkit-align-self: center;
  }
  .accountTitle .recordBtn.recorded{
    color:#ccc;
    border:1px solid #ccc;
  }
  .accountLists{
    background-color:#fff;
    margin-top:10px;

  }
  .accountLists .account-list{
    display: flex;
    display: -webkit-flex;
    height:50px;
    line-height:50px;
    position:relative;
    align-items: center;
  }
  .accountLists .account-list .listIcon{
    width:40px;
    height:50px;
    margin:0 5px;
    padding:10px 5px;
  }
  .accountLists .account-list .listName{
    font-size:16px;
    flex:1;
    -webkit-flex:1;
    border-bottom:1px solid #e5e5e5;
  }
  .accountLists a:last-child .listName{
    border-bottom:0 none;
  }
  .account-list .rightInfor{
    align-self: center;
    -webkit-align-self: center;
    position: absolute;
    padding-right:20px;
    right:0px;
    top:15px;
    height:20px;
  }
  .rightArrow{
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    right:10px;
  }
  .account-list .rightInfor .msgNum{
    padding:0 8px;
    font-size:12px;
    background-color:#ffa614;
    color:#fff;
    height:20px;
    line-height:20px;
    border-radius:10px;
    display:block;
  }
</style>
<script>
  import util from "../../util"
  export default{
    data:function(){
      return{
        classnum : 200,
        recordTxt:'签到',
        setRecorded:false
      }
    },
    methods:{
      clickRecorded:function(){
          if(!this.setRecorded){
            this.setRecorded = !this.setRecorded;
            this.recordTxt = "已签到";
            util.showMsg("签到成功")
          }
      }
    }
  }
</script>
