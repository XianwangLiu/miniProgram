// components/register/register.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
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
   * 组件的方法列表
   */
  methods: {
    onLoad: function (options) {
      var that = this;
      var teams = that.data.teams;
      var index = that.data.index;
      const db = wx.cloud.database();
      db.collection('teams').where({
        _id: 'ee3099285cda92f411e792ba125c5666',
      }).get({
        success(res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log(res.data[0].teams);
          that.setData({
            teams: res.data[0].teams,
          })
          // console.log(that.data);
        }
      })
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
      // for (let i = 0; i < this.data.data.lenght; i++) {
      //   teams.push(that.data.data[i].teams);
      //   that.setData({
      //     teams: teams,
      //   })
      // }
      console.log(that)
    },
    bindPickerChangeTeam: function (e) {
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
    onRefresh: function (e) {
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

    setValue: function (e) {
      // console.log(e.detail.value);
      this.setData({
        nowPlayer: e.detail.value
      })
    },

    confirm: function (e) {
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
    },
    cancel: function (e) {
      var that = this;
      that.setData({
        ifName: false
      });
      wx.showToast({
        title: '已取消',
      })
    },

    onUpdateteams: function (e) {
      var that = this;
      var teams = that.data.teams;
      const db = wx.cloud.database();
      var players = that.data.players;
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
    onAddPlayers: function (e) {
      var that = this;
      var ifName = that.data.ifName;
      that.setData({
        ifName: true
      })
    },
    onRemovePlayers: function (e) {
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
    },
  }
})
