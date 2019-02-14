<template>
    <div class="login">
      <div class="wrapper">
      <div class="input">账号：<input type="text" placeholder="请输入6位以上的数字" v-model="username"/><br>{{tip_user}}</div>
      <div class="input">密码：<input type="password" v-model="password"/>{{tip_pass}}</div>
      <div class="submit"  @click='clicklogin'>
        <div id='normal' v-show="!isLoading" @click="login">登录</div>
        <div v-show="isLoading" id='circle'></div> 
      </div>
      </div>
    </div>
</template>

<script>
import constants from '../util/Constants'

export default {
  name: 'Login',
  props:{
    username:String,
    password:String,
  },
  data(){
    return{
      tip_user:'',
      tip_pass:'',
      isLoading:false,
    }
  },
  created: function () {
    this.isLoading=false;
  },
  watch:{
    username:function (newval) {
      if (newval.length<3) {
        this.tip_user="少于3位数账号"
      }else{
        this.tip_user=""
      }
    }
  },
  methods:{
    clicklogin:function () {
    },
    saveUser:function(){
      // 存储值：将对象转换为Json字符串
      this.util.saveToCache('username', this.username);
      // 取值时：把获取到的Json字符串转换回对象
      var un = this.util.getCache('username');
    },
    login:function () {
      if (this.isLoading) {
        return;
      }
      this.isLoading=true;
      if (this.username.length<3) {
        this.tip_user="少于3位数账号"
        this.isLoading=false;
        return;
      }else{
        this.tip_user=""
      }
      var vm=this;
      const un=this.username;
      const pd=this.password;
      const userlist=constants.users;
      setTimeout(() => {
        for (const el in userlist) {
          if (un==userlist[el].username
          && pd==userlist[el].password) {
            alert("成功登陆！");
            vm.$emit('loginResult',true) 
            vm.isLoading=false;  
            vm.saveUser();        
            return;
          }
        }
        alert("不存在账号，登陆失败！");
        vm.username='';
        vm.password='';
        vm.isLoading=false;
      }, 1000);
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    background-image: url('../assets/bg.jpg');
    margin: auto;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    align-items:space-between;
  }

  .wrapper{
    background: #54c6f3;
    width: 20%;
    height: auto;
    margin: auto;
    overflow: hidden;
    align-content:space-between;
  }
  .input{
    margin: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: auto;
    height: auto;
    display: block;
  }

  .submit{
    background: #cccccc;
    margin: auto;
    width: 200px;
    height: 30px;
    display: block;
    align-content: center;
  }
  #normal{
    width: 200px;
    height: 30px;
    line-height: 30px;
  }
  #normal:hover{
    color:rgb(78, 78, 250)
  }
  #normal:active {color: #0000FF}

  #circle{
    line-height: 30px;
    margin: auto;
    width: 20px;
    height: 20px;
    border: 5px #cccccc solid;
    border-left-color: #ff5500;
    border-right-color:#0c80fe;
    border-radius: 100%;
    animation: loading1 1s infinite linear;
  }
  @keyframes loading1{
      from{transform: rotate(0deg)}to{transform: rotate(360deg)}
  }
</style>
