<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld @transformClick='clickevent' v-bind="message"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return{ 
      message:{
        A:'渣渣辉',
        B:'来点我啊！',
        username:'1234',
        password:'123'
      },
    }
  },

  components: {
    HelloWorld,
  },
  created(){
    this.message.A='我来测试下!'
  },
  methods:{
    clickevent(){
      this.message.B='我被点击了！'
    }
  }
}
</script>

<style>
html,body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>

