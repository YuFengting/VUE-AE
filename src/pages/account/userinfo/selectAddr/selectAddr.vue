<template>
  <div class="wrapper">
    <v-header title="选择地区">
      <div slot="left" class="item" flex="main:center cross:center" @click="$router.go(-1)">
        <i class="icon-font icon-xtb-back"></i>
      </div>
    </v-header>
    <div class="subMain">
      <div class="selectOptBox">
        <router-link :to="'/selectcity?index='+ index" v-for="(item,index) in allprovince">
          <div class="optInforList" flex="box:justify" >
            <span>{{item}}</span>
          </div>
        </router-link>

      </div>
    </div>
  </div>
</template>
<style scoped="">
  .selectOptBox{
    margin-top: 20px;
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
  import area from '../../../../../static/data/area'
  export default{
    data:function(){
      return {
        allprovince:[]
      }
    },
    methods:{

    },
    created:function(){
        this.allprovince = area[100000]
    }
  }
</script>
