<template>
  <div>
    <v-header title="课程详情">
      <div slot="left" class="item" flex="main:center cross:center" @click="$router.go(-1)">
        <i class="iconfont icon-xtb-back"></i>
      </div>
    </v-header>
    <div class="subMain">
      <div class="courseDetailBox" v-for="item in courseInforAttr">
        <h2 class="courseTitle">{{item.title}}</h2>
        <div flex="box:mean" class="dateOption">
          <span flex="main:left" class="item">{{item.date}}</span>
          <span flex="main:right" class="item" @click="collectCourse">点击收藏<i class="iconfont collectIcon" :class="[item.collectflag ? 'icon-xt-shixin' :'icon-xt3-love']"></i></span>
        </div>
        <div class="courseDetailInfor">
          <img class="courseImg" src="/static/images/courseImg/courseImg1.jpg" />
          <div class="courseIntroduce">
            <div class="introduceList"><span class="setLable">主题：</span><span>微团建</span></div>
            <div class="introduceList"><span class="setLable">地点：</span><span>地点不限</span></div>
            <div class="introduceList"><span class="setLable">行程：</span><span>0.5-1天</span></div>
            <div class="introduceList"><span class="setLable">适合人群：</span><span>全员</span></div>
            <div class="introduceList"><span class="setLable">适合人数：</span><span>30人起</span></div>
            <div class="introduceList"><span class="setLable">适合季节：</span><span>全年</span></div>
            <div class="introduceList"><span class="setLable">体验形式：</span><span>团建创意</span></div>
            <div class="introduceList"><span class="setLable">课程介绍：</span></div>
            <img v-for="img in item.img" :src="img.src" />
            <div class="introduceList"><span class="setLable">教学原理：</span></div>
            <div class="introduceList"><span>体验式学习理论的完整提出，当属八十年代美国人大卫•库伯(David Kolb)。他在当时构建了一个体验式学习模型：“体验式学习圈”(Experiential Learning Cycle)，他提出有效的学习应从体验开始，进而发表看法，然后进行反思，再总结形成理论，最后将理论应用于实践当中 。</span></div>
            <div class="introduceList"><span class="setLable">教学原理：</span></div>
            <img class="courseImg" src="/static/images/courseImg/courseImg2.jpg" />
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="showTips" class="showMsgTips">{{collectTxt}}</div>
    </transition>

  </div>



</template>
<style scoped="">
  .courseDetailBox{padding:20px 10px;background: #fff;}
  .courseDetailBox .courseTitle{text-align: center;}
  .dateOption{margin:10px 0;}
  .dateOption .item{width:100px;color:#949494}
  .collectIcon::before{font-size:20px;color:#ffa614;margin-left: 5px;}
  .courseDetailInfor img{
    margin:0 auto 8px;
    display: block;
    width: 100%;
  }
  .courseDetailInfor .courseImg{
    width:100%;
  }
  .courseIntroduce{
    font-size:14px;
    padding:10px 0;
  }
  .courseIntroduce .introduceList{
    margin-bottom:8px;
  }
  .setLable {
    background-color:#ffa614;
    color:#fff;
    padding:3px 0 3px 2px;
    margin-right: 8px;
  }

</style>
<script>
  import util from "../../util"
 export default{
    data:function(){
        return{
          collectflag:false,
          showTips:false,
          collectTxt:'',
          courseInforAttr: [{
            id: '1-0',
            title: '《微团建》——您身边的团建专家',
            date: '2017-03-20 xiaoyu',
            img: [
              {src: '/static/images/courseImg/course1_intro1.jpg'},
              {src: '/static/images/courseImg/course1_intro2.jpg'},
              {src: '/static/images/courseImg/course1_intro3.jpg'}
            ],
            collectflag:false
          }],
        }
    },
   created(){
     console.log(this.$route.query.id);
   },
   methods:{
     collectCourse0:function(){
       clearTimeout(timer2);
       this.collectFlag = !this.collectFlag;
       this.showTips = true;
         if(this.collectFlag){
             this.collectTxt = '收藏成功';
         }else{
           this.collectTxt = '取消收藏';
         }
       var timer2 = setTimeout(() => {
         this.showTips = false;
       },1000)
     },
     collectCourse:function(){
       var lists = this.courseInforAttr
       for(var i in lists){
           var list = lists[i]
            if(list.id == this.$route.query.id){
              list.collectflag = !list.collectflag
            }
       }
       this.collectflag = list.collectflag
       if(this.collectflag){
         util.showMsg('收藏成功')
       }else{
         util.showMsg('取消收藏')
       }
     }
   }

 }
</script>
