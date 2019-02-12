<template>
  <div class="content">
     <listview @getMoreData="getMoreData">
        <!-- 将 `slotProps` 定义为插槽作用域的名字 -->
        <template slot-scope="slotProps">
          <!-- 为待办项自定义一个模板，-->
          <!-- 通过 `slotProps` 定制每个待办项。-->
          <span> {{ slotProps.item.title }}</span>
        </template>
     </listview>
  </div>
</template>

<script>
import listview from '../common/Listview.vue'
import constants from '../../util/Constants.js'

export default {
  name: 'scrollnews',
  data(){
    return{
      data:[],
      loading:false,
    }
  },
  components:{
      listview  
  },
  props:{
      },
  created(){
    this.data=constants.newsList;
    this.data=this.data.concat(this.data);
  },
  methods:{
    getMoreData:function(page,callback){
      this.xRequest.get('/api?channel=头条&start=0&num=20&appkey=fd33d0e0df05c689');
      this.data=this.data.concat(constants.newsList);
      setTimeout(() => {
        callback(this.data);
      }, 500);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.content{
  width: 80%;
  height: 500px;
  float: left;
  align-items: center;
  position: relative;
  background: #e3faf0;
}

span{
  width: 80%;
}
</style>
