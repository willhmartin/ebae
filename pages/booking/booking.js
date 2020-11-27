// pages/booking/booking.js
Page({

  /**
   * Page initial data
   */
  data: {
    locations: ['Baoshan', 'Changning', 'Hongkou', 'Huangpu', 'Jing\'an', 'Minhang', 'Pudong', 'Putuo', 'Qingpu', 'Songjiang', 'Xuhui', 'Yangpu'],
    events: ['Birthday', 'Wedding', 'Funeral', 'Family Function'],
    roles: ['Boyfriend', 'Friend', 'Husband', 'Partner'],
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // let page = this;
    
   
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
  setEvent: function(e) {
    console.log(e)
    this.data.events[e.detail.value]
    this.setData({event:this.data.events[e.detail.value]})
    
  },

  setLocation: function(e) {
    console.log(e)
    this.data.events[e.detail.value]
    this.setData({location:this.data.locations[e.detail.value]}) 
    const picked = e.detail.value
  },

  setDate: function(e) {
    console.log(e)
    this.data.events[e.detail.value]
    this.setData({date:e.detail.value}) 
  },

  setTime: function(e) {
    console.log(e)
    this.data.events[e.detail.value]
    this.setData({time:e.detail.value}) 
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
  submitBooking: function (e) {
    console.log(e);
    const service_id = this.options.service_id
    const user_id = getApp().globalData.userId
    console.log(service_id)
    console.log(user_id)
    // const id = this.data.service_id
    // console.log(id)
    const booking = {
      location: this.data.location,
      event: this.data.event,
      date: this.data.date + " " + this.data.time,
      dateOnly: this.data.date
  
    }
    console.log(booking)
    
    wx.request({
      url: `http://localhost:3000/api/v1/services/${service_id}/bookings?user_id=${user_id}`,
      method: 'POST',
      data: booking,
      success(res) {
        console.log('works?', res)
        const id = res.data.id
         console.log(id)
         wx.navigateTo({
          url: `/pages/confirmation/confirmation?id=${id}`
      
        })
  
      }
    });

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