<template>
  <ul class="tree-menu">
    <li v-for="(item, index) in data">
      <span @click="toggle(item, index)">
        <i :class="['icon'
          , item.children && item.children.length ? folderIconList[index] : 'file-text'
          , loading ? loadingIconList[index] : '']">
        </i>
        {{ item[name] || item.menuName }}
      </span>
      <!-- v-if和v-show的区别：1.if只在true条件下有变化，show是css的display属性变化。2.if是重绘操作，show只是隐藏显示 -->
      <tree-menu v-if="scope[index]" :data="item.children"></tree-menu>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'treeMenu',
  props: {
    data: Array,
    name: String,
    loading: Boolean
  },
  data () {
    return {
      folderIconList: [],
      loadingIconList: [],
      scope: {}
    }
  },
  created () {
    this.data.forEach((item, index) => {
      if (item.children && item.children.length) {
        this.folderIconList[index] = 'folder';
      }
    });
  },
  methods: {
    doTask (item,index) {
      //动态给vue对象添加属性，初始化的属性可以动态的与视图绑定，但是后加入的属性是没有这个功能的，
      //调用$set或者Vue.set方法可以后加入属性且和视图绑定
      this.$set(this.scope, index, !this.scope[index]);
      this.folderIconList[index] = this.scope[index] ? 'folder-open' : 'folder';
      this.$emit('getSubMenu', item,()=>{})
    },
    toggle (item, index) {
      this.loadingIconList = [];
      var that=this;
      if (item.children && item.children.length) {
        this.doTask(item,index);
      } else {
        this.loadingIconList[index] = 'loading';

        this.$emit('getSubMenu', item, (subMenuList) => {
          if (subMenuList && subMenuList.length) {
            this.doTask(item,index);
          }
        });
      }
    }
  }
}
</script>

<style scoped>
.tree-menu {
  list-style: none;
}
.tree-menu li {
  line-height: 3;
}
.tree-menu li span {
  cursor: default;
}
.icon {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  vertical-align: -2px;
}

span{
  padding: 10px 50px 10px 20px;
  background:#ffffff;box-shadow: 1px 5px 20px #888888;
}

.icon.folder {
  background-image: url(../../assets/folder.png);
}
.icon.folder-open {
  background-image: url(../../assets/folder-open.png);
}
.icon.file-text {
  background-image: url(../../assets/file-text.png);
}
.icon.loading {
  background-image: url(../../assets/loading.gif);
  background-size: 15px;
}
</style>
