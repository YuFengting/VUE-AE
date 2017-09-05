<template>
  <div>
    <v-content>
      <div class="courseListsBox" >
        <div class="courseListsImg" v-for="item in courseLists">
          <span class="courseImgBox" v-for="list in item.lists">
            <router-link :to="'/coursevideo?id='+ list.id"><img  :src="list.src" /></router-link>
          </span>
        </div>
      </div>
    </v-content>
    <v-footer></v-footer>
  </div>
</template>
<style scoped="">
  .courseListsImg{padding:10px 5px 0;text-align: center;}
  .courseListsImg .courseImgBox{width: 48%;display: inline-block;margin:0 1%;}
  .courseListsImg .courseImgBox img{width: 100%;height:auto;}
</style>
<script>
  export default{
    data:function(){
      return{
        courseLists:[{
          lists:[{
            id:1,
            src:'/static/images/courseImg/course1.png',
          },{
            id:2,
            src:'/static/images/courseImg/course2.png',
          }
          ]
        },{
          lists:[{
            id:3,
            src:'/static/images/courseImg/course3.png',
          },{
            id:4,
            src:'/static/images/courseImg/course4.png',
          }
          ]
        },{
          lists:[{
            id:5,
            src:'/static/images/courseImg/course5.png',
          },{
            id:6,
            src:'/static/images/courseImg/course6.png',
          }
          ]
        },{
          lists:[{
            id:7,
            src:'/static/images/courseImg/course7.png',
          },{
            id:8,
            src:'/static/images/courseImg/course8.png',
          }
          ]
        }]
      }
    }
  }
</script>
