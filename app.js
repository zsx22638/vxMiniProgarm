// app.js
App({
  onLaunch(options) {
    console.log('应用启动', options);
  },
  onShow(options) {
    console.log('应用显示', options);
  },
  onHide() {
    console.log('应用隐藏');
  },
  onError(msg) {
    console.log('应用发生错误', msg);
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: '用户数据'
  }
})
