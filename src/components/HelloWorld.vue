<template>
  <div class="hello">
      <h1  v-show="!isDo" @click='click_H'>{{ A }}{{ B }}{{ isDo }}</h1>
      <Login  @loginResult='loginResult' v-show="!isDo" :username="username" :password="password"/>
      <router-view></router-view>
  </div>
</template>

<script>
import Login from './Login.vue'

export default {
  name: 'HelloWorld',
  components:{
       Login,
  },
  props:{
        A:String,
        B:String,
        loading: Boolean,
        isDo:Boolean,
        username:String,
        password:String,
      },
  created: function () {   
    var un= this.util.getCache('username');
    if (this.util.isNull(un)) {
      this.isDo=false
      this.loading=false 
    }else{
      this.isDo=true;
      this.loading=false;
    }
  },
  methods:{
    click_H:function () {
      if(this.util.isNull(this.username)){
        alert("用户名不准为空！");
      }
      this.$emit('transformClick')
    },
    loginResult:function (result) {
      this.isDo=result;
      this.$router.push('/user/main/listview')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  height: 100%;
}

h3 {
  margin: 40px 0 0;
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
