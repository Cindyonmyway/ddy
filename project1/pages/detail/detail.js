// pages/detail/detail.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '足球',
    date: "2019.6.6",
    stime:'8:00',
    etime:'10:00',
    num: 4,
    pho: '/img/pic1.jpg',
    name: 'todd',
    address: '华南师范大学',
    address_detail: '广州市天河区中山大道西55号',
    grade: 3,
    type_icon: '/img/足球.png',
    instruction:'提前半小时在华师西门集合',
    myMark:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  mark:function(e){
    let that=this;
    that.setData({
      myMark:e.currentTarget.dataset.index+1
    });
  },

  confirm_score:function(e){
    wx.request({
      url: '',
      method: 'POST',
      data: {
        mark: myMark,
        id: this.data.id
      },
      success: function (res) {
        
      }
    })
  },

  accept:function(e){
    wx.request({
      url: '',
      method: 'POST',
      data: {
        id: this.data.id,
        openid:app.globalData.openid
      },
      success: function (res) {

      }
    });
    app.globalData.allInvites[inviteIndex].is_accept=1;
    app.globalData.accepts.push(app.globalData.allInvites[inviteIndex]);
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