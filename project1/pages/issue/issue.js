// pages/issue/issue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: '',
    longitude: '',
    name: '未选择地点',
    address: '',

    types:[
      { name: 'football', value: '足球',checked:'checked' },
      { name: 'basketball', value: '篮球' },
      { name: 'badminton', value: '羽毛球' },
      { name: 'shopping', value: '逛街' },
      { name: 'run', value: '跑步' },
      { name: 'read', value: '看书' },
      { name: 'pingpong', value: '乒乓球' },
      { name: 'other', value: '其他' }
    ],

    date:'',

    value: [],
    years: [],
    months: [],
    dayInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    days: [],
    year: '',
    month: '',
    day: '',

    hours: [],
    mins: [],
    secs: [],
    sHour: 0,
    sMin: 0,
    eHour: 0,
    eMin: 0,

    showDate: false,
    showSTime: false,
    showETime: false,
  },

  formSubmit: function(e) {
    console.log(e);
    let v_time = (e.detail.value.valid_time.length == 0 || e.detail.value.valid_time == 0);
    let amount = (e.detail.value.amount.length == 0 || e.detail.value.amount==0);
    let detail = (e.detail.value.detail.length == 0);
    let name = (this.data.name == '未选择地点');

    let time=false;
    let date=this.data.date;
    let month=this.data.month;
    let day=this.data.day;

    let sHour=this.data.sHour;
    let sMin=this.data.sMin;
    let eHour=this.data.eHour;
    let eMin=this.data.eMin;

    if(month<(date.getMonth()+1)||day<date.getDate()){
      time=true;
    }else if(sHour>eHour||(sHour==eHour&&sMin>eMin)){
      time=true;
    }
    // console.log(this.data.date);
    // console.log(this.data.date.getFullYear());
    // console.log(this.data.date.getMonth()+1);
    // console.log(this.data.date.getDate());

    // console.log(this.data.dayInMonth[1]);
    if (v_time||amount || detail || name||time) {
      console.log('表单未填写完整');
      return;
    }
    console.log('表单已填写完整');
  },

  chooseLocation: function (e) {
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
          fail: function (res) {
            success: (res) => {
              let location = 'scope.userLocation';
              if (!res.authSetting[location]) {
                wx.openSetting({

                })
              }
            }
          }
        })
      }
    })
  },

  showDate: function(e) {
    let that = this;
    that.setData({
      showDate: true
    })
  },

  closeDate: function(e) {
    let that = this;
    that.setData({
      showDate: false
    })
  },


  showSTime: function(e) {
    let that = this;
    that.setData({
      showSTime: true
    })
  },

  closeSTime: function(e) {
    let that = this;
    that.setData({
      showSTime: false
    })
  },

  showETime: function(e) {
    let that = this;
    that.setData({
      showETime: true
    })
  },

  closeETime: function(e) {
    let that = this;
    that.setData({
      showETime: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    let date = new Date();
    let theYears = [];
    let theMonths = [];
    let theDays = [];
    let theHours = [];
    let theMins = [];
    let values = [];
    let dayInMonth = that.data.dayInMonth;

    if (date.getFullYear() % 4 == 0 && date.getFullYear() % 100 != 0) {
      dayInMonth[1] = 29;
    }

    values.push(0);
    values.push(date.getMonth());
    values.push(date.getDate() - 1);
    for (let i = date.getFullYear(); i <= date.getFullYear() + 1; i++) {
      theYears.push(i)
    }
    for (let i = 1; i <= 12; i++) {
      theMonths.push(i)
    }
    for (let i = 1; i <= dayInMonth[values[1]]; i++) {
      theDays.push(i)
    }
    for (let i = 0; i <= 23; i++) {
      theHours.push(i)
    }
    for (let i = 0; i <= 59; i++) {
      theMins.push(i)
    }

    that.setData({
      date:date,

      years: theYears,
      months: theMonths,
      days: theDays,
      hours: theHours,
      mins: theMins,

      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),

      sHour: 0,
      sMin: 0,
      eHour: 0,
      eMin: 0,

      value: values
    })
  },

  dateChange: function(e) {
    let that = this;
    let val = e.detail.value;
    let year = this.data.years[val[0]];
    let month = this.data.months[val[1]];
    let day = this.data.days[val[2]];
    let dayInMonth = that.data.dayInMonth;
    let theDays=[];
    
    if (year % 4 == 0 && year % 100 != 0) {
      dayInMonth[1] = 29;
    }
    for (let i = 1; i <= dayInMonth[month-1]; i++) {
      theDays.push(i)
    }

    that.setData({
      year: year,
      month: month,
      day: day,
      days:theDays
    });
  },

  sTimeChange: function(e) {
    let that = this;
    let val = e.detail.value;
    that.setData({
      sHour: this.data.hours[val[0]],
      sMin: this.data.mins[val[1]],
    })
  },

  eTimeChange: function(e) {
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