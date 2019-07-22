// 用mockjs模拟生成数据
var Mock = require('mockjs');
let mr = Mock.Random;//提取mock的随机对象

//随机id和图片
let mapData = (n) => {
  var data = [];
  for (var i = 1; i <= n; i++) {
    data.push({
      id: i,
      title: "@ctitle(8,12)",
      des: "@csentence(10, 20)",
      time: "@integer(1553425967486,1553475967486)",
      detail:{
        auth:"@cname()",
        content:"@cparagraph(10,40)",
        auth_icon:mr.image('50x50', mr.color(), mr.cword(1))
      }
    })
  }
  return data
};

//json-server 要对象||函数(返回mock后的数据)
module.exports = {
  ...Mock.mock({
    // 'home': mapData(32),//解决 auth_icon 不随机
    'home|50': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title: "@ctitle(10,15)",//标题型中文4到8个字
        sub_title: "@ctitle(8,15)",
        img: mr.image('100x100', mr.color(), mr.cword(4,10)),
        price:'￥'+ '@float(10, 100, 1, 2)',
        time: "@integer(1553425967486,1553475967486)",
        detail:{
          icon:mr.image('20x20', mr.color(), mr.cword(1,2)),//20X20尺寸
          content:"@cparagraph(40,100)"//正文
        }
      }
    ],
    'special|50': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title: "@ctitle(4,8)",//标题型中文4到8个字
        sub_title: "@ctitle(8,12)",
        img: mr.image('150x150', mr.color(), mr.cword(4,10)),
        detail:{
          icon:mr.image('20x20', mr.color(), mr.cword(1,2)),//20X20尺寸
          content:"@cparagraph(40,100)"//正文
        }
      }
    ],
    'classify|50': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title: "@ctitle(2,4)",//标题型中文4到8个字
        'child|50':[{
          sub_title:"@ctitle(4,10)" + ' 500g',
          des:"@ctitle(6,15)",
          img: mr.image('60x60', mr.color(), mr.cword(4,10)),
          price:'￥'+ '@float(10, 100, 1, 2)',
        }]
      }
    ],
    'find|10': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title: "@ctitle(6,8)",//标题型中文4到8个字
        img: mr.image('100x100', mr.color(), mr.cword(4,10)),
      }
    ],
    'findNav|20': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        title: "@ctitle(2,4)",//标题型中文4到8个字
        'id|+1': 1,
        img: mr.image('100x100', mr.color(), mr.cword(4,10)),
        'child|50':[{
          'id|+1': 1,
          title: "@ctitle(4,8)",//标题型中文4到8个字
          img: mr.image('100x100', mr.color(), mr.cword(4,10)),
          auth:"@ctitle(4,8)",
          icon:mr.image('20x20', mr.color(), mr.cword(1,2)),//20X20尺寸
        }]
      }
    ],
    'follow': mapData(21),
    'column': mapData(11),
    'banner|5': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title: "@ctitle(4,8)",//标题型中文4到8个字
        sub_title: "@ctitle(6,12)",
        banner: mr.image('360x200', mr.color(), mr.cword(4,10)),//banner不变
        time: "@integer(1553425967486,1553475967486)",
        detail:{
          icon:mr.image('20x20', mr.color(), mr.cword(1,2)),//20X20尺寸
          auth:"@cname()",//百家姓
          content:"@cparagraph(10,40)"//正文
        }
      }
    ]
  })
};
