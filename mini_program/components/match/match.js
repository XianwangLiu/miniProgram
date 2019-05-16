// components/match/match.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type:{
      type:String,
      value:''
    },
    matchId:{
      type: String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onRegister: function (e) {
      wx: wx.navigateTo({
        url: 'register/register',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    },
    onSchedule: function (e) {
      wx: wx.navigateTo({
        url: 'schedule/schedule',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  }
})
