//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: [
      {
        name: '姓名: 123',
        age: 12
      },
      {
        name: '姓名: 789',
        age: 12
      },
      {
        name: '姓名: 367',
        age: 12
      }
    ]
  },
  onLoad: function () {
    console.log('进入个人信息页面')
  }
})
