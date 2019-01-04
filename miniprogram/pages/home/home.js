Page({
  data: {
    articleList: []
  },
  onPullDownRefresh() {
    this.fetchData();
  },
  /**
   * 获取最新发布的游记文章
   */
  fetchData: function () {
    wx.showLoading({
      title: '正在加载',
    })
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection('article').get({
      success: res => {
        res.data.map(item => {
          item.article_content = JSON.parse(item.article_content);
        })
        this.setData({
          articleList: res.data
        })
        wx.hideLoading();
      },
      fail: err => {
        wx.hideLoading();
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
      }
    })
  },
  onLoad: function (options) {
    this.fetchData();
  }
})