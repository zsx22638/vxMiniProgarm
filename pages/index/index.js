Page({
  data: {
    inputValue: '' // 初始化数据
  },

  //通用页面跳转
  goTo(event) {
    const url = event.currentTarget.dataset.url;
    if (url) {
      wx.navigateTo({
        url: url,
        fail: (err) => {
          console.error("跳转失败:", err);
        }
      });
    } else {
      console.error("未指定跳转路径");
    }
  },
  // 处理输入变化
  onInputChange(event) {
    this.setData({
      inputValue: event.detail.value // 更新 inputValue 数据
    });
  }
});
