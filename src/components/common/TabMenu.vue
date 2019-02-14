<template>
  <div id="rightroot">
    <!-- <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
      <el-radio-button label="top">top</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
      <el-radio-button label="bottom">bottom</el-radio-button>
      <el-radio-button label="left">left</el-radio-button>
    </el-radio-group> -->
  <!-- <el-tabs v-model="activeName" 
      :tab-position="tabPosition"   @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs> -->

    <el-tabs v-model="activeName" :tab-position="tabPosition" 
    @tab-click="handleClick">
      <el-tab-pane v-for="(item, index) in menuData" :label="item" :name="item"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    name: 'tabmenu',
    data() {
      return {
        activeName:'',
        tabPosition: 'top',
        loading:false,
      };
    },
    props:{
     menuData:Array,
    },
    create(){
    },
    mounted(){
     this.activeName=this.menuData[0];
    },  
    methods:{
      handleClick:function(tab, event){
         this.$emit('clickTab',tab);
        //  window.console.log(tab, event);
      }
    }
  };
</script>
<style scoped>
.rightroot{
  width: 80%;
  height: auto;
  margin: auto;
  background: #e3faf0;
}
</style>
