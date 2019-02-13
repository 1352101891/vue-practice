import axios from 'axios'
import constants from './Constants.js'

const httpRequest={
  num:20,//每页的个数

  getInst:function(){
    return axios.create({
      timeout: 1000,
      // 键值对格式
      headers: {'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':'GET,POST'}
    });
  },

  //请求新闻列表
  //channel=头条&start=0&num=20&appkey=fd33d0e0df05c689
  getNewsList:function(channel,start,callback){
    this.getInst()
      .get(constants.jisu.newsListUrl
        ,{params: {
          channel:channel,
          start:start,
          num:this.num,
          appkey: constants.jisu.appkey
        }}
      ).then((response)=>{
        var data=response.data;
        if (data.status==0 && data.msg=='ok') {
          callback(data.result.list)
        }else{
          window.console.log("请求新闻列表失败！"+data.msg);
        }
    })
  },


  //搜索新闻
  //keyword='姚明'&appkey=fd33d0e0df05c689
  searchNews:function(keyword,callback){
    this.getInst()
      .get(constants.jisu.searchNewsUrl
        ,{params: {
          keyword:keyword,
          appkey: constants.jisu.appkey
        }}
      ).then((response)=>{
        var data=response.data;
        if (data.status==0 && data.msg=='ok') {
          callback(data.result.list)
        }else{
          window.console.log("搜索新闻失败！"+data.msg);
        }
    })
  },

  // 请求频道接口
  getNewsChannel:function(callback){
    this.getInst()
      .get(constants.jisu.channelUrl
        ,{params: {
          appkey: constants.jisu.appkey
        }}
      ).then((response)=>{
        var data=response.data;
        if (data.status==0 && data.msg==='ok') {
          callback(data)
        }else{
          window.console.log("请求频道失败！"+data.msg);
        }
    })
  },

 
  //对象内部只能存在键值对，不能写语句
  //所以 function get(){}形式就是错误的写法
  get: function(url) {
    this.getInst().get(url)
    .then(function (response) {
        window.console.log(response)
    }).catch(function (err) {
        window.console.log(err)
    })
  },
  
  post: function(url) {
    this.getInst().post(url)
    .then(function (response) {
        window.console.log(response)
    }).catch(function (err) {
        window.console.log(err)
    })
  }
};
 
export default httpRequest