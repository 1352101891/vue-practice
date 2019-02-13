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

  isNull:function (a) { 
      // String    
      if(a == "" || a == null || a == undefined){ // "",null,undefined
          return true;
      }
      return false;
  }
}

export default util