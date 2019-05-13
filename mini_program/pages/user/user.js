// pages/User/User.js
var util = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    Uid: '',
    showOrHidden: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onGetUserInfo(e) {
    var that = this;
    // console.log(e.detail.errMsg);
    // console.log(e.detail.userInfo);
    // console.log(e.detail.rawData);
  },
  bindViewTapMyCard: function() {
    wx.navigateTo({
      url: 'MyCard/MyCard?id=' + this.data.Uid
    })
  },
  bindViewTapMyLike: function() {
    wx.navigateTo({
      url: 'MyLike/MyLike?id=' + this.data.Uid
    })
  },
  bindViewTapSignAll: function() {
    wx.navigateTo({
      url: 'SignAll/SignAll?id=' + this.data.Uid
    })
  },
  Setting: function() {
    wx.navigateTo({
      url: 'Setting/Setting?id=' + this.data.Uid
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   var that = this
  //   app.getUserInfo(
  //     function (userInfo) {
  //       //更新数据
  //       that.setData({
  //         userInfo: userInfo,
  //       })
  //       util.setpublicinfo(wx.getStorageSync('Uid'),userInfo)//插入用户公共信息
  //     }
  //   )
  //   wx.getStorage({
  //     key: 'Uid',
  //     success: function(res) {
  //       that.setData({
  //         Uid:res.data
  //       })
  //     },
  //   })
  // },
  onLoad() {
    // 查看是否授权
    var that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              console.log(res.userInfo);
              console.log(res.rawData);
              console.log(res.signature);
              console.log(res.encryptedData);
              that.setData({
                userInfo: res.userInfo,
                Uid: res.signature,
                showOrHidden: false
              })
            }
          })
        }
      }
    });
    
  },
  // bindGetUserInfo(e) {
  //   var that = this;
  //   console.log(e.detail.userInfo);
    
  // },

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
  onShareAppMessage: function() {
    var that = this
    return {
      title: '@' + wx.getStorageSync('userInfo').nickName + '发现了一款很有意思的小程序“杭野联盟”快来瞅瞅吧',
      desc: '点击进入杭野联盟',
      path: '/pages/user/user',
    }
  }
})

function isEmptyObject(e) {
  var t;
  for (t in e)
    return !1;
  return !0
}