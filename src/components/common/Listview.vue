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
          infinite-scroll-distance="30" class="footer">
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
        window.console.log('keyword开始加载更多！');
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
          if (this.util.isNull(result)) {
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
  height: auto;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: start; 
  align-content: center; 
 }

li{
  line-height: 3;
  padding: 10px 50px 10px 20px;
  background:#ffffff;box-shadow: 1px 5px 20px #888888;
}
.footer{
  width: auto;
  height: auto;
  margin: auto;
}

</style>
