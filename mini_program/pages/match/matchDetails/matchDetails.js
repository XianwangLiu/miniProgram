// pages/match/matchDetails/matchDetails.js
var app = getApp();

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    fileID:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
    const {
      fileID,
      cloudPath,
      filePath
    } = app.globalData;
    this.setData({
      fileID,
      cloudPath,
      filePath
    })
  },
  onDownloadFile: function() {
    wx.cloud.downloadFile({
      fileID: app.globalData.fileID
    }).then(res => {
      // get temp file path
      console.log(res.tempFilePath)
    }).catch(error => {
      // handle error
    })
  },

  onGetTempFileUrl: function() {
    wx.cloud.getTempFileURL({
      fileList: [app.globalData.fileID],
      success: res => {
        // get temp file URL
        console.log(res.fileList)
        const bTempFileURL = res.fileList[0].tempFileURL
        this.setData({
          bTempFileURL: bTempFileURL
        })
      },
      fail: err => {
        // handle error
      }
    })
  },
  onDeleteFile: function() {
    wx.cloud.deleteFile({
      fileList: [app.globalData.fileID],
      success: res => {
        // handle success
        console.log(res.fileList)
      },
      fail: err => {
        // handle error
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})