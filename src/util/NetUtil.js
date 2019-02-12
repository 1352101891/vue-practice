import axios from 'axios'
 

var httpRequest={
  getInst:function(){
    return axios.create({
      timeout: 1000,
      // 键值对格式
      headers: {'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':'GET,POST'}
    });
  },

  // $.ajax({
  //    type:"get",
  //       url:"http://api.jisuapi.com/news/get?channel=头条&start=0&num=20&appkey=fd33d0e0df05c689",
  //       dataType:'jsonp',
  
  //       jsonp:'jsoncallback',
  //       //async:false,
  //       success:function(msg){
  //        //alert(msg)
  //       }
  //  });

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