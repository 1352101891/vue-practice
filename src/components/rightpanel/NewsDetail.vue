<template>
  <div class="rightroot">
    <div class="wrap">
      
        <div id='arror' @click="back">&lt;-返回</div>
        <h3>{{news.title}}</h3>
        <p>{{news.content}}</p>
        <div class="wrap1">
          <p>作者：{{news.username}}</p><p>时间：{{news.time}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newsdetail',
  data(){
    return{
      errorMess:'',
      news:{},
    }
  },
  created: function () {
    this.news=this.$route.params.news;
    this.getData(0);
  },
  methods:{
    getData:function (page) {
      var that=this;
      setTimeout(() => {
        
      }, 500);
    },
    back:function(){
      this.$router.replace('/user/main/listview');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
.rightroot{
  width: 80%;
  height: 500px;
  float: left;
  position: relative;
  background: #e3faf0;
  display: flex; 
  flex-direction: row; 
  justify-content: space-between; 
  align-content: center; 
  align-items: center; 
}

.wrap{
  width: 80%;
  height: 400px;
  position: relative;
  margin: auto;
  padding: 20px;
  background:#ffffff;box-shadow: 5px 5px 20px #8cb4fd;
  display: flex; 
  flex-direction: column; 
  align-content: center; 
}


.wrap1{
  position: relative;
  height: auto;
  width: auto;
  margin-left: 70%;
  display: flex; 
  flex-direction: column; 
  align-content: space-between; 
}

p{
  display: block;
  float: left;
}
  #arror{
    width: 100px;;
    height: 30px;
    line-height: 30px;
    background: #e3faf0;box-shadow: 5px 5px 20px #8cb4fd;
  }
  #arror:hover{
    color:rgb(78, 78, 250)
  }
  #arror:active {color: #0000FF}


</style>
