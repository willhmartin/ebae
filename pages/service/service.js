// pages/service/service.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  booking: function() {
    wx.navigateTo({
      url: '/pages/booking/booking',
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this;

    // Get api data
    wx.request({
      url: `http://localhost:3000/api/v1/services/42`,
      method: 'GET',
      success(res) {
        const service = res.data;

        // Update local data
        page.setData({
          service: service
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