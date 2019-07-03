//index.js
//获取应用实例
const app = getApp();


Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  myMsg: function() {
    wx.navigateTo({
      url: '../myMsg/myMsg'
    })
  },
  issue: function() {
    wx.navigateTo({
      url: '../issue/issue'
    })
  },
  inviHis: function() {
    wx.navigateTo({
      url: '../inviHis/inviHis',
    })
  },
  onLoad: function() {
    let that = this;
    

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
    //           app.globalData.userInfo = res.userInfo;
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           // if (this.userInfoReadyCallback) {
    //           //   this.userInfoReadyCallback(res)
    //           // }
    //           this.setData({
    //             userInfo: app.globalData.userInfo,
    //             hasUserInfo: true
    //           })
    //         }
    //       })
    //     }
    //   }
    // })




    

    // if (app.globalData.userInfo) {
    //   //console.log('1');
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     //console.log('2');
    //     // console.log(app.globalData.code);
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     });
    //     //console.log(app.globalData.userInfo);

    //   }
    // } else {
    //   //console.log('3');
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo;
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true,
    //       })
    //     }
    //   })
    // }

    /*wx.request({
      url: '',
      method:'POST',
      data: {
        name: that.data.userInfo.nickName,
        image: that.data.userInfo.avatarUrl
      },
      success:function(res){
        app.globalData.userMsg=res.data;
      }
    })*/
  },
  getUserInfo: function(e) {
    //console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    //console.log(app.globalData.userInfo);
    // wx.request({
    //   url: '',
    //   method: 'POST',
    //   data: {
    //     id:app.globalData.openid,
    //     name: this.data.userInfo.nickName,
    //     img: this.data.userInfo.avatarUrl
    //   },
    //   success: function (res) {
    //     app.globalData.invites=res.data.invitations;
    //     app.globalData.accepts=res.data.acceptances;
    //     app.globalData.user=res.data.user;
    //     app.globalData.allInvites=res.data.allInvite;
    //   }
    // })
  },
  test: function(e) {
    console.log('this is test')
  }
})