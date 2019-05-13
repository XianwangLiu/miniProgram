// pages/tools/tools.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  // view被点击事件
  // onViewClick: function(event) {
  //   console.log("hello,hi！");
  // },
  // // 文章被点击事件
  // onArticlesClick: function(event) {

  //   var dataset = event.currentTarget.dataset;
  //   var id = dataset.id;
  //   wx.navigateTo({
  //     // url: '/pages/acticles/actlices?id='+id, 
  //     url: '/pages/index/index'
  //   });
  //   // console.log(id);
  // },

    //足球被点击
  onFootballChick: function(event) {
    wx.navigateTo({
      url: 'football/footballTool'
    })
  },
  onBasketballChick: function(event) {
    wx.navigateTo({
      url: 'basketball/basketballTool',
    })
  },
  onVolleyballChick: function (event) {
    wx.navigateTo({
      url: 'volleyball/volleyballTool',
    })
  },
  onTennisChick: function (event) {
    wx.navigateTo({
      url: 'tennis/tennisTool',
    })
  },
  onPingpongChick: function (event) {
    wx.navigateTo({
      url: 'pingpong/pingpongTool',
    })
  },

  onLoad: function(options) {
    //console.log("onLoad");
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //console.log("onReady");

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    //console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    
  },

})