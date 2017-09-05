<template>
  <div>
    <v-header title="课程详情">
      <div slot="left" class="item" flex="main:center cross:center" @click="$router.go(-1)">
        <i class="iconfont icon-xtb-back"></i>
      </div>
    </v-header>
    <div class="subMain">
      <div class="courseVideoBox">
        <video id="courseVideo" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"  controls ></video>
      </div>
      <div class="courseVideoContent">
        <div class="title">课程介绍:</div>
        <div class="courseDetail">
          课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped="">
  .courseVideoBox{
    /*padding:20px;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  #courseVideo{
    width:100%;
  }
  .courseVideoContent{
    padding:20px;
  }
  .courseVideoContent .title{
    font-size:16px;
    line-height: 30px;
    color:#ffa614;
    font-weight:bold;
  }
  .courseVideoContent .courseDetail{
    font-size:14px;
    line-height: 25px;
    text-indent: 2em;
  }
</style>
<script>
  export default{
      data:function(){
          return {

          }
      },
      created(){
          console.log(this.$route.query.id);
      }
  }
</script>
