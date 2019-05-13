// pages/tools/pingpong/matchAnnal/matchAnnal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title_data:{
      leftBigScore:'',
      rightBigScore:'',
      winner:'',
      id:0
    },
    item_data:{
      No: 0,
      id:0,
      leftScore:'',
      rightScore:''
    },
    newId:[],
    id:0,
    data:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.cloud.callFunction({
      name: 'user',
      data: {
      },
      complete: res => {
        // console.log('callFunction test result: ', res)
        var openid = res.result.OPENID;
         that.setData({
           openId:openid
         })
      },
    })
    const db = wx.cloud.database();
    db.collection('pingpang').where({
      _openid: this.openId,
      // hasWinner: true
    }).get({
      success(res) {
        // res.data 是包含以上定义的两条记录的数组
        var newId = that.data.newId;
        for(let i = 0; i < res.data.length;i++){
          newId.push(res.data[i].id)
        }
        // console.log(res.data);        
        that.setData({
          data: res.data,
          newId: newId
        })     
        // console.log(that.data);
      }
    })
    // db.collection('pingpang').where({
    //   _openid: 'oiunS5E5NoOggqemuC4fvyd6WjNY',
    //   hasWinner: false,
    // }).get({
    //   success(res) {
    //     // var newId = that.data.newId;
    //     // for (let i = 0; i < res.data.length; i++) {
    //     //   newId.push(res.data[i].id)
    //     // }
    //     // res.data 是包含以上定义的两条记录的数组
    //     // console.log(res.data);
    //     that.setData({
    //       // newId: newId,
    //       item_data: res.data
    //     })
    //     // console.log(that.data)
    //   }
    // })
    // var newId = that.data.newId;
    // var id = that.data.id;
    // for(let i = 0; i < newId.length; i++){
    //   const db = wx.cloud.database();
    //   db.collection('pingpang').where({
    //     _openid: 'oiunS5E5NoOggqemuC4fvyd6WjNY',
    //     id:newId[i]
    //   }).get({
    //     success(res) {
    //        console.log(res.data);
    //       that.setData({
    //         // newId: newId,
    //         id: res.data.id
    //       })
    //       console.log(that.data)
    //     }
    //   })
    // }

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