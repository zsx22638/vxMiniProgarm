//页面逻辑数据
Page({
  data: {
    userinfo: {
      name: '钟胜心',
      age: 23
    },
    inputValue: '',
    list: [1, 2, 3]
  },
  //冒泡测试
  parent(event) {
    console.log('父亲的事件', event)
  },
  child(event) {
    console.log('孩子的事件!', event)
  },

  //mark测试
  handle(event) {
    console.log('孩子:', event)
  },
  handpar(event) {
    console.log('父:', event)
  },
  change() {

    // this.setData({
    //   'userinfo.name': '新增的名字'
    // })


    // 一 ,注意这里的空格哦!
    // this.setData({
    //  'userinfo.name':'zsx',
    //  'userinfo.age':25
    // })

    // 二, 利用...运行符号
    // const info = {
    //   ...this.data.userinfo,
    //   name: 'zsxinfo',
    //   age: '28'
    // }
    // this.setData({
    //   userinfo: info
    // })

    //三 , 删除单个属性
    // delete this.data.userinfo.name
    // this.setData({
    //   userinfo:this.data.userinfo
    // })
  },

  //生命周期钩子
  onLoad() {
    var appInstance = getApp()
    console.log(appInstance.globalData)
  },
  onReachBottom() {

    wx.showLoading({
      title: '加载中',
    })

    //注意箭头函数指向的问题
    setTimeout( () => {
      console.log(this.data.list)
      const lastNum = this.data.list[this.data.list.length - 1]
      const newArr = [lastNum + 1, lastNum + 2, lastNum + 3]
      this.setData({
        list: [...this.data.list, ...newArr]
      })
      console.log('新数组：', lastNum)
      wx.hideLoading()
    }, 1000)



    console.log('触发钩子')
  },
  onPullDownRefresh() {
    this.setData({
      list:[1,2,3]
    })
  },

  refresh() {
   wx.startPullDownRefresh()
  },
  stopRefresh() {
    wx.stopPullDownRefresh()
  }


})