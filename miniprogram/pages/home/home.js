Page({
  data: {
    articleList: []
  },
  /**
   * 获取最新发布的游记文章
   */
  fetchData: function () {
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection('article').get({
      success: res => {
        this.setData({
          articleList: res.data
        })
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },
  onLoad: function (options) {
    this.fetchData();
  }
})