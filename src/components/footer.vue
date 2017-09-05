<template>
  <footer class="footer">
      <ul>
        <li v-for="(item,index) in lists" :class="{active: item.path == $route.path}">
          <router-link :to="item.path">
            <i class="navIcon" :class="'navIcon'+(index+1)"></i>
            <span>{{item.title}}</span>
          </router-link>
        </li>
      </ul>
  </footer>
</template>
<style>
  .footer{position: absolute;bottom:0px;left:0px;right:0px;height:50px;border-top:1px solid #ddd;text-align: center;background: #fff;}
  .footer ul{display:flex;align-items: center;}
  .footer ul li{font-size:13px;flex:1;-webkit-flex:1;}
  .footer ul li a{display: block;}
  .footer .navIcon{display:block;width:28px;height:28px;margin:2px auto;background-size:100% 100%;background-repeat:no-repeat;}
  .footer .navIcon.navIcon1{background-image: url(/static/images/icon_API.png);}
  .footer .navIcon.navIcon2{background-image: url(/static/images/icon_component.png);}
  .footer .navIcon.navIcon3{background-image: url(/static/images/account.png);}
  .footer .active a{color:#ffa614;}
  .footer .active .navIcon.navIcon1{background-image: url(/static/images/icon_API_HL.png);}
  .footer .active .navIcon.navIcon2{background-image: url(/static/images/icon_component_HL.png);}
  .footer .active .navIcon.navIcon3{background-image: url(/static/images/account_HL.png);}
</style>
<script>
  export default{
      data:function () {
        return{
          lists:[
            {
                path:'/teambuild',
                title:'微团建',
            },
            {
              path:'/courselists',
              title:'课程',
            },
            {
              path:'/account',
              title:'我的',
            }
          ]
        }
      },
    created () {
    },
    methods:{

    }
  }
</script>
