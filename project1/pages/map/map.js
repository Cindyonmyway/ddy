// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: "",
    longitude: "",
    markers: [],
    circles: [],
    address:"",
    mapCtx: {}
  },

  locationClick: function(e) {
    var that = this;
    wx.getLocation({
      type: "wgs84",
      success: function(res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            latitude: res.latitude,
            longitude: res.longitude
          }]
        })
      }
    });
  },

  regionChange: function(res) {
    /*if (res.type != "end")
      return;
    var that = this;
    this.mapCtx = wx.createMapContext("centerChange");
    console.log('begin');
    this.mapCtx.getCenterLocation({
      type: 'gcj02',
      complete: function (res) {
        console.log('here')
        
      }
    })*/


    /*console.log('here');
    this.mapCtx.getCenterLocation({
      type: "wgs84",
      success: function(res) {
        console.log('there');
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            latitude: res.latitude,
            longitude: res.longitude
          }]
        })
      }
    });*/
  },

  chooseLocation: function(e) {
    var that=this;
    wx.openSetting({
      success: function(res) {
        wx.chooseLocation({
          success: function(res) {
            that.setData({
              latitude: res.latitude,
              longitude: res.longitude,
              markers: [{
                latitude: res.latitude,
                longitude: res.longitude
              }],
              address:res.address
            });
            //console.log(address);
          }
        })
      }
    })
  },

  test: function(e) {
    var that=this;
    console.log(this.data.address);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getLocation({
      type: "wgs84",
      success: function(res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            latitude: res.latitude,
            longitude: res.longitude
          }],
          circles: [{
            latitude: res.latitude,
            longitude: res.longitude,
            radius: 10,
            strokeWidth: 2,
            fillColor: "#FAFAD2",
            color: "#90EE90"
          }]
        })
      }
    })
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

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