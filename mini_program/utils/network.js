const network = {
  getNewsPage: function(params) {
    var url = "";
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index?type=tiyu&key=a1683f8586d443a455181606a7775709',
      success: function(res) {
        // console.log(res);
        if (res.data.result) {
          var data = res.data.result.data;
          console.log(data);
          if (params.success) {
            params.success(data);
          }
        } else if (res.data.reason) {
          var reason = res.data.reason;
          console.log(reason);
          if (params.success) {
            params.success(reason);
          }
        }

      }
    })
  }
}

export {
  network
}