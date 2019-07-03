// pages/myMsg/myMsg.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    my_id: 'todd',
    grade:3,
    my_intro: 'No money no talk',
    my_favor:[0,0,1,0,0,0,0,0],

    userInfo: {},


    tags: [
      { name: 'football', value: '足球' },
      { name: 'basketball', value: '篮球' },
      { name: 'badminton', value: '羽毛球' },
      { name: 'shopping', value: '逛街' },
      { name: 'run', value: '跑步' },
      { name: 'read', value: '看书' },
      { name: 'pingpong', value: '乒乓球' },
      { name: 'other', value: '其他' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(app.globalData.userInfo);
    this.setData({
      userInfo:app.globalData.userInfo
    })
  },

  formSubmit:function(e){
    console.log(e.detail.value.favor);
    // for(let item in e.detail.value){
    //   console.log(item);
    // }
  },
  


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})