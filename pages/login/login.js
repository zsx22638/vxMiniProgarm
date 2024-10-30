// pages/home/login/login.js
Page({

  data: {
    username: '',
    password: ''
  },
  //路由跳转到非taBbar页面
  goTo() {
    wx.navigateTo({
      url: '/pages/chat/chat',
    })
  },
    //跳转到taBbar页面
    goToTaBbar() {
      wx.switchTab({
        url: '/pages/index/index',
      })
    },


  // 处理输入事件
  handleInput(e) {
    const field = e.currentTarget.dataset.field;
    console.log(e)
    console.log(field)
    this.setData({
      [field]: e.detail.value
    });
  },

  // 登录按钮点击事件
  handleLogin() {
    const { username, password } = this.data;
    console.log(username,password)
    // 表单校验
    if (!username) {
      wx.showToast({
        title: '用户名不能为空',
        icon: 'none'
      });
      return;
    }

    if (!password) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none'
      });
      return;
    }

    // 模拟提交表单数据
    wx.showToast({
      title: '登录成功',
      icon: 'success'
    });

    // 在此处进行进一步的登录请求，例如请求服务器的API
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})