//app.js
App({

  onLaunch: function() {
    let that = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录




    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     let info = 'scope.userInfo';
    //     //let location = 'scope.userLocation';
    //     if (!res.authSetting[info]) {
    //       wx.openSetting({

    //       })
    //     }
    //     // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //     else {
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })

    wx.login({
      //获取code
      success: function(res) {
        var code = res.code; //返回code
        that.globalData.code = code;
        //console.log(that.globalData.code);
        // wx.request({
        //   url: '?code='+code,
        //   method: 'POST',
        //   data: {
        //     code:code
        //   },
        //   success: function (res) {
        //     that.globalData.openid=res
        //   }
        // })
      }
    })
  },
  globalData: {
    code: 'test',
    openid: 'empty',
    userInfo: null,
    
    invites: ['', '']
  }

})