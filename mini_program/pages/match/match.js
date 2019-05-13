// pages/match/match.js
var app = getApp();     // 取得全局App

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onInsert: function(event) {
    const db = wx.cloud.database();
    db.collection('test').add({
      data: {
        test: '插入数值'
      },
      success: res => {
        console.log(res);
        this.setData({
          csid: res._id,
        })
        wx.showToast({
          title: '新增记录成功',
        })

      }
    });

  },

  onQuery: function(event) {
    const db = wx.cloud.database();
    db.collection('test').get({
      success: res => {
        console.log(res.data);
        this.setData({
          data: res.data
        })
        wx.showToast({
          title: '查询成功',
        })
      }
    })
  },

  onUpdate: function(event) {
    const db = wx.cloud.database();
    db.collection('test').get({
      success: res => {
        console.log(res.data[0]._id);
        var removeId = res.data[0]._id;
        if (removeId) {
          db.collection('test').doc(removeId).update({
            data: {
              test: '更改数据'
            },
            success: console.log,
            fail: console.error
          })
        } else {
          console.log('无数据')
        }
      }
    })
  },

  onRemove: function(event) {
    const db = wx.cloud.database();
    db.collection('test').get({
      success: res => {
        console.log(res.data[0]._id);
        var removeId = res.data[0]._id;
        if (removeId) {
          db.collection('test').doc(removeId).remove({
            success: console.log,
            fail: console.error
          })
        } else {
          console.log('无数据')
        }

        this.setData({
          data: data
        })
        wx.showToast({
          title: '查到该数据，准备删除',
        })
      }
    })
  },
  onUploadFile: function(event) {
    wx.chooseImage({
      success: function(res) {
        wx.showLoading({
          title: '上传中'
        })
      
        const filePath = res.tempFilePaths[0];
        const sjs = Math.floor(Math.random() * 1500);
        const cloudPath = sjs + filePath.match(/\.[^.]+?$/)[0];
        wx.cloud.uploadFile({
          cloudPath,
          filePath, // 文件路径
        success: res => {
          // get resource ID
          console.log('上传成功：', res);
          app.globalData.fileID = res.fileID;
          app.globalData.cloudPath = cloudPath;
          app.globalData.filePath = filePath;
          wx.navigateTo({
            url: './matchDetails/matchDetails',
          })
          
          }, fail: err => {
            // handle error
          }
        })
      }
    
    })
  },
  onAdd:function(){
    // wx.cloud.callFunction({
    //   // 云函数名称
    //   name: 'test',
    //   // 传给云函数的参数
    //   data: {
    //     a: 1,
    //     b: 2,
    //   },
    // }).then(res => {
    //     console.log(res) // 3
    //   }).catch(console.error)
    wx.cloud.callFunction({
      name: 'test',
      data: {
        a: 1,
        b: 2,
      },
      complete: res => {
        console.log('callFunction test result: ', res)
      },
    })
  },
  

  onShow: function() {
    wx.hideLoading();
  }

})