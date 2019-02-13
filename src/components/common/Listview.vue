<template>
  <div class="rightroot">
      <ul class="ul_wraper">
        <li class="li_item" v-for="item in data">
          <!-- 使用插槽进行item布局，扩展性更强 -->
             <slot v-bind:item="item">无数据</slot>
        </li>
      </ul> 
      <!--v-infinite-scroll-->
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" 
          infinite-scroll-distance="30" class="ul_wraper">
                .....加载中
      </div>	   
  </div>
</template>

<script>
export default {
  name: 'listview',
  data(){ 
		return {
      data:[],
      loading: false,
			page:1,
		}
  },
  props:{
    keyword:String,
  },
  mounted(){
  },
   watch: {
    keyword: function (newS, oldS) {
      if (newS!=oldS) {
        this.data=null;
        this.page=1;
        this.loading=false;
        this.loadMore();
      }
    }
  },
  methods: {
    loadMore:function(){
      var that=this;
      if (!that.loading) {
        that.loading=true;
        that.$emit('getMoreData',that.page,(result)=>{
          that.loading=false;
          if (result && result.length>0) {
            that.data=that.data.concat(result);
            that.page++;
          }
        });
      }
    }
  }
}
</script>

<style scoped>
.rightroot{
  width: 80%;
  height: 500px;
  float: left;
  align-items: center;
  position: relative;
  background: #e3faf0;
}

li{
  line-height: 3;
  padding: 10px 50px 10px 20px;
  background:#ffffff;box-shadow: 1px 5px 20px #888888;
}

</style>
