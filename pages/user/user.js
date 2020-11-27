// pages/user/user.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this
    wx.request({
      url: `http://localhost:3000/api/v1/users/${getApp().globalData.userId}`,
      method: 'GET',
      success(res) {
        console.log('works?', res)
        const user = res.data
        console.log(user.name)
        page.setData({user})
      }
    })

    




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
    let page = this
    wx.request({
      url: `http://localhost:3000/api/v1/users/${getApp().globalData.userId}/bookings`,
      method: 'GET',
      success(res) {
        console.log('works?', res)
        const bookings = res.data
        console.log(bookings)
        page.setData({bookings})
      }
    })
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