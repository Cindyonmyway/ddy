//logs.js
const app = getApp();

Page({
  data: {
    latitude: "",
    longitude: "",
    name: "未选择定位",
    address: "",


    ts_currentIndex: -1,
    ts_show: false,
    ts_type: '类型',
    ts_t_num: -1,
    ts_typeArray: [
      {text: '足球'},
      {text: '篮球'},
      {text: '跑步'},
      {text: '羽毛球'},
      {text: '逛街'},
      {text: '看书'},
      {text: '乒乓球'}, 
      {text: '其他'}
    ],
    ts_sort: '排序',
    ts_s_num: -1,
    ts_sortArray: [{
        text: '时间最近'
      },
      {
        text: '评分优先'
      },
      {
        text: '人数最少'
      }
    ],



    invi_msgs: [{
        type: '足球',
        date: "2019.6.6",
        stime:'8:00',
        etime:'10:00',
        num: 4,
        pho: '/img/pic1.jpg',
        name: 'todd',
        address: '华南师范大学',
        grade: 3,
      },
      {
        type: '篮球',
        date: "2019.6.9",
        stime: '8:00',
        etime: '11:20',
        num: 3,
        pho: '/img/pic2.jpg',
        name: 'lazy',
        address: '英东体育馆',
        grade: 4,
      },
      {
        type: '篮球',
        date: "2019.6.9",
        stime: '8:00',
        etime: '11:20',
        num: 3,
        pho: '/img/pic2.jpg',
        name: 'lazy',
        address: '英东体育馆',
        grade: 4,
      },
      {
        type: '篮球',
        date: "2019.6.9",
        stime: '8:00',
        etime: '11:20',
        num: 3,
        pho: '/img/pic2.jpg',
        name: 'lazy',
        address: '英东体育馆',
        grade: 4,
      },
      {
        type: '篮球',
        date: "2019.6.9",
        stime: '8:00',
        etime: '11:20',
        num: 3,
        pho: '/img/pic2.jpg',
        name: 'lazy',
        address: '英东体育馆',
        grade: 4,
      },
      {
        type: '篮球',
        date: "2019.6.9",
        stime: '8:00',
        etime: '11:20',
        num: 3,
        pho: '/img/pic2.jpg',
        name: 'lazy',
        address: '英东体育馆',
        grade: 4,
      },
      {
        type: '篮球',
        date: "2019.6.9",
        stime: '8:00',
        etime: '11:20',
        num: 3,
        pho: '/img/pic2.jpg',
        name: 'lazy',
        address: '英东体育馆',
        grade: 4,
      },
      {
        type: '篮球',
        date: "2019.6.9",
        stime: '8:00',
        etime: '11:20',
        num: 3,
        pho: '/img/pic2.jpg',
        name: 'lazy',
        address: '英东体育馆',
        grade: 4,
      },
      {
        type: '篮球',
        date: "2019.6.9",
        stime: '8:00',
        etime: '11:20',
        num: 3,
        pho: '/img/pic2.jpg',
        name: 'lazy',
        address: '英东体育馆',
        grade: 4,
      }
    ]

  },
  onLoad: function() {

  },

  getInvites: function() {
    wx.request({
      url: '',
      method: 'POST',
      data: {
        name: that.data.name,
        type: that.data.ts_type,
        sort: that.data.ts_sort
      },
      success: function(res) {
        app.globalData.invites = res.data;
      }
    })
  },


  test: function(e) {
    console.log(e);
  },

  chooseLocation: function(e) {
    var that = this;
    wx.getSetting({
      success: function(res) {
        wx.chooseLocation({
          success: function(res) {
            that.setData({
              latitude: res.latitude,
              longitude: res.longitude,
              name: res.name,
              address: res.address
            });
          },
          fail: function(res) {
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

  detail: function(e) {
    // console.log(e.currentTarget.dataset.index);
    // console.log("hi");
    app.globalData.inviteIndex = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../detail/detail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },



  ts_checkCurrent: function(e) {
    const that = this;
    if (that.data.ts_currentIndex == e.target.dataset.current) {
      that.setData({
        ts_show: false,
        ts_currentIndex: -1
      })
    } else {
      that.setData({
        ts_show: true,
        ts_currentIndex: e.target.dataset.current
      })
    }
  },

  ts_bindChange: function(e) {
    const that = this;
    that.setData({
      ts_currentIndex: e.detail.current
    })
  },

  ts_setType: function(e) {
    const that = this;
    let theIndex = e.target.dataset.index;
    that.setData({
      ts_show: false,
      ts_type: that.data.ts_typeArray[theIndex].text,
      ts_currentIndex: -1,
      ts_t_num: theIndex
    });

  },

  ts_setSort: function(e) {
    console.log(e);
    const that = this;
    let theIndex = e.target.dataset.index;
    that.setData({
      ts_show: false,
      ts_sort: that.data.ts_sortArray[theIndex].text,
      ts_currentIndex: -1,
      ts_s_num: theIndex
    })
  },

  more:function(e){
    // wx.request({
    //   url: '',
    //   method: 'POST',
    //   data: {
    //     index:20
    //   },
    //   success: function (res) {
    //     app.globalData.userMsg = res.data;
    //   }
    // })
  },

  askForNew:function(){
    // wx.request({
    //   url: '',
    //   method: 'POST',
    //   data: {
    //     type:this.data.ts_type,
    //     sort:this.data.ts_sort
    //   },
    //   success: function (res) {
    //     app.globalData.userMsg = res.data;
    //   }
    // })
  }
})