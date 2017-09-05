<template>
  <div class="wrapper">
    <v-header title="我的消息">
      <div slot="left" class="item" flex="main:center cross:center" @click="$router.go(-1)"><i class="iconfont icon-xtb-back"></i></div>
    </v-header>
    <div class="msgListsWrp subMain" >
      <router-link :to="'/coursedetail?id='+item.id" v-for="(item,index) in msglists">
          <div class="msgListBox" :style="{right:item.right+'px'}" v-scroll-del v-bind="{id:item.id}">
              <img class="leftImg" :src="item.src" />
              <div class="msgContent">
                <div class="msgTitle ellipsis1">{{item.name}}</div>
                <div class="msgDetail ellipsis1">{{item.content}}</div>
              </div>
              <div class="deleteIcon" v-bind="{item:item.id}" @click.prevent ="deletethis(index)">删除</div>
          </div>
        </router-link>
    </div>
  </div>

</template>
<style>
  .msgListsWrp{
    background:#fff;
    min-height:100%;
    overflow: hidden;
  }
  .msgListBox{
    display:flex;
    display:-webkit-flex;
    align-items: center;
    -webkit-align-items:center;
    position: relative;
  }
  .msgListBox .leftImg{
    width:60px;
    height:60px;
    border-radius: 50%;
    margin:0 10px;
    pointer-events: none;
  }
  .msgListBox .msgContent{
    flex:1;
    -webkit-flex:1;
    padding:10px 20px 10px 0;
    border-bottom:1px solid #e1e1e1;
    pointer-events: none;
  }
  .msgListBox .msgContent .msgTitle{
    font-size:14px;
    line-height: 25px;
  }
  .msgListBox .msgContent .msgDetail{
    font-size:12px;
    color:#949494;
    line-height: 25px;
  }
</style>
<script>
  import util from "../../../util"
  export default {
      data:function(){
          return {
            msglists:[
              {
                id:1,
                src:"/static/images/logo.jpg",
                name:"系统消息",
                content:"1感谢关注体验学习微信小程序，在这里你将学到很多的东西" ,
                right:0
              },{
                id:2,
                src:"/static/images/logo.jpg",
                name:"系统消息",
                content:"2感谢关注体验学习微信小程序，在这里你将学到很多的东西" ,
                right:0
              }
            ]
          }
      },
    methods:{
      deletethis:function(dex){
//          var _id = event.target.attributes[0].value;
//          for(var i in this.msglists){
//              var list = this.msglists[i];
//              if(list.id == _id){
//                  console.log(111);
//              }
//          }
        this.msglists.splice(dex,1)
        util.showMsg("删除成功")
      }
    }
  }
</script>
