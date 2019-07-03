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
    console.log(app.globalData.userInfo);
    wx.request({
      url: '',
      method: 'POST',
      data: {
        id:app.globalData.openid,
        name: this.data.userInfo.nickName,
        img: this.data.userInfo.avatarUrl
      },
      success: function (res) {
        app.globalData.invites=res.data.invitations;
        app.globalData.accepts=res.data.acceptances;
        app.globalData.user=res.data.user;
        app.globalData.allInvites=res.data.allInvite;
      }
    })
  },
  test: function(e) {
    console.log('this is test')
  }
})