// pages/match/matchDetails/footballMatch/footballMatch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'',
    id:''
  },
  onLoad: function (options) {
    console.log(options)
    var that = this;
    console.log(that)
    this.setData({
      type:options.type,
      id:options.id
    })
  },
  onRegister:function(e){
    wx: wx.navigateTo({
      url: 'register/register',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onSchedule:function(e){
    wx: wx.navigateTo({
      url: 'schedule/schedule',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }

})