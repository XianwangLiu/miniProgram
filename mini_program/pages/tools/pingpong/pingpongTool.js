// pages/tools/pingpong/pingpongTool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isStart: false,
    leftBigScore: 0,
    rightBigScore: 0,
    leftScore: 0,
    rightScore: 0,
    score: 0,
    isLeft: true,
    winner: '',
    teamNameA: '',
    teamNameB: '',
    leftScoreArr: [],
    rightScoreArr: [],
    No: 0,
    hasWinner: false,
    id: 0,
    time: ''
  },
  getRedTeam: function(e) {
    this.setData({
      teamNameA: e.detail.value
    })
    wx.setStorage({
      key: 'teamNameA',
      data: this.data.teamNameA
    })
  },
  getBlueTeam: function(e) {
    this.setData({
      teamNameB: e.detail.value
    });
    wx.setStorage({
      key: 'teamNameB',
      data: this.data.teamNameB
    })
  },
  initativeTap: function(event) {
    // var isStart = currentTarget.dataset.isstart;
    if (this.data.isStart) {
      clearTimeout(timer);
      this.setData({
        isStart: false
      });
    } else {
      this.random();
      this.setData({
        isStart: true
      });
    }
  },
  random: function() {
    var that = this;
    timer = setTimeout(function() {
      that.random();
      that.setData({
        firstTeam: that.data.randomArray[i]
      });
      i++;
      // 防止多次使用计时器无限累加
      if (i >= 2) {
        i = 0;
      }
      console.log(i);
    }, 100);
  },

  addLeftButtonClick: function(event) {
    // console.log(event);
    var score = event.target.dataset.text;
    // var isLeft = event.target.dataset.type;
    if (score >= 0) {
      score++;
      this.setData({
        leftScore: score
      });
      wx.setStorage({
        key: 'leftScore',
        data: this.data.leftScore
      })
    }
  },
  reduceLeftButtonClick: function(event) {
    // 通过获取组件绑定的变量累加
    // console.log(event);
    var score = event.target.dataset.text;
    // var isLeft = event.target.dataset.type;
    if (score > 0) {
      score--;
      this.setData({
        leftScore: score
      });
      wx.setStorage({
        key: 'leftScore',
        data: this.data.leftScore
      })
    }
  },
  addRightButtonClick: function(event) {
    // console.log(event);
    var score = event.target.dataset.text;
    // var isLeft = event.target.dataset.type;
    if (score >= 0) {
      score++;
      this.setData({
        rightScore: score
      });
      wx.setStorage({
        key: 'rightScore',
        data: this.data.rightScore
      })
    }
  },
  reduceRightButtonClick: function(event) {
    // 通过获取组件绑定的变量累加
    // console.log(event);
    var score = event.target.dataset.text;
    // var isLeft = event.target.dataset.type;
    if (score > 0) {
      score--;
      this.setData({
        rightScore: score
      });
      wx.setStorage({
        key: 'rightScore',
        data: this.data.rightScore
      })
    }
  },

  resetLeftButtonClick: function(event) {
    // console.log(event);
    var score = event.target.dataset.text;
    this.setData({
      leftScore: 0
    })
    wx.setStorage({
      key: 'leftScore',
      data: this.data.leftScore
    })
  },
  resetRightButtonClick: function(event) {
    // console.log(event);
    var score = event.target.dataset.text;
    this.setData({
      rightScore: 0
    })
    wx.setStorage({
      key: 'rightScore',
      data: this.data.rightScore
    })
  },
  onRoundOver: function() {
    var that = this;
    // console.log(that);
    var leftScore = that.data.leftScore;
    var rightScore = that.data.rightScore;
    var leftBigScore = that.data.leftBigScore;
    var leftScoreArr = that.data.leftScoreArr;
    var rightScoreArr = that.data.rightScoreArr;
    var No = that.data.No;
    var id = that.data.id;
    var data = that.data;
    if (leftScore > rightScore) {
      leftBigScore++;
      No++;
      rightScoreArr.push(rightScore);
      leftScoreArr.push(leftScore);
      that.setData({
        No: No,
        id: id,
        hasWinner: false,
        leftScoreArr: leftScoreArr,
        leftBigScore: leftBigScore
      })
    } else if (rightScore > leftScore) {
      data.rightBigScore++;
      No++;
      leftScoreArr.push(leftScore);
      rightScoreArr.push(rightScore);
      that.setData({
        id: id,
        No: No,
        hasWinner: false,
        rightScoreArr: rightScoreArr,
        rightBigScore: data.rightBigScore
      })
    } else {
      wx.showToast({
        title: '比分错误,请确认重新确认',
        icon: 'none',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
    const db = wx.cloud.database();
    db.collection('pingpang').add({
      data: {
        id: this.data.id,
        No: this.data.No,
        hasWinner: this.data.hasWinner,
        leftScore: this.data.leftScore,
        rightScore: this.data.rightScore,
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
  onGameOver: function() {
    var that = this;
    // that.onRoundOver();
    var leftBigScore = that.data.leftBigScore;
    var rightBigScore = that.data.rightBigScore;
    var id = that.data.id;
    var time = that.data.time;
    time = Date.parse(new Date());

    var timestamp = Date.parse(new Date()); 
    timestamp = timestamp / 1000;
    // console.log("当前时间戳为：" + timestamp);

    //获取当前时间  
    var n = timestamp * 1000;
    var date = new Date(n);
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    //时  
    var h = date.getHours();
    //分  
    var m = date.getMinutes();
    //秒  
    var s = date.getSeconds();
    time=(Y +"-" + M + '-' + D + ' '+ h + ":" + m + ":" + s);

    if (that.data.teamNameA === '' || that.data.teamNameB === '') {
      wx.showToast({
        title: '请填写完整的比赛双方',
        icon: 'none',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    } else {
      if (leftBigScore > rightBigScore) {
        that.setData({
          id: that.data.id,
          hasWinner: true,
          winner: that.data.teamNameA,
          time: time
        })
        wx.showModal({
          title: '比赛结束',
          content: '比分：' + leftBigScore + ":" + rightBigScore + " " + this.data.winner + "胜",
          success: function(res) {
            that.onMatchAnnal();
          }
        });

      } else if (leftBigScore < rightBigScore) {
        that.setData({
          id: that.data.id,
          hasWinner: true,
          winner: that.data.teamNameB,
          time: time,
        })
        wx.showModal({
          title: '比赛结束',
          content: '比分：' + leftBigScore + ":" + rightBigScore + " " + this.data.winner + "胜",
          success: function(res) {
            that.onMatchAnnal();
          }
        });

      } else {
        wx.showToast({
          title: '比分错误,请确认重新确认',
          icon: 'none',
          success: function(res) {

          },
          fail: function(res) {},
          complete: function(res) {},
        })
      }
      const db = wx.cloud.database();
      db.collection('pingpang').add({
        data: {
          leftBigScore: this.data.leftBigScore,
          rightBigScore: this.data.rightBigScore,
          winner: this.data.winner,
          hasWinner: this.data.hasWinner,
          id: this.data.id,
          time: this.data.time
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
    }
  },
  onRegame: function() {
    var that = this;
    var data = that.data;
    that.setData({
      leftBigScore: 0,
      leftScore: 0,
      rightBigScore: 0,
      rightScore: 0,
      winner: '',
      teamNameA: '',
      teamNameB: '',
      No: 0
    })
    wx.setStorage({
      key: 'leftBigScore',
      data: this.data.leftBigScore
    })
    wx.setStorage({
      key: 'leftScore',
      data: this.data.leftScore
    })
    wx.setStorage({
      key: 'rightScore',
      data: this.data.rightScore
    })
    wx.setStorage({
      key: 'rightBigScore',
      data: this.data.rightBigScore
    })
    wx.setStorage({
      key: 'teamNameA',
      data: this.data.teamNameA
    })
    wx.setStorage({
      key: 'teamNameB',
      data: this.data.teamNameB
    })
  },
  onMatchAnnal: function() {
    wx.navigateTo({
      url: 'matchAnnal/matchAnnal',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
    var that = this;
    var id = that.data.id;
    var id = Math.floor(Math.random() * 1500);
    that.setData({
      id: id
    })
    wx.getStorage({
      key: 'teamNameA',
      success(res) {
        that.setData({
          teamNameA: res.data
        });
      }
    });
    wx.getStorage({
      key: 'teamNameB',
      success(res) {
        that.setData({
          teamNameB: res.data
        });
      }
    });
    wx.getStorage({
      key: 'leftBigScore',
      success(res) {
        that.setData({
          leftBigScore: res.data
        });
      }
    });
    wx.getStorage({
      key: 'rightBigScore',
      success(res) {
        that.setData({
          rightBigScore: res.data
        });
      }
    });
    wx.getStorage({
      key: 'leftScore',
      success(res) {
        that.setData({
          leftScore: res.data
        });
      }
    });
    wx.getStorage({
      key: 'rightScore',
      success(res) {
        that.setData({
          rightScore: res.data
        });
      }
    });
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