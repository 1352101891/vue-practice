var util={
  saveToCache:function(key,value) {
      sessionStorage.setItem(key, value);
  },
  
  getCache:function(key) {
    return sessionStorage.getItem(key);
  },
  /**
   * @param {*} value 新闻对象
   */ 
  saveNewsToDisk:function(value){
       //主逻辑业务
       var storage=window.localStorage;
       var newsliststr=storage.getItem('NewsList');
       var userListEntity = [];
       if (!this.isNull(newsliststr)) {
          userListEntity=JSON.parse(newsliststr);
       }
        userListEntity.push(value);
        newsliststr=JSON.stringify(userListEntity);
        // //写入a字段
        // storage["a"]=1;
        // //写入b字段
        // storage.a=1;
        //写入news字段
        storage.setItem('NewsList',newsliststr);
  },

  /**
   * 获取新闻列表
   */
  getNewsFromDisk:function(){
    //主逻辑业务
    var storage=window.localStorage;
    var newsliststr=storage.getItem('NewsList');
    var userListEntity = [];
    if (!this.isNull(newsliststr)) {
        userListEntity=JSON.parse(newsliststr);
    }
    return userListEntity;
  },

 /**
   * @param {*} value 保存数据到磁盘
   */ 
  saveDataToDisk:function(key,value){
    //主逻辑业务
    var storage=window.localStorage;
    if (this.isNull(value)) {
      return;
    }
    var str=JSON.stringify(value);
     // //写入a字段
     // storage["a"]=1;
     // //写入b字段
     // storage.a=1;
     //写入news字段
     storage.setItem(key,str);
  },

  /**
  * 从磁盘获取缓存数据
  */
  getDataFromDisk:function(key){
    //主逻辑业务
    var storage=window.localStorage;
    var liststr=storage.getItem(key);
    if (this.isNull(liststr)) {
      return;
    }
    var result=JSON.parse(liststr);
    return result;
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
  
  //判断对象是否为空
  isNull:function (a) { 
      // String    
      if(a == "" || a == null || a == undefined){ // "",null,undefined
          return true;
      }
      return false;
  }
}

export default util