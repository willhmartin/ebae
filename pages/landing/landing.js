// pages/landing/landing.js
Page({

  /**
   * Page initial data
   */
  data: {
  },

  // goToServicePage: function () {
  //   console.log('clicked')
  //   wx.navigateTo({
  //     url: '/pages/service/service'
  //   })
  // },
  onClick: function (event) {
    console.log(event)
    console.log(event.currentTarget.dataset)
    //get event from id
    const id = event.currentTarget.dataset.id
    console.log(event.currentTarget.dataset)
    console.log(id)

    wx.reLaunch({

      url: `/pages/service/service?id=${id}`
    })
//  parameters cannot be appended after a tab switch url
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this
    wx.request({
      url: 'http://localhost:3000/api/v1/services',
      method: 'GET',
      success(res) {
        console.log(res.data)
        const services = res.data
        console.log(services)
        page.setData({services})
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