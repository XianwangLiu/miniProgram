// pages/match/matchDetails/footballMatch/footballMatch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    teams: [],
    index: 0,
    ifName: false,
    nowPlayer: '',
    nowTeamPlayers: [],
    players: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var teams = that.data.teams;
    var index = that.data.index;
    const db = wx.cloud.database();
    db.collection('teams').where({
      _id: 'ee3099285cda92f411e792ba125c5666',
    }).get({
      success(res) {
        // res.data 是包含以上定义的两条记录的数组
        if (that.options.type === 'football' && that.options.id === '0') {

          console.log(res.data[0].teams);
          that.setData({
            teams: res.data[0].teams,
          })
        } else if (that.options.type === 'football' && that.options.id === '1') {
          console.log(res.data[0].footballTeams);
          that.setData({
            teams: res.data[0].footballTeams,
          })
        } else if (that.options.type === 'football' && that.options.id === '2') {
          console.log(res.data[0].femaleTeams);
          that.setData({
            teams: res.data[0].femaleTeams,
          })
      }
      }
    })
    if (that.options.type === 'football' && that.options.id === '0') {
      db.collection('footballPlayers').where({
        _id: '9c4488c75cdb994512560a1044aff211',
      }).get({
        success(res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log(res.data[0].players);
          that.setData({
            players: res.data[0].players,
          })
          var players = that.data.players;
          var nowTeamPlayers = that.data.nowTeamPlayers;
          nowTeamPlayers = players[index];
          console.log(players[index])
          that.setData({
            nowTeamPlayers: nowTeamPlayers
          })
          // console.log(that.data);
        }
      })
    } else if (that.options.type === 'football' && that.options.id === '1') {
      db.collection('footballPlayers').where({
        _id: 'ee3099285cdcfec712f434b30a9a3217',
      }).get({
        success(res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log(res.data[0].players);
          that.setData({
            players: res.data[0].players,
          })
          var players = that.data.players;
          var nowTeamPlayers = that.data.nowTeamPlayers;
          nowTeamPlayers = players[index];
          console.log(players[index])
          that.setData({
            nowTeamPlayers: nowTeamPlayers
          })
          // console.log(that.data);
        }
      })
    } else if (that.options.type === 'football' && that.options.id === '2') {
      db.collection('footballPlayers').where({
        _id: 'ee3099285cdd0a7912f9d8dd2fa4d722',
      }).get({
        success(res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log(res.data[0].players);
          that.setData({
            players: res.data[0].players,
          })
          var players = that.data.players;
          var nowTeamPlayers = that.data.nowTeamPlayers;
          nowTeamPlayers = players[index];
          console.log(players[index])
          that.setData({
            nowTeamPlayers: nowTeamPlayers
          })
          // console.log(that.data);
        }
      })
    }


    // for (let i = 0; i < this.data.data.lenght; i++) {
    //   teams.push(that.data.data[i].teams);
    //   that.setData({
    //     teams: teams,
    //   })
    // }
    console.log(that)
  },
  bindPickerChangeTeam: function(e) {
    var that = this;
    console.log('所选择球队的索引为', e.detail.value);
    var index = that.data.index;
    that.setData({
      index: e.detail.value
    });
    // wx.setStorage({
    //   key: 'index',
    //   data: e.detail.value
    // })
    var players = that.data.players;
    var nowTeamPlayers = that.data.nowTeamPlayers;
    nowTeamPlayers = players[e.detail.value];
    console.log(players[e.detail.value])
    this.setData({
      nowTeamPlayers: nowTeamPlayers
    })
  },
  onRefresh: function(e) {
    var that = this;
    var index = that.data.index;
    var players = that.data.players;
    var nowTeamPlayers = that.data.nowTeamPlayers;
    nowTeamPlayers = players[index];
    console.log(players[index])
    this.setData({
      nowTeamPlayers: nowTeamPlayers
    })
  },

  setValue: function(e) {
    // console.log(e.detail.value);
    this.setData({
      nowPlayer: e.detail.value
    })
  },

  confirm: function(e) {
    var that = this;
    var nowPlayer = that.data.nowPlayer;
    var index = that.data.index;
    var teams = that.data.teams;
    var nowTeam = teams[index];
    var players = that.data.players;
    var teamPlayers = players[index];
    teamPlayers.push(nowPlayer);
    console.log(teamPlayers);
    console.log(players);
    that.setData({
      players: players,
      ifName: false
    })
    const db = wx.cloud.database();
    if (that.options.type === 'football' && that.options.id === '0') {
      db.collection('footballPlayers').doc('9c4488c75cdb994512560a1044aff211').update({
        data: {
          players: players
        },
        success: res => {
          console.log(res);
          wx.showToast({
            title: '加入球队成功',
          })
        },
        fail: console.error
      })
    } else if (that.options.type === 'football' && that.options.id === '1') {
      db.collection('footballPlayers').doc('ee3099285cdcfec712f434b30a9a3217').update({
        data: {
          players: players
        },
        success: res => {
          console.log(res);
          wx.showToast({
            title: '加入球队成功',
          })
        },
        fail: console.error
      })
    } else if (that.options.type === 'football' && that.options.id === '2') {
      db.collection('footballPlayers').doc('ee3099285cdd0a7912f9d8dd2fa4d722').update({
        data: {
          players: players
        },
        success: res => {
          console.log(res);
          wx.showToast({
            title: '加入球队成功',
          })
        },
        fail: console.error
      })
    }
  },
  cancel: function(e) {
    var that = this;
    that.setData({
      ifName: false
    });
    wx.showToast({
      title: '已取消',
    })
  },

  onUpdateteams: function(e) {
    var that = this;
    var teams = that.data.teams;
    const db = wx.cloud.database();
    var players = that.data.players;
    players = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ]
    db.collection('footballPlayers').add({
      data: {
        players: players
      },
      success: res => {
        console.log(res);

        wx.showToast({
          title: '添加成功',
        })
      }
    });
  },
  onAddPlayers: function(e) {
    var that = this;
    var ifName = that.data.ifName;
    that.setData({
      ifName: true
    })
  },
  onRemovePlayers: function(e) {
    console.log(e)
    var that = this;
    var nowPlayer = that.data.nowPlayer;
    var index = that.data.index;
    var teams = that.data.teams;
    var nowTeam = teams[index];
    var players = that.data.players;
    var teamPlayers = players[index];
    console.log(players);
    console.log(teamPlayers);
    var playerIndex = e.target.dataset.index;
    if (playerIndex > -1) {
      teamPlayers.splice(playerIndex, 1);
      that.setData({
        players: players
      })
    }
    const db = wx.cloud.database();
    if (that.options.type === 'football' && that.options.id === '0') {
      db.collection('footballPlayers').doc('9c4488c75cdb994512560a1044aff211').update({
        data: {
          players: players
        },
        success: res => {
          console.log(res);
          wx.showToast({
            title: '删除成功',
          })
        },
        fail: console.error
      })
    } else if (that.options.type === 'football' && that.options.id === '1') {

      db.collection('footballPlayers').doc('ee3099285cdcfec712f434b30a9a3217').update({
        data: {
          players: players
        },
        success: res => {
          console.log(res);
          wx.showToast({
            title: '删除成功',
          })
        },
        fail: console.error
      })
    }
    else if (that.options.type === 'football' && that.options.id === '2') {

      db.collection('footballPlayers').doc('ee3099285cdd0a7912f9d8dd2fa4d722').update({
        data: {
          players: players
        },
        success: res => {
          console.log(res);
          wx.showToast({
            title: '删除成功',
          })
        },
        fail: console.error
      })
    }
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