// pages/tools/football/footballTool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamRedPlayers: ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号'],
    teamBluePlayers: ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号'],
    type: ['进球', '助攻', '越位', '射偏', '扑救', '换下', '换上', '黄牌', '点球进球', '点球不进', '乌龙', '红牌', '受伤下'],
    teams: [],
    matchLists: ['2019杭电男足分院杯', '2019杭州电子科技大学足球超级联赛', '2019杭电女足分院杯'],
    matchIndex: 0,
    matchName: '',
    teamIndexA: 0,
    teamIndexB: 0,
    isMatch: false,
    teamNameA: '',
    teamNameB: '',
    teamMatchNameA: '',
    teamMatchNameB: '',
    indexA: 0,
    indexB: 0,
    typeIndexA: 0,
    typeIndexB: 0,
    process: [],
    bigScoreA: 0,
    bigScoreB: 0,
    minutes: 0,
    seconds: 0,
    minute: 0,
    second: 0,
    time: '',
    timestamp: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  switchChange: function(event) {
    var that = this;
    that.setData({
      isMatch: event.detail.value
    })
    wx.setStorage({
      key: 'isMatch',
      data: event.detail.value
    })
  },
  getRedTeam: function(event) {
    this.setData({
      teamNameA: event.detail.value
    });
    wx.setStorage({
      key: 'teamNameA',
      data: event.detail.value
    })
  },
  getBlueTeam: function(event) {
    this.setData({
      teamNameB: event.detail.value
    });
    wx.setStorage({
      key: 'teamNameB',
      data: event.detail.value
    })
  },
  bindChooseMatch: function(e) {
    var that = this;
    console.log('match的索引为', e.detail.value);
    var matchIndex = that.data.matchIndex;
    var matchLists = that.data.matchLists;
    var matchName = that.data.matchName;
    var teams = that.data.teams;
    matchName = matchLists[matchIndex];
    this.setData({
      matchIndex: e.detail.value,
      matchName: matchName
    });
    wx.setStorage({
      key: 'matchIndex',
      data: e.detail.value
    })
    wx.setStorage({
      key: 'matchName',
      data: e.detail.value
    })
    console.log(that.data.matchIndex)
    const db = wx.cloud.database();
    db.collection('teams').where({
      _id: 'ee3099285cda92f411e792ba125c5666',
    }).get({
      success(res) {
        // console.log(res);
        // res.data 是包含以上定义的两条记录的数组
        if (that.data.matchIndex == 0) {
          const db = wx.cloud.database();
          db.collection('footballPlayers').where({
            _id: '9c4488c75cdb994512560a1044aff211',
          }).get({
            success(res) {
              console.log(res)
              // res.data 是包含以上定义的两条记录的数组
              console.log(res.data[0].players);
              that.setData({
                players: res.data[0].players,
              })
              var players = that.data.players;
              var teamIndexA = that.data.teamIndexA;
              var teamIndexB = that.data.teamIndexB;
              var teamRedPlayers = that.data.teamRedPlayers;
              var teamBluePlayers = that.data.teamBluePlayers;
              teamRedPlayers = players[teamIndexA];
              teamBluePlayers = players[teamIndexB];
              console.log(players[teamIndexA])
              console.log(players[teamIndexB])
              that.setData({
                teamRedPlayers: teamRedPlayers,
                teamBluePlayers: teamBluePlayers
              })
              // console.log(that.data);
            }
          })
          console.log(res.data[0].teams);
          that.setData({
            teams: res.data[0].teams,
            teamIndexA: 0,
            teamIndexB: 0
          })
          wx.setStorage({
            key: 'teams',
            data: teams
          })
          wx.setStorage({
            key: 'teamIndexA',
            data: teamIndexA
          })
          wx.setStorage({
            key: 'teamIndexB',
            data: teamIndexB
          })

        } else if (that.data.matchIndex == 1) {
          const db = wx.cloud.database();
          db.collection('footballPlayers').where({
            _id: 'ee3099285cdcfec712f434b30a9a3217',
          }).get({
            success(res) {
              console.log(res)
              // res.data 是包含以上定义的两条记录的数组
              console.log(res.data[0].players);
              that.setData({
                players: res.data[0].players,
              })
              var players = that.data.players;
              var teamIndexA = that.data.teamIndexA;
              var teamIndexB = that.data.teamIndexB;
              var teamRedPlayers = that.data.teamRedPlayers;
              var teamBluePlayers = that.data.teamBluePlayers;
              teamRedPlayers = players[teamIndexA];
              teamBluePlayers = players[teamIndexB];
              console.log(players[teamIndexA])
              console.log(players[teamIndexB])
              that.setData({
                teamRedPlayers: teamRedPlayers,
                teamBluePlayers: teamBluePlayers
              })
              // console.log(that.data);
            }
          })
          console.log(res.data[0].footballTeams);
          that.setData({
            teams: res.data[0].footballTeams,
            teamIndexA: 0,
            teamIndexB: 0
          })
          wx.setStorage({
            key: 'teams',
            data: teams
          })
          wx.setStorage({
            key: 'teamIndexA',
            data: teamIndexA
          })
          wx.setStorage({
            key: 'teamIndexB',
            data: teamIndexB
          })
        } else if (that.data.matchIndex == 2) {
          const db = wx.cloud.database();
          db.collection('footballPlayers').where({
            _id: 'ee3099285cdd0a7912f9d8dd2fa4d722',
          }).get({
            success(res) {
              console.log(res)
              // res.data 是包含以上定义的两条记录的数组
              console.log(res.data[0].players);
              that.setData({
                players: res.data[0].players,
              })
              var players = that.data.players;
              var teamIndexA = that.data.teamIndexA;
              var teamIndexB = that.data.teamIndexB;
              var teamRedPlayers = that.data.teamRedPlayers;
              var teamBluePlayers = that.data.teamBluePlayers;
              teamRedPlayers = players[teamIndexA];
              teamBluePlayers = players[teamIndexB];
              console.log(players[teamIndexA])
              console.log(players[teamIndexB])
              that.setData({
                teamRedPlayers: teamRedPlayers,
                teamBluePlayers: teamBluePlayers
              })
              // console.log(that.data);
            }
          })
          console.log(res.data[0].femaleTeams);
          that.setData({
            teams: res.data[0].femaleTeams,
            teamIndexA: 0,
            teamIndexB: 0
          })
          wx.setStorage({
            key: 'teams',
            data: teams
          })
          wx.setStorage({
            key: 'teamIndexA',
            data: teamIndexA
          })
          wx.setStorage({
            key: 'teamIndexB',
            data: teamIndexB
          })
        }
      }
    })

  },
  bindPickerChangeTeamA: function(e) {
    var that = this;
    console.log('A的Team索引为', e.detail.value);
    var teamIndexA = that.data.teamIndexA;
    var teams = that.data.teams;
    var teamMatchNameA = that.data.teamMatchNameA;
    teamMatchNameA = teams[teamIndexA];

    this.setData({
      teamIndexA: e.detail.value,
      teamMatchNameA: teamMatchNameA,
    });
    wx.setStorage({
      key: 'teamMatchNameA',
      data: e.detail.value
    })
    wx.setStorage({
      key: 'teamIndexA',
      data: e.detail.value
    })

    if (that.data.matchIndex == 0) {
      const db = wx.cloud.database();
      db.collection('footballPlayers').where({
        _id: '9c4488c75cdb994512560a1044aff211',
      }).get({
        success(res) {
          console.log(res)
          // res.data 是包含以上定义的两条记录的数组
          console.log(res.data[0].players);
          that.setData({
            players: res.data[0].players,
          })
          var players = that.data.players;
          var teamIndexA = that.data.teamIndexA;
          var teamIndexB = that.data.teamIndexB;
          var teamRedPlayers = that.data.teamRedPlayers;
          var teamBluePlayers = that.data.teamBluePlayers;
          teamRedPlayers = players[teamIndexA];
          teamBluePlayers = players[teamIndexB];
          console.log(players[teamIndexA])
          console.log(players[teamIndexB])
          that.setData({
            teamRedPlayers: teamRedPlayers,
            teamBluePlayers: teamBluePlayers
          })
          // console.log(that.data);
        }
      })
      
    } else if (that.data.matchIndex == 1) {
      const db = wx.cloud.database();
      db.collection('footballPlayers').where({
        _id: 'ee3099285cdcfec712f434b30a9a3217',
      }).get({
        success(res) {
          console.log(res)
          // res.data 是包含以上定义的两条记录的数组
          console.log(res.data[0].players);
          that.setData({
            players: res.data[0].players,
          })
          var players = that.data.players;
          var teamIndexA = that.data.teamIndexA;
          var teamIndexB = that.data.teamIndexB;
          var teamRedPlayers = that.data.teamRedPlayers;
          var teamBluePlayers = that.data.teamBluePlayers;
          teamRedPlayers = players[teamIndexA];
          teamBluePlayers = players[teamIndexB];
          console.log(players[teamIndexA])
          console.log(players[teamIndexB])
          that.setData({
            teamRedPlayers: teamRedPlayers,
            teamBluePlayers: teamBluePlayers
          })
          // console.log(that.data);
        }
      })
      
    } else if (that.data.matchIndex == 2) {
      const db = wx.cloud.database();
      db.collection('footballPlayers').where({
        _id: 'ee3099285cdd0a7912f9d8dd2fa4d722',
      }).get({
        success(res) {
          console.log(res)
          // res.data 是包含以上定义的两条记录的数组
          console.log(res.data[0].players);
          that.setData({
            players: res.data[0].players,
          })
          var players = that.data.players;
          var teamIndexA = that.data.teamIndexA;
          var teamIndexB = that.data.teamIndexB;
          var teamRedPlayers = that.data.teamRedPlayers;
          var teamBluePlayers = that.data.teamBluePlayers;
          teamRedPlayers = players[teamIndexA];
          teamBluePlayers = players[teamIndexB];
          console.log(players[teamIndexA])
          console.log(players[teamIndexB])
          that.setData({
            teamRedPlayers: teamRedPlayers,
            teamBluePlayers: teamBluePlayers
          })
          // console.log(that.data);
        }
      })
    }
    
  },
  bindPickerChangeTeamB: function(e) {
    var that = this;
    console.log('B的Team索引为', e.detail.value);
    var teamIndexB = that.data.teamIndexB;
    var teams = that.data.teams;
    var teamMatchNameB = that.data.teamMatchNameB;
    teamMatchNameB = teams[teamIndexB];
    this.setData({
      teamIndexB: e.detail.value,
      teamMatchNameB: teamMatchNameB
    });
    wx.setStorage({
      key: 'teamMatchNameB',
      data: e.detail.value
    })
    wx.setStorage({
      key: 'teamIndexB',
      data: e.detail.value
    })
    if (that.data.matchIndex == 0) {
      const db = wx.cloud.database();
      db.collection('footballPlayers').where({
        _id: '9c4488c75cdb994512560a1044aff211',
      }).get({
        success(res) {
          console.log(res)
          // res.data 是包含以上定义的两条记录的数组
          console.log(res.data[0].players);
          that.setData({
            players: res.data[0].players,
          })
          var players = that.data.players;
          var teamIndexA = that.data.teamIndexA;
          var teamIndexB = that.data.teamIndexB;
          var teamRedPlayers = that.data.teamRedPlayers;
          var teamBluePlayers = that.data.teamBluePlayers;
          teamRedPlayers = players[teamIndexA];
          teamBluePlayers = players[teamIndexB];
          console.log(players[teamIndexA])
          console.log(players[teamIndexB])
          that.setData({
            teamRedPlayers: teamRedPlayers,
            teamBluePlayers: teamBluePlayers
          })
          // console.log(that.data);
        }
      })
     
    } else if (that.data.matchIndex == 1) {
      const db = wx.cloud.database();
      db.collection('footballPlayers').where({
        _id: 'ee3099285cdcfec712f434b30a9a3217',
      }).get({
        success(res) {
          console.log(res)
          // res.data 是包含以上定义的两条记录的数组
          console.log(res.data[0].players);
          that.setData({
            players: res.data[0].players,
          })
          var players = that.data.players;
          var teamIndexA = that.data.teamIndexA;
          var teamIndexB = that.data.teamIndexB;
          var teamRedPlayers = that.data.teamRedPlayers;
          var teamBluePlayers = that.data.teamBluePlayers;
          teamRedPlayers = players[teamIndexA];
          teamBluePlayers = players[teamIndexB];
          console.log(players[teamIndexA])
          console.log(players[teamIndexB])
          that.setData({
            teamRedPlayers: teamRedPlayers,
            teamBluePlayers: teamBluePlayers
          })
          // console.log(that.data);
        }
      })
     
    } else if (that.data.matchIndex == 2) {
      const db = wx.cloud.database();
      db.collection('footballPlayers').where({
        _id: 'ee3099285cdd0a7912f9d8dd2fa4d722',
      }).get({
        success(res) {
          console.log(res)
          // res.data 是包含以上定义的两条记录的数组
          console.log(res.data[0].players);
          that.setData({
            players: res.data[0].players,
          })
          var players = that.data.players;
          var teamIndexA = that.data.teamIndexA;
          var teamIndexB = that.data.teamIndexB;
          var teamRedPlayers = that.data.teamRedPlayers;
          var teamBluePlayers = that.data.teamBluePlayers;
          teamRedPlayers = players[teamIndexA];
          teamBluePlayers = players[teamIndexB];
          console.log(players[teamIndexA])
          console.log(players[teamIndexB])
          that.setData({
            teamRedPlayers: teamRedPlayers,
            teamBluePlayers: teamBluePlayers
          })
          // console.log(that.data);
        }
      })
    }
  },
  bindPickerChangePlayerA: function(event) {
    var that = this;
    console.log('A的player索引为', event.detail.value);
    var indexA = that.data.indexA;
    this.setData({
      indexA: event.detail.value
    });
    wx.setStorage({
      key: 'indexA',
      data: event.detail.value
    })
  },
  bindPickerChangePlayerB: function(event) {
    var that = this;
    console.log('B的player索引为', event.detail.value);
    var indexB = that.data.indexB;
    this.setData({
      indexB: event.detail.value
    });
    wx.setStorage({
      key: 'indexB',
      data: event.detail.value
    })
  },

  bindPickerChangeTypeA: function(event) {
    var that = this;
    console.log('A行为的索引为：', event.detail.value);
    var typeIndexA = that.data.typeIndexA;
    this.setData({
      typeIndexA: event.detail.value
    });
    wx.setStorage({
      key: 'typeIndexA',
      data: event.detail.value
    })
  },
  bindPickerChangeTypeB: function(event) {
    var that = this;
    console.log('B行为的索引为：', event.detail.value);
    var typeIndexB = that.data.typeIndexB;
    this.setData({
      typeIndexB: event.detail.value
    });
    wx.setStorage({
      key: 'typeIndexB',
      data: event.detail.value
    })
  },
  addActivityRed: function(event) {
    var that = this;
    var indexA = that.data.indexA;
    var typeIndexA = that.data.typeIndexA;
    var data = that.data;
    var type = that.data.type;
    var process = that.data.process;
    var bigScoreB = that.data.bigScoreB;
    var bigScoreA = that.data.bigScoreA;
    var time = that.data.time;
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
    time = (h + ":" + m + ":" + s);
    process.push({
      id: data.teamRedPlayers[indexA],
      type: data.type[typeIndexA],
      isRed: true,
      time: time
    })
    if (type[typeIndexA] == '进球' || type[typeIndexA] == '点球进球') {
      bigScoreA++;
      that.setData({
        bigScoreA: bigScoreA
      });
      wx.setStorage({
        key: 'bigScoreA',
        data: bigScoreA
      })
    } else if (type[typeIndexA] == '乌龙') {
      bigScoreB++;
      that.setData({
        bigScoreB: bigScoreB
      });
      wx.setStorage({
        key: 'bigScoreB',
        data: bigScoreB
      })
    }
    that.setData({
      process: process
    });
    wx.setStorage({
      key: 'process',
      data: process
    })
  },
  addActivityBlue: function(event) {
    var that = this;
    var indexB = that.data.indexB;
    var typeIndexB = that.data.typeIndexB;
    var data = that.data;
    var type = that.data.type;
    var process = data.process;
    var bigScoreA = that.data.bigScoreA;
    var bigScoreB = that.data.bigScoreB;
    // var timestamp = that.data.timestamp;
    // var minute = that.data.minute; 
    // var second = that.data.second;
    // var now = (Date.parse(new Date())) / 1000;
    // var timeDifference = (now - timestamp);
    // if (timeDifference>=60){
    //   data.minute++;
    //   data.second = (timeDifference%60);
    // }
    var time = that.data.time;
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
    time = (h + ":" + m + ":" + s);
    process.push({
      id: data.teamBluePlayers[indexB],
      type: data.type[typeIndexB],
      isRed: false,
      time: time
    })
    if (type[typeIndexB] == '进球' || type[typeIndexB] == '点球进球') {
      bigScoreB++;
      that.setData({
        bigScoreB: bigScoreB
      })
      wx.setStorage({
        key: 'bigScoreB',
        data: bigScoreB
      })
    } else if (type[typeIndexB] == '乌龙') {
      bigScoreA++;
      that.setData({
        bigScoreA: bigScoreA
      })
      wx.setStorage({
        key: 'bigScoreA',
        data: bigScoreA
      })
    }
    that.setData({
      process: process
    });
    console.log(that);
    wx.setStorage({
      key: 'process',
      data: process
    })
  },
  startGame: function(event) {
    var that = this;
    var data = that.data;
    var timer = setInterval(function() {
      data.seconds++;
      if (data.seconds == 60) {
        data.seconds = 0;
        data.minutes++;
      }
      that.setData({
        seconds: data.seconds,
        minutes: data.minutes
      })
    }, 100);
    that.setData({
      timer: timer
    })
    wx.setStorage({
      key: 'timer',
      data: timer
    });
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    // console.log("当前时间戳为：" + timestamp);
    that.setData({
      timestamp: timestamp
    })
  },
  onHalfGameOver: function(event) {
    var that = this;
    var timer = that.data.timer
    clearInterval(timer);
    var data = that.data;
    that.setData({
      seconds: 0,
      minutes: 0
    })
  },
  onLastHalfStart: function(event) {
    var that = this;
    var data = that.data;
    var timer = setInterval(function() {
      data.seconds++;
      if (data.seconds == 60) {
        data.seconds = 0;
        data.minutes++;
      }
      that.setData({
        seconds: data.seconds,
        minutes: data.minutes
      })
    }, 100);
    that.setData({
      timer: timer
    })
  },
  onGameOver: function(e) {
    var that = this;
    var timer = that.data.timer
    clearInterval(timer);
    var data = that.data;
    var bigScoreA = data.bigScoreA;
    var bigScoreB = data.bigScoreB;
    var isMatch = data.isMatch;
    var teamIndexA = data.teamIndexA;
    var teams = data.teams;
    var teamIndexB = data.teamIndexB;
    var teamMatchNameA = data.teamMatchNameA;
    var teamMatchNameB = data.teamMatchNameB;
    teamMatchNameA = teams[teamIndexA];
    teamMatchNameB = teams[teamIndexB];
    that.setData({
      seconds: 0,
      minutes: 0,
      teamMatchNameA: teamMatchNameA,
      teamMatchNameB: teamMatchNameB
    });
    var time = that.data.time;
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
    time = (Y + "-" + M + '-' + D + ' ' + h + ":" + m + ":" + s);
    if ((that.data.teamNameA === '' || that.data.teamNameB === '') && (isMatch == false)) {
      wx.showToast({
        title: '请填写完整的比赛双方',
        icon: 'none',
      })
    } else if ((that.data.teamMatchNameA === that.data.teamMatchNameB) && (isMatch == true)) {
      wx.showToast({
        title: '双方为同一队伍',
        icon: 'none',
      })
    } else {
      if (bigScoreA > bigScoreB) {
        that.setData({
          time: time,
        })
        wx.showModal({
          title: '比赛结束',
          content: '比分：' + bigScoreA + ":" + bigScoreB + " " + (this.data.isMatch ? this.data.teamMatchNameA : this.data.teamNameA) + "胜",
          success: function(res) {
            that.onMatchAnnal();
          }
        });

      } else if (bigScoreA < bigScoreB) {
        that.setData({
          time: time
        })
        wx.showModal({
          title: '比赛结束',
          content: '比分：' + bigScoreA + ":" + bigScoreB + " " + (this.data.isMatch ? this.data.teamMatchNameB : this.data.teamNameB) + "胜",
          success: function(res) {
            that.onMatchAnnal();
          }
        });
      } else if (bigScoreA == bigScoreB) {
        that.setData({
          time: time
        })
        wx.showModal({
          title: '比赛结束',
          content: '比分：' + bigScoreA + ":" + bigScoreB + " " + "平",
          success: function(res) {
            that.onMatchAnnal();
          }
        });
      }
      const db = wx.cloud.database();
      db.collection('football').add({
        data: {
          teamNameA: that.data.teamNameA,
          teamNameB: that.data.teamNameB,
          teamMatchNameA: that.data.teamMatchNameA,
          teamMatchNameB: that.data.teamMatchNameB,
          isMatch: that.data.isMatch,
          bigScoreA: data.bigScoreA,
          bigScoreB: data.bigScoreB,
          process: that.data.process,
          time: that.data.time
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
  onMatchAnnal: function(event) {
    wx.navigateTo({
      url: 'matchAnnal/matchAnnal',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    console.log(this);
  },
  onRegame: function(e) {
    var that = this;
    var timer = that.data.timer
    clearInterval(timer);
    var data = that.data;
    that.setData({
      teamNameA: '',
      teamNameB: '',
      teamMatchNameA: '',
      teamMatchNameB: '',
      teamIndexA: 0,
      teamIndexB: 0,
      indexA: 0,
      indexB: 0,
      typeIndexA: 0,
      typeIndexB: 0,
      process: [],
      bigScoreA: 0,
      bigScoreB: 0,
      minutes: 0,
      seconds: 0
    })
    wx.setStorage({
      key: 'process',
      data: data.process
    })
    wx.setStorage({
      key: 'teamNameA',
      data: this.data.teamNameA
    })
    wx.setStorage({
      key: 'bigScoreA',
      data: this.data.bigScoreA
    })
    wx.setStorage({
      key: 'bigScoreB',
      data: this.data.bigScoreB
    })
    wx.setStorage({
      key: 'teamNameB',
      data: this.data.teamNameB
    })
    wx.setStorage({
      key: 'teamIndexA',
      data: this.data.teamIndexA
    })
    wx.setStorage({
      key: 'teamIndexB',
      data: this.data.teamIndexB
    })
    console.log(that);
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
    console.log(that)
    console.log(that.data.matchIndex)
    const db = wx.cloud.database();
    db.collection('teams').where({
      _id: 'ee3099285cda92f411e792ba125c5666',
    }).get({
      success(res) {
        console.log(res);
        // res.data 是包含以上定义的两条记录的数组
        if (that.data.matchIndex == 0) {
          console.log(res.data[0].teams);
          that.setData({
            teams: res.data[0].teams,
          })
          wx.setStorage({
            key: 'teams',
            data: teams
          })
        } else if (that.data.matchIndex == 1) {
          console.log(res.data[0].footballTeams);
          that.setData({
            teams: res.data[0].footballTeams,
          })
          wx.setStorage({
            key: 'teams',
            data: teams
          })
        } else if (that.data.matchIndex == 2) {
          console.log(res.data[0].femaleTeams);
          that.setData({
            teams: res.data[0].femaleTeams,
          })
          wx.setStorage({
            key: 'teams',
            data: teams
          })
        }
      }
    })
    wx.getStorage({
      key: 'indexA',
      success(res) {
        that.setData({
          indexA: res.data
        });
      }
    });
    wx.getStorage({
      key: 'indexB',
      success(res) {
        that.setData({
          indexB: res.data
        });
      }
    });
    wx.getStorage({
      key: 'typeIndexA',
      success(res) {
        that.setData({
          typeIndexA: res.data
        });
      }
    });
    wx.getStorage({
      key: 'typeIndexB',
      success(res) {
        that.setData({
          typeIndexB: res.data
        });
      }
    });
    wx.getStorage({
      key: 'process',
      success(res) {
        that.setData({
          process: res.data
        });
      }
    });
    wx.getStorage({
      key: 'bigScoreA',
      success(res) {
        that.setData({
          bigScoreA: res.data
        });
      }
    });
    wx.getStorage({
      key: 'bigScoreB',
      success(res) {
        that.setData({
          bigScoreB: res.data
        });
      }
    });
    wx.getStorage({
      key: 'timer',
      success(res) {
        that.setData({
          timer: res.data
        });
      }
    });
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
      key: 'teamMatchNameA',
      success(res) {
        that.setData({
          teamMatchNameA: res.data
        });
      }
    });
    wx.getStorage({
      key: 'teamMatchNameB',
      success(res) {
        that.setData({
          teamMatchNameB: res.data
        });
      }
    });
    wx.getStorage({
      key: 'teamIndexA',
      success(res) {
        that.setData({
          teamIndexA: res.data
        });
      }
    });
    wx.getStorage({
      key: 'teamIndexB',
      success(res) {
        that.setData({
          teamIndexB: res.data
        });
      }
    });
    wx.getStorage({
      key: 'isMatch',
      success(res) {
        that.setData({
          isMatch: res.data
        });
      }
    });
    wx.getStorage({
      key: 'matchIndex',
      success(res) {
        that.setData({
          matchIndex: res.data
        });
      }
    });
    wx.getStorage({
      key: 'matchName',
      success(res) {
        that.setData({
          matchName: res.data
        });
      }
    });
    wx.getStorage({
      key: 'teams',
      success(res) {
        that.setData({
          teams: res.data
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