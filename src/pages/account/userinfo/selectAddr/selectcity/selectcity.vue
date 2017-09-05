<template>
  <div class="wrapper">
    <v-header title="选择地区">
      <div slot="left" class="item" flex="main:center cross:center" @click="$router.go(-1)">
        <i class="icon-font icon-xtb-back"></i>
      </div>
    </v-header>
    <div class="subMain">
      <div class="selectOptBox">
        <div class="typeBox">{{provinceName}}</div>
        <div class="selectWrap">
          <router-link :to="'/selectdistrict?provinceindex='+ provinceindex +'&cityindex='+index" v-for="(item,index) in allcity">
            <div class="optInforList" flex="box:justify" >
              <span>{{item}}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped="">
  .typeBox{
    width:100%;
    height:50px;
    line-height: 50px;
    color:#a4a9b0;
    display: block;
    padding-left: 10px;
  }
  .selectWrap{
    /*margin-top: 20px;*/
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
  .selectOptBox a:last-child .optInforList{
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
  import area from '../../../../../../static/data/area'
  export default{
    data:function(){
      return {
        allcity:[],
        provinceName:'',
        provinceindex:''
      }
    },
    methods:{

    },
    created:function(){
        var provinceindex = this.$route.query.index;
        this.provinceName = area[100000][provinceindex]
        this.allcity = area[provinceindex]
        this.provinceindex = provinceindex;
    }
  }
</script>
