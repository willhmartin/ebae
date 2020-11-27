// pages/confirmation/confirmation.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  goToLandingPage: function () {
    console.log('clicked')
    wx.switchTab({
      url: '/pages/landing/landing'
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this
    const id = options.id
    console.log(this)
    wx.request({
      url: `http://localhost:3000/api/v1/bookings/${id}`,
      method: 'GET',
      success(res) {
        const ebae = res.data
        console.log(ebae)
        page.setData({ebae})
      }
    })
    wx.request({
      url: `http://localhost:3000/api/v1/users/${getApp().globalData.userId}`,
      method: 'GET',
      success(res) {
      const user = res.data
      console.log(user)
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