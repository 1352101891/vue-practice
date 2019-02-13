<template>
  <div class="content">
      <h1>欢迎用户‘{{username}}’来到vue管理平台</h1>
      <!-- route outlet -->
      <div class="menu">
        <treeMenu  :data="theData" :name="menuName" @getSubMenu="getSubMenu"></treeMenu>
      </div>
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view ></router-view>

  </div>
</template>

<script>
import treeMenu from './common/TreeMenu.vue'
import myData from '../util/Constants1'

export default {
  name: 'rightcontent',
  data(){
    return{
      theData: myData.myData,
      username: '',
      menuName: 'menuName', // 显示菜单名称的属性
    }
  },
  components:{
      treeMenu  
  },
  props:{
        A:String,
        B:String,
        isDo:Boolean,
        password:String,
      },
  created: function () {
    this.isDo=false;
    this.username= this.util.getCache('username');
  },
  methods:{
    clickitem:function (params) {
        alert("你点击了："+params);
    },
    click_H:function () {
      this.$emit('transformClick')
    }, 
    itemClick:function(menuItem){
      if (menuItem.menuName==='新增博客') {
        this.$router.replace('/user/main/addnews');
      }else if (menuItem.menuName==='博客列表') {
        this.$router.replace('/user/main/listview');
      }else if (menuItem.menuName==='新闻列表') {
        this.$router.replace('/user/main/scrollnews');
      }
    },
    getSubMenu (menuItem, callback) {
      this.itemClick(menuItem);
      this.loading = true;
      if (menuItem.id === myData.subMenuData1.parentId) {
        this.loading = false;
        menuItem.children = myData.subMenuData1.children;
        callback(menuItem.children);
      }

      setTimeout(() => {
        if (menuItem.id === myData.subMenuData2.parentId) {
          this.loading = false;
          menuItem.children = myData.subMenuData2.children;
          callback(menuItem.children);
        }
      }, 2000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.menu{
  position: relative;
  float: left;
  width: 20%;
  height: auto;
  background: #bababa;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
