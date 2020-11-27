// pages/service/service.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  booking: function() {

    wx.reLaunch({

      url: `/pages/booking/booking?service_id=${this.options.id}`,
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options)
    let page = this;
    
    
    // Get api data
    wx.request({
      url: `http://localhost:3000/api/v1/services/${options.id}`,
      method: 'GET',
      success(res) {
        const service = res.data;
        console.log(service)
        console.log(service.ebae)
        // Update local data
        page.setData({
          service
        });

        wx.hideToast();
      }
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})