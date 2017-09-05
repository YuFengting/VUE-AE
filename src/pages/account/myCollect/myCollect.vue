<template>
  <div class="wrapper">
    <v-header title="我的收藏">
      <div slot="left" class="item" flex="main:center cross:center" @click="$router.go(-1)"><i class="iconfont icon-xtb-back"></i></div>
    </v-header>
    <div class="myCollectBox subMain">
      <div class="showTeamBuildLists" v-if="!this.$route.query.tab">
        <router-link :to="'/coursedetail?id='+item.id" v-for="(item,index) in vteambuild">
          <div class="courseLists" :style="{right:item.right+'px'}" v-scroll-del v-bind="{id:item.id}">
            <img class="courseImg" :src="item.img" />
            <div class="courseInfor">
              <p class="courseTitle ellipsis1">{{item.name}}</p>
              <p class="courseContent ellipsis2">{{item.introduce}}</p>
            </div>
            <div class="deleteIcon" @click.prevent ="deletethis(index)">删除</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style>
  .showTeamBuildLists{
    overflow: hidden;
  }
  .courseLists{
    position: relative;
  }
</style>
<script>
  import util from "../../../util"
  export default{
      data:function(){
          return {
            vteambuild: [
              {
                id: '1-0',
                img: '/static/images/courseImg/courseImg1.jpg',
                name: '《微团建》—您身边的团建专家',
                introduce: '团队建设 — 1天',
                right:0
              },
              {
                id: '1-1',
                img: '/static/images/courseImg/courseImg2.jpg',
                name: '企业文化—共建未来城',
                introduce: '企业文化，团队建设课程',
                right:0
              },
              {
                id: '1-2',
                img: '/static/images/courseImg/courseImg3.jpg',
                name: '团建基地介绍-您身边的团建基地',
                introduce: '真人秀、剧情介绍、寻宝探秘、游山玩水、解谜团、大冒险.....宝探秘、游山玩水、解谜团、大冒险.....宝探秘、游山玩水、解谜团、大冒险......',
                right:0
              },
              {
                id: '1-3',
                img: '/static/images/courseImg/courseImg4.jpg',
                name: '《国家宝藏》-情景体验式培训课程',
                introduce: '真人秀、剧情介绍、寻宝探秘、游山玩水、解谜团、大冒险......',
                right:0
              },
              {
                id: '1-4',
                img: '/static/images/courseImg/courseImg13.jpg',
                name: '《全民总动员》',
                introduce: '《全民总动员》 — 团队建设',
                right:0
              },
              {
                id: '1-5',
                img: '/static/images/courseImg/courseImg6.jpg',
                name: '《艺术画廊》',
                introduce: '《艺术画廊》 — 团队建设培训课程',
                right:0
              },
              {
                id: '1-6',
                img: '/static/images/courseImg/courseImg7.jpg',
                name: '《彩虹跑》',
                introduce: '《彩虹跑》 — 青春正能量，奔跑吧',
                right:0
              }
            ],
          }
      },
    methods:{
      deletethis:function(dex){
        this.vteambuild.splice(dex,1);
//        var lists = this.vteambuild
//        for(var i in lists){
//            var list = lists[i];
//            list.right = "0px"
//        }
        util.showMsg("取消收藏成功")
      }
    }
  }
</script>
