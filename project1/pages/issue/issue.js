// pages/issue/issue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:'',
    longitude:'',
    name:'请选择地点',
    address:'',

    value:[],
    years:[],
    months:[],
    days:[],
    year:'',
    month:'',
    day:'',

    hours:[],
    mins:[],
    secs:[],
    sHour:0,
    sMin:0,
    eHour: 0,
    eMin: 0,

    showDate:false,
    showSTime:false,
    showETime:false,
  },

  formSubmit:function(e){
    let amount=(e.detail.value.amount.length==0);
    let detail = (e.detail.value.detail.length == 0);
    let name = (this.data.name == '请选择地点');
    if(amount||detail||name){
      console.log('表单未填写完整');
      return;
    }
    console.log('表单已填写完整');
  },

  chooseLocation:function(e){
    var that = this;
    wx.getSetting({
      success: function (res) {
        wx.chooseLocation({
          success: function (res) {
            that.setData({
              latitude: res.latitude,
              longitude: res.longitude,
              name: res.name,
              address: res.address
            });
          },
          fail:function(res){
            wx.openSetting({
              
            })
          }
        })
      }
    });
    // console.log(that.data.latitude);
    // console.log(that.data.longitude);
    // console.log(that.data.name);
    // console.log(that.data.address);
  },

  showDate:function(e){
    let that=this;
    that.setData({
      showDate:true
    })
  },

  closeDate: function (e) {
    let that = this;
    that.setData({
      showDate: false
    })
  },


  showSTime:function(e){
    let that = this;
    that.setData({
      showSTime: true
    })
  },

  closeSTime: function (e) {
    let that = this;
    that.setData({
      showSTime: false
    })
  },

  showETime: function (e) {
    let that = this;
    that.setData({
      showETime: true
    })
  },

  closeETime: function (e) {
    let that = this;
    that.setData({
      showETime: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    let date=new Date();
    let theYears=[];
    let theMonths=[];
    let theDays=[];
    let theHours=[];
    let theMins=[];
    let values=[];
    values.push(0);
    values.push(date.getMonth());
    values.push(date.getDate()-1);
    for (let i = date.getFullYear(); i <= date.getFullYear()+1; i++) {
      theYears.push(i)
    }
    for (let i = 1; i <= 12; i++) {
      theMonths.push(i)
    }
    for (let i = 1; i <= 31; i++) {
      theDays.push(i)
    }

    for (let i = 0; i <= 23; i++) {
      theHours.push(i)
    }
    for (let i = 0; i <= 59; i++) {
      theMins.push(i)
    }

    that.setData({
      years: theYears,
      months: theMonths,
      days: theDays,
      hours:theHours,
      mins:theMins,

      year: date.getFullYear(),
      month: date.getMonth()+1,
      day: date.getDate(),

      sHour:0,
      sMin:0,
      eHour: 0,
      eMin: 0,

      value:values
    })
  },

  dateChange:function(e){
    let that=this;
    let val=e.detail.value;
    that.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  },

  sTimeChange: function (e) {
    let that = this;
    let val = e.detail.value;
    that.setData({
      sHour: this.data.hours[val[0]],
      sMin: this.data.mins[val[1]],
    })
  },

  eTimeChange: function (e) {
    let that = this;
    let val = e.detail.value;
    that.setData({
      eHour: this.data.hours[val[0]],
      eMin: this.data.mins[val[1]],
    })
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