import Mock from 'mockjs'

Mock.mock('/commonGoods', [{
    'goodsId': 1,
    'goodsName': '珍珠奶茶',
    'price': 5
  }
    , {
      'goodsId': 2,
      'goodsName': '芒果奶茶',
      'price': 6
    },
    {
      'goodsId': 3,
      'goodsName': '蓝莓奶茶',
      'price': 6
    },
    {
      'goodsId': 4,
      'goodsName': '柠檬养乐多',
      'price': 8
    },
    {
      'goodsId': 5,
      'goodsName': '凤梨养乐多',
      'price': 8
    },
    {
      'goodsId': 6,
      'goodsName': '草莓酷冰乐',
      'price': 12
    },
    {
      'goodsId': 7,
      'goodsName': '烧仙草奶茶',
      'price': 10
    },
    {
      'goodsId': 8,
      'goodsName': '双皮奶',
      'price': 9
    },
    {
      'goodsId': 9,
      'goodsName': '蜂蜜绿茶',
      'price': 7
    },
    {
      'goodsId': 10,
      'goodsName': '卡布奇诺',
      'price': 15
    },
    {
      'goodsId': 11,
      'goodsName': '美式拿铁',
      'price': 16
    },
  ]
)
Mock.mock('/typeGoods', [
  {
    "1": {
      "goodsId": 1,
      "goodsImg": "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%A5%B6%E8%8C%B6%E7%85%A7%E7%89%87&step_word=&hs=0&pn=13&spn=0&di=132550&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1717421903%2C3850745427&os=3363675665%2C4192190024&simid=4180246726%2C668631821&adpicid=0&lpn=0&ln=1127&fr=&fmq=1589119599698_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fphoto.16pic.com%2F00%2F15%2F39%2F16pic_1539444_b.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B8mrtv_z%26e3Bv54AzdH3Fejvp56AzdH3Frtv_8cnl999_z%26e3Bip4s&gsm=e&rpstart=0&rpnum=0&islist=&querylist=&force=undefined",
      "goodsName": "葡萄奶茶",
      "price": 8
    },
    "2": {
      "goodsId": 2,
      "goodsImg": "https://hbimg.huabanimg.com/1b7891f844c60f4dcb77aeab2ff6046216302ee211b6a-ZgkAdI_fw658",
      "goodsName": "红豆奶茶",
      "price": 7
    },
    "3": {
      "goodsId": 3,
      "goodsImg": "https://hbimg.huabanimg.com/b578ba4db8befc193ce07a2a1055ed2467875ebd7b082-S3apZb_fw658",
      "goodsName": "芋香奶茶",
      "price": 10
    }
  },
  {
    "1": {
      "goodsId": 4,
      "goodsImg": "https://hbimg.huabanimg.com/f538fcd44c40577fd48dcdc298a57106b9e62c151bb2d-phnNf7_fw658",
      "goodsName": "西瓜奶茶",
      "price": 10
    },
    "2": {
      "goodsId": 5,
      "goodsImg": "https://hbimg.huabanimg.com/d7c760dcfa9d1287f0100a2c54704c2dcc2483644454d7-8pVv1U_fw658",
      "goodsName": "蓝莓奶茶",
      "price": 12
    },
    "3": {
      "goodsId": 6,
      "goodsImg": "https://hbimg.huabanimg.com/9e6ac36ff24ae63be63254f495247faf593d0b6057352-Y54aTD_fw658",
      "goodsName": "柠檬冰红茶",
      "price": 12
    },
    "4": {
      "goodsId": 7,
      "goodsImg": "https://hbimg.huabanimg.com/6a5fc3859d876517bb80087d6e042dd9e0965360d018-129B4r_fw658",
      "goodsName": "西瓜酷冰乐",
      "price": 13
    }
  },
  {
    "1": {
      "goodsId": 8,
      "goodsImg": "https://hbimg.huabanimg.com/e4d560673115333a651f84775dd1a0d4c8383bc964135-TxQnMG_fw658",
      "goodsName": "香芋地瓜丸",
      "price": 15
    },
    "2": {
      "goodsId": 9,
      "goodsImg": "https://hbimg.huabanimg.com/a67c6599668b65e94a84c36d0d9f320339a34ecb5933e-rmXJcR_fw658",
      "goodsName": "美味薯条",
      "price": 10
    },
    "3": {
      "goodsId": 10,
      "goodsImg": "https://hbimg.huabanimg.com/9e6ac36ff24ae63be63254f495247faf593d0b6057352-Y54aTD_fw658",
      "goodsName": "玉米可乐饼",
      "price": 12
    }
  },
  {
    "1": {
      "goodsId": 11,
      "goodsImg": "https://hbimg.huabanimg.com/1fff0b4485c4c3a748c7ae8af7aa40b6f66894ec11f10a-4vJKQp_fw658",
      "goodsName": "快乐全家桶",
      "price": 25
    },
    "2": {
      "goodsId": 12,
      "goodsImg": "https://hbimg.huabanimg.com/a67c6599668b65e94a84c36d0d9f320339a34ecb5933e-rmXJcR_fw658",
      "goodsName": "经典组合餐",
      "price": 30
    }
  }
])
