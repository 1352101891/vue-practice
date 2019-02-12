const myData ={ myData:[
  {
    id: '1',
    menuName: '新闻列表',
    menuCode: '10'
  },
  {
    id: '2',
    menuName: '新闻详情',
    menuCode: ''
  },
  {
    id: '3',
    menuName: '新增新闻',
    menuCode: '30',
    children: [
      {
        menuName: '订单列表',
        menuCode: '31'
      },
      {
        menuName: '退货列表',
        menuCode: '32',
        children: []
      }
    ]
  }
],subMenuData1 : {
  parentId: '1',
  children: [
    {
      menuName: '用户管理',
      menuCode: '11'
    },
    {
      id: '12',
      menuName: '角色管理',
      menuCode: '12',
      children: [
        {
          menuName: '管理员',
          menuCode: '121'
        },
        {
          menuName: 'CEO',
          menuCode: '122'
        },
        {
          menuName: 'CFO',
          menuCode: '123'
        },
        {
          menuName: 'COO',
          menuCode: '124'
        },
        {
          menuName: '普通人',
          menuCode: '124'
        }
      ]
    },
    {
      menuName: '权限管理',
      menuCode: '13'
    }
  ]
}, subMenuData2: {
  parentId: '2',
  children: [
    {
      menuName: '商品一',
      menuCode: '21'
    },
    {
      id: '22',
      menuName: '商品二',
      menuCode: '22',
      children: [
        {
          menuName: '子类商品1',
          menuCode: '221'
        },
        {
          menuName: '子类商品2',
          menuCode: '222'
        }
      ]
    }
  ]
}};

export default myData