import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index/index'
import TeamBuild from '../pages/teambuild/teambuild'                            //微团建
import CourseLists from '../pages/courselists/courselists'                      //课程
import CourseDetail from '../pages/coursedetail/cousedetail'                     //微团建课程详情
import CourseVideo from '../pages/courselists/coursevideo/coursevideo'         //课程视频
import Account from  '../pages/account/account'                                   //个人中心
import MyMsg from '../pages/account/mymsg/mymsg'                                   //我的消息
import MyCollect from '../pages/account/myCollect/myCollect'                     //我的收藏
import Setting from '../pages/account/setting/setting'                            //设置
import AboutUs from '../pages/account/aboutus/aboutus'                            //关于我们
import UserInfo from '../pages/account/userinfo/userinfo'                         //个人资料
import NikeName from '../pages/account/userinfo/nikename/nikename'               //修改昵称
import SelectSex from '../pages/account/userinfo/selectsex/selectsex'            //选择性别
import CompanyName from '../pages/account/userinfo/companyname/companyname'     //填写公司名称
import CompanyAddr from '../pages/account/userinfo/companyaddr/companyaddr'     //填写公司名称
import SelectJob from '../pages/account/userinfo/selectjob/selectjob'           //选择职业
import SelectAddr from '../pages/account/userinfo/selectAddr/selectAddr'        //选择地区
import SelectCity from '../pages/account/userinfo/selectAddr/selectcity/selectcity'   //选择地区
import SelectDistrict from '../pages/account/userinfo/selectAddr/selectdistrict/selectdistrict' //选择地区

Vue.use(Router)

  const routes = [
    { path: "/", redirect: "/teambuild" },//重定向,指向了home组件
    {
      path:'/teambuild',
      component:TeamBuild,
      meta:{
        title:'微团建'
      }
    },{
      path:'/courselists',
      component:CourseLists,
      meta:{
        title:'课程'
      }
    },{
      path:'/account',
      component:Account,
      meta:{
        title:'个人中心'
      }
    },{
      path:'/coursedetail',
      component:CourseDetail
    },{
      path:'/coursevideo',
      component:CourseVideo
    },{
      path:'/mymsg',
      component:MyMsg,
      meta:{
        title:'我的消息'
      }
    },{
      path:'/myCollect',
      component:MyCollect,
      meta:{
        title:'我的收藏'
      }
    },{
      path:'/aboutus',
      component:AboutUs,
      meta:{
        title:'关于我们'
      }
    },{
      path:'/setting',
      component:Setting,
      meta:{
        title:'设置'
      }
    },{
      path:'/userinfo',
      component:UserInfo,
      meta:{
        title:'个人资料'
      }
    },{
      path:'/nikename',
      component:NikeName,
      meta:{
        title:'修改昵称'
      }
    },{
      path:'/selectsex',
      component:SelectSex,
      meta:{
        title:'选择性别'
      }
    },{
      path:'/companyname',
      component:CompanyName,
      meta:{
        title:'公司名称'
      }
    },{
      path:'/companyaddr',
      component:CompanyAddr,
      meta:{
        title:'公司地址'
      }
    },{
      path:'/selectjob',
      component:SelectJob,
      meta:{
        title:'职业'
      }
    },{
      path:'/selectAddr',
      component:SelectAddr,
      meta:{
        title:'选择地区'
      }
    },{
      path:'/selectcity',
      component:SelectCity,
      meta:{
        title:'选择地区'
      }
    },{
      path:'/selectdistrict',
      component:SelectDistrict,
      meta:{
        title:'选择地区'
      }
    }
  ]

const router = new Router({
  routes
})

router.afterEach(function(url){
  if(url.meta.title){
    document.title = url.meta.title;
  }
})

export default router;
