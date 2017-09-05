<template>
  <div class="wrapper">
    <v-header title="选择职业">
      <div slot="left" class="item" flex="main:center cross:center" @click="$router.go(-1)">
        <i class="icon-font icon-xtb-back"></i>
      </div>
    </v-header>
    <div class="subMain">
        <div class="selectJobLists" v-for="(item,index) in jobLists">
          <div class="jobType">{{item.type}}</div>
          <div class="selectOptBox">
            <div class="optInforList" flex="box:justify" v-for="(job,dex) in item.alljob" @click="selectJob" v-bind="{typedex:index,jobdex:dex}">
              <span>{{job}}</span>
              <span></span>
              <i v-if="index == Index.typeindex && dex == Index.jobindex" flex="main:center cross:center" class="icon-select-cur selectIcon"></i>
            </div>
          </div>
        </div>

    </div>
  </div>
</template>
<style scoped="">
  .jobType{
    width:100%;
    height:50px;
    line-height: 50px;
    text-align: center;
    color:#a4a9b0;
    display: block;
  }
  .selectOptBox{
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
            Index:{typeindex:0,jobindex:0},
            jobLists:[
              {
                type:'通用岗位',
                alljob:[
                  '销售',
                  '市场',
                  '人力资源',
                  '行政',
                  '公关',
                  '客服',
                  '采购',
                  '技工',
                  '公司职员',
                  '职业经理人',
                  '私营企业主',
                  '中层管理者',
                  '自由职业者',
                ]
              },{
                type:'IT互联网',
                alljob:[
                  '开发工程师',
                  '测试工程师',
                  '设计师',
                  '运营师',
                  '产品经理'
                ]
              },{
                type:'文化传媒',
                alljob:[
                  '编辑策划',
                  '记者',
                  '媒体工作者',
                ]
              },{
                type:'金融',
                alljob:[
                  '咨询',
                  '投行',
                  '保险',
                  '金融分析',
                  '财务'
                ]
              },{
                type:'医疗生物',
                alljob:[
                  '医生',
                  '护士',
                  '宠物医生',
                  '医学研究'
                ]
              },{
                type:'政府组织',
                alljob:[
                  '公务员',
                  '事业单位',
                  '国企工作者',
                  '运动员'
                ]
              },{
                type:'服务业',
                alljob:[
                  '导游',
                  '家政服务',
                  '美容美发',
                  '婚庆摄影',
                  '运动健身'
                ]
              },{
                type:'其他',
                alljob:[
                  '其他'
                ]
              }
            ]
          }
      },
      methods:{
        selectJob:function(event){
            var gettypedex = event.target.getAttribute('typedex');
            var getjobdex = event.target.getAttribute('jobdex');
            this.Index.typeindex = gettypedex;
            this.Index.jobindex = getjobdex;
            var getval = event.target.innerText;
            localStorage.setItem("jobval",getval);
        }
      },
      created:function(){

      }
  }
</script>
