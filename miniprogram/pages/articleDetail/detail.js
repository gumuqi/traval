// pages/articleDetail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages = getCurrentPages();
    pages.map(p => {
      if (p.route.indexOf('home') > -1) {
        p.data.articleList.map(art => {
          if (art._id == options.articleId) {
            this.setData({
              detail: art
            })
          }
        })
      }
    })
  },
  open: function () {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    });
  }
})