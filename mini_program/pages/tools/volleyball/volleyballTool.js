// pages/tools/volleyball/volleyballTool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onOpenMatchwin:function(e){
    wx.navigateToMiniProgram({
      appId: '',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'develop',
      success(res) {
        // 打开成功
      }
    })
  }
})