<template>
  <div class="wrapper">
    <v-header title="个人资料">
      <div slot="left" class="item" flex="main:center cross:center" @click="$router.push('/account')">
        <i class="icon-font icon-xtb-back"></i>
      </div>
    </v-header>
    <div class="subMain">
      <div class="userInforLists">
        <div class="list" flex="box:justify">
          <div class="label">头像</div>
          <div flex="main:right">
            <img  class="headImg" src="/static/images/logo.jpg" />
          </div>
          <span class="arrowBox">
            <i class="icon-arrow"></i>
          </span>
        </div>
        <router-link to="/nikename">
          <div class="list" flex="box:first">
            <div class="label">昵称</div>
            <div flex="main:right" >
              <div v-if="nikename.length > 0" class="userInforTxt">{{nikename}}</div>
              <div v-else class="disabled">请输入您的昵称</div>
            </div>
          </div>
        </router-link>
        <router-link to="/selectsex">
          <div class="list" flex="box:first">
            <div class="label">性别</div>
            <div flex="main:right" >
              <div v-if="sextype.length > 0" class="userInforTxt">{{sextype}}</div>
              <div v-else class="disabled">请选择您的性别</div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="userInforLists">
        <router-link to="/selectAddr">
          <div class="list" flex="box:first">
            <div class="label">地区</div>
            <div flex="main:right" >
              <div v-if="provinceSelName" class="userInforTxt">{{provinceSelName}}-{{citySelName}}-{{districtSelName}}</div>
              <div v-else class="disabled">请选择您所在的地区</div>
            </div>
          </div>
        </router-link>
        <router-link to="/selectjob">
          <div class="list" flex="box:first">
            <div class="label">职业</div>
            <div flex="main:right" >
              <div v-if="userjob.length > 0" class="userInforTxt">{{userjob}}</div>
              <div v-else class="disabled">请选择您的职业</div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="userInforLists">
        <router-link to="/companyname">
          <div class="list" flex="box:first">
            <div class="label">公司名称</div>
            <div flex="main:right" >
              <div v-if="companyname.length > 0" class="userInforTxt">{{companyname}}</div>
              <div v-else class="disabled">请填写公司名称</div>
            </div>
          </div>
        </router-link>
        <router-link to="/companyaddr">
          <div class="list" flex="box:first">
            <div class="label">公司地址</div>
            <div flex="main:right" >
              <div v-if="companyAddr.length > 0" class="userInforTxt">{{companyAddr}}</div>
              <div v-else class="disabled">请填写公司地址</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped="">
  .userInforLists{padding-left:20px;background:#fff;margin-top:10px;}
  .userInforLists .list{border-bottom:1px solid #e5e5e5;height:60px;line-height:60px;padding-right:20px;font-size:16px;}
  .userInforLists a:last-child .list{border-bottom:0 none;}
  .userInforLists .list .headImg{width:40px;height:40px;border-radius: 50%;margin-top:10px;}
  .userInforLists .list .arrowBox{position:relative;width:20px;height:100%;}
  .userInforLists .list .icon-arrow{right:0px;border-color:transparent transparent transparent #e4e5e5;}

  .userInforTxt{max-width:75%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align: right;padding:10px 0;line-height:40px;pointer-events: auto;}
</style>
<script>
  import area from '../../../../static/data/area'
  export default{
      data:function(){
          return {
            userjob:'',
            nikename:'',
            sextype:'',
            companyname:'',
            companyAddr:'',
            provinceSelName: '',
            citySelName: '',
            districtSelName: ''
          }
      },
    methods:{
    },
    created:function(){
      var nikename =  localStorage.getItem('nikename');
      var compname = localStorage.getItem('compname');
      var compaddr = localStorage.getItem('compaddr');
      var job = localStorage.getItem("jobval");
      var sex = localStorage.getItem("sex");
      if(job){
        this.userjob = job
      }
      if(sex){
        this.sextype = sex
      }
      if(nikename){
          this.nikename = nikename
      }
      if(compname){
          this.companyname = compname
      }
      if(compaddr){
        this.companyAddr = compaddr
      }
      var provinceindex = this.$route.query.provinceIndex;
      var cityindex = this.$route.query.cityIndex;
      var  districtindex = this.$route.query.districtIndex;
      if(provinceindex){
        this.provinceSelName = area[100000][provinceindex];
        this.citySelName = area[provinceindex][cityindex];
        this.districtSelName = area[cityindex][districtindex];
      }

    },
    destroyed:function(){
//      localStorage.removeItem("jobval")
    }
  }
</script>
