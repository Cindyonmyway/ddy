//logs.js

Page({
  data: {
    latitude: "",
    longitude: "",
    name: "未选择定位",
    address: "",


    ts_currentIndex: -1,
    ts_show: false,
    ts_type: '选择类型',
    ts_typeArray: [{
        text: '足球'
      },
      {
        text: '篮球'
      },
      {
        text: '跑步'
      }, {
        text: '羽毛球'
      }
    ],
    ts_sort: '排序方式',
    ts_sortArray: [{
        text: '距离最短'
      },
      {
        text: '评分优先'
      },
      {
        text: '人数最少'
      }
    ],

    invi_msg: {
      invi_type: '足球',
      invi_date:"2019.6.6",
      invi_time: '8:00~10:00',
      invi_num: 4,
      invi_name: 'todd',
      invi_address: '华南师范大学',
      invi_grade: 3.0
    }

  },
  onLoad: function() {

  },


  test:function(e){
    var that = this;
    wx.openSetting({
      
    })
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
          fail:function(res){
            wx.openSetting({
              
            })
          }
        })
      }
    })
  },
  detail: function(e) {
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
        ts_show:false,
        ts_currentIndex:-1
      })
    } else {
      that.setData({
        ts_show:true,
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
      ts_currentIndex: -1
    });

  },

  ts_setSort: function(e) {
    const that = this;
    let theIndex = e.target.dataset.index;
    that.setData({
      ts_show: false,
      ts_sort: that.data.ts_sortArray[theIndex].text,
      ts_currentIndex: -1
    })
  }
})