// pages/news/news.js
import {
  network
} from "../../utils/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHave: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    
      
  },

  seeDetails: function(event){
    console.log(event);
    var that = this;
    var url = event.currentTarget.dataset.url;
    wx.navigateTo({
      url: '../newsDetail/newsDetail?url='+url,
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    network.getNewsPage({
      success: function (data) {
        that.setData({
          data: data
        });
      },
      fail: function () {
        that.setData({
          isHave: false
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.startPullDownRefresh()
    var that = this;
    network.getNewsPage({
      success: function (data) {
        that.setData({
          data: data
        });
      },
      fail: function () {
        that.setData({
          isHave: false
        })
      }
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})