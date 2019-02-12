<template>
  <div class="rightroot">
      <div class="wrap">
        <table>
          <caption><h2>新增新闻</h2></caption>
          <tr>
            <th>
             标题：<input class="input_title" v-model="title" type="text" placeholder="请输入3位字符以上的标题"/>
            </th>
          </tr>
          <tr>
            <th>
             内容：<input class="input_content" v-model="content" type="textarea" placeholder="请输入20位字符以上的新闻内容"/>
            </th>
          </tr>
          <tr>
            <th>
              <button class="submit" @click="submit">提交</button>
            </th>
          </tr>
        </table>
      </div>
  </div>
</template>

<script>
import constants from '../../util/Constants.js'

export default {
  name: 'addnews',
  data(){
    return{
      newslist: [], // 显示菜单名称的属性
      title:'',
      content:'',
      isLoading:true,
      isSuccess:false,
      errorMess:''
    }
  },
  created: function () {
    this.getData(0);
  },
  methods:{
    submit:function(){
      if(!window.localStorage){
          alert("浏览器不支持localstorage");
          return false;
      }else{
          var un=sessionStorage.getItem('username');
          var NewsEntity = {
              username: un,
              time: this.getNowFormatDate(),
              title:this.title,
              content:this.content,
          };
          this.util.saveNewsToDisk(NewsEntity);
          this.$router.replace('/user/main/listview');
      }
    },
    //获取当前时间，格式YYYY-MM-DD
    getNowFormatDate:function() {
          var date = new Date();
          var seperator1 = "-";
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var strDate = date.getDate();
          if (month >= 1 && month <= 9) {
              month = "0" + month;
          }
          if (strDate >= 0 && strDate <= 9) {
              strDate = "0" + strDate;
          }
          var currentdate = year + seperator1 + month + seperator1 + strDate;
          return currentdate;
    },
    getData:function (page) {
      var that=this;
      setTimeout(() => {
        that.newslist=constants.newsList;
        that.isLoading=false;
        that.isSuccess=true;
      }, 500);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rightroot{
  width: 80%;
  height: 500px;
  float: left;
  align-items: center;
  position: relative;
  background: #e3faf0;
}

.wrap{
  width: 80%;
  height: 500px;
  position: absolute;
  display: flex; 
  flex-direction: row; 
  justify-content:center;  
}
th{
    padding: 10px;
    width: auto;
    height: 20px;  
}

.input_title{
  width: 300px;
  height: auto;
}

button{
  margin-top: 20px;
  width: 200px;
  height: 30px;
}

.input_content{
  width: 300px;
  height: 100px;
}
table{
  padding: 20px;
  background:#ffffff;box-shadow: 5px 5px 20px #8cb4fd;
}
</style>
