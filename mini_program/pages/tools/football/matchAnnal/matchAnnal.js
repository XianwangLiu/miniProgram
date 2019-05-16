// pages/tools/football/matchAnnal/matchAnnal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamNameA: '',
    teamNameB: '',
    isMatch: false,
    teamMatchNameA: '',
    teamMatchNameB: '',
    bigScoreA: '',
    bigScoreB: '',
    process: [],
    time:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var process = that.data.process;
    wx.cloud.callFunction({
      name: 'user',
      data: {},
      complete: res => {
        // console.log('callFunction test result: ', res)
        var openid = res.result.OPENID;
        that.setData({
          openId: openid
        })
      },
    })
    const db = wx.cloud.database();
    db.collection('football').where({
      _openid: this.openId,
    }).get({
      success(res) {
        // res.data 是包含以上定义的两条记录的数组
        console.log(res.data);
        that.setData({
          data: res.data,
          
        })
        // console.log(that.data);
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