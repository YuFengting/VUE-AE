<template>
  <div>
    <v-content>
        <div class="teambuildBox">
          <img class="bannerImg" src="/static/images/courseImg/courseImg1.jpg" />
          <nav class="teambuildNav">
            <div class="sectionTitle" :class="{active:!this.$route.query.tab}">
              <router-link to="/">微团建</router-link>
            </div>
            <div class="sectionTitle" :class="{active:this.$route.query.tab == 'scene'}">
              <router-link to="/?tab=scene">情景模式</router-link>
            </div>
            <div class="sectionTitle" :class="{active:this.$route.query.tab == 'topic'}">
              <router-link to="/?tab=topic">主题拓展</router-link>
            </div>
            <div class="sectionTitle" :class="{active:this.$route.query.tab == 'action'}">
              <router-link to="/?tab=action">毅行</router-link>
            </div>
          </nav>
        </div>
        <div class="showTeamBuildLists" v-if="!this.$route.query.tab">
          <router-link :to="'/coursedetail?id='+item.id" v-for="item in vteambuild">
            <div class="courseLists" >
              <img class="courseImg" :src="item.img" />
              <div class="courseInfor">
                <p class="courseTitle ellipsis1">{{item.name}}</p>
                <p class="courseContent ellipsis2">{{item.introduce}}</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="showTeamBuildLists" v-if="this.$route.query.tab == 'scene'">
          <router-link :to="'/coursedetail?id='+item.id" v-for="item in sceneExper">
            <div class="courseLists" >
              <img class="courseImg" :src="item.img" />
              <div class="courseInfor">
                <p class="courseTitle ellipsis1">{{item.name}}</p>
                <p class="courseContent ellipsis2">{{item.introduce}}</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="showTeamBuildLists" v-if="this.$route.query.tab == 'topic'">
          <router-link :to="'/coursedetail?id='+item.id" v-for="item in themeExpand">
            <div class="courseLists" >
              <img class="courseImg" :src="item.img" />
              <div class="courseInfor">
                <p class="courseTitle ellipsis1">{{item.name}}</p>
                <p class="courseContent ellipsis2">{{item.introduce}}</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="showTeamBuildLists" v-if="this.$route.query.tab == 'action'">
          <router-link :to="'/coursedetail?id='+item.id" v-for="item in Eaction">
            <div class="courseLists" >
              <img class="courseImg" :src="item.img" />
              <div class="courseInfor">
                <p class="courseTitle ellipsis1">{{item.name}}</p>
                <p class="courseContent ellipsis2">{{item.introduce}}</p>
              </div>
            </div>
          </router-link>
        </div>
    </v-content>
    <v-footer></v-footer>
  </div>
</template>
<style scoped="">
  .bannerImg{width:100%;height:auto;display: block;}
  .teambuildNav{display: flex;flex-direction: row;height:50px;line-height:50px;background: #f2f2f2;text-align: center;}
  .teambuildNav .sectionTitle{flex:1;-webkit-flex:1;}
  .teambuildNav .sectionTitle a{display: block;}
  .teambuildNav .sectionTitle.active a{color:#ffa614;}
</style>
<script>
  export default{
    data:function(){
      return{
        vteambuild: [
          {
            id: '1-0',
            img: '/static/images/courseImg/courseImg1.jpg',
            name: '《微团建》—您身边的团建专家',
            introduce: '团队建设 — 1天'
          },
          {
            id: '1-1',
            img: '/static/images/courseImg/courseImg2.jpg',
            name: '企业文化—共建未来城',
            introduce: '企业文化，团队建设课程'
          },
          {
            id: '1-2',
            img: '/static/images/courseImg/courseImg3.jpg',
            name: '团建基地介绍-您身边的团建基地',
            introduce: '基地介绍-您身边的团建基地'
          },
          {
            id: '1-3',
            img: '/static/images/courseImg/courseImg4.jpg',
            name: '《国家宝藏》-情景体验式培训课程',
            introduce: '真人秀、剧情介绍、寻宝探秘、游山玩水、解谜团、大冒险......'
          },
          {
            id: '1-4',
            img: '/static/images/courseImg/courseImg13.jpg',
            name: '《全民总动员》',
            introduce: '《全民总动员》 — 团队建设'
          },
          {
            id: '1-5',
            img: '/static/images/courseImg/courseImg6.jpg',
            name: '《艺术画廊》',
            introduce: '《艺术画廊》 — 团队建设培训课程'
          },
          {
            id: '1-6',
            img: '/static/images/courseImg/courseImg7.jpg',
            name: '《彩虹跑》',
            introduce: '《彩虹跑》 — 青春正能量，奔跑吧'
          }
        ],
        sceneExper: [
          {
            id: 7,
            img: '/static/images/courseImg/courseImg8.jpg',
            name: '《石油寡头》',
            introduce: '《石油寡头》 — 情景体验式培训课程'
          },
          {
            id: 8,
            img: '/static/images/courseImg/courseImg9.jpg',
            name: '《沙漠掘金》',
            introduce: '《石油寡头》 — 情景体验式培训课程'
          },
          {
            id: 9,
            img: '/static/images/courseImg/courseImg10.jpg',
            name: '《西部大开发》',
            introduce: '《石油寡头》 — 情景体验式培训课程'
          },
          {
            id: 10,
            img: '/static/images/courseImg/courseImg11.jpg',
            name: '《决战黄金岛》',
            introduce: '《石油寡头》 — 情景体验式培训课程'
          },
          {
            id: 11,
            img: '/static/images/courseImg/courseImg12.jpg',
            name: '《收获季节》',
            introduce: '《石油寡头》 — 情景体验式培训课程'
          }
        ],
        themeExpand: [
          {
            id: 12,
            img: '/static/images/courseImg/courseImg13.jpg',
            name: '助跑你的新人',
            introduce: '新员工培训 — 助跑你的新人'
          },
          {
            id: 13,
            img: '/static/images/courseImg/courseImg14.jpg',
            name: '《团队建设》',
            introduce: '打造高绩效团队 — 团队建设'
          }
        ],
        Eaction: [
          {
            id: 2,
            img: '/static/images/courseImg/courseImg3.jpg',
            name: '团建基地介绍-您身边的团建基地',
            introduce: '基地介绍-您身边的团建基地'
          },
          {
            id: 3,
            img: '/static/images/courseImg/courseImg4.jpg',
            name: '《国家宝藏》-情景体验式培训课程',
            introduce: '真人秀、剧情介绍、寻宝探秘、游山玩水、解谜团、大冒险......'
          },
          {
            id: 4,
            img: '/static/images/courseImg/courseImg13.jpg',
            name: '《全民总动员》',
            introduce: '《全民总动员》 — 团队建设'
          },
        ],
      }
    },
    created(){
//        console.log(this.$route);
    },
    methods:{

    }
  }
</script>
