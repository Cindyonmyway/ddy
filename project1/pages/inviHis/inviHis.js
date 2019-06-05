// pages/inviHis/inviHis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    invi_msg: {
      invi_type: '足球',
      invi_date: "2019.6.6",
      invi_time: '8:00~10:00',
      invi_num: 4,
      invi_name: 'todd',
      invi_address: '华南师范大学',
      invi_grade: 3.0
    }
  },

  detail: function (e) {
    wx.navigateTo({
      url: '../detail/detail',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  bindChange:function(e){
    const that=this;
    that.setData({
      currentIndex: e.detail.current
    })
  },

  checkCurrent: function (e) {
    const that = this;
    if (that.data.currentIndex === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentIndex: e.target.dataset.current
      })
    }
  }
,

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