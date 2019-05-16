// pages/match/match.js
var app = getApp(); // 取得全局App

Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseBtn:false
  },

  onTapMatch: function(e) {
    if (e.target.dataset.type == 'football') {
      wx.showLoading({
        title: '加载中',
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 2000)
      wx: wx.navigateTo({
        url: 'matchDetails/footballMatch/footballMatch',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
    else if (e.target.dataset.type === 'basketball') {
      wx.showLoading({
        title: '加载中',
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 2000)
      wx: wx.navigateTo({
        url: 'matchDetails/basketballMatch/basketballMatch',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },
  openchoose:function(e){
    
    this.setData({
      chooseBtn:true
    })
  },
  closechoose:function(e){
    this.setData({
      chooseBtn:false
    })
  }

})