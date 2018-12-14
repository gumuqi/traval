// miniprogram/pages/articleEditor/editor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  formSubmit: function (e) {
    const values = e.detail.value;
    const db = wx.cloud.database()
    db.collection('article').add({
      data: {
        article_title: values.article_title,
        article_content: values.article_content,
        article_time: new Date(),
        article_share: values.article_share,
        comment_num: 0
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          counterId: res._id,
          count: 1
        })
        wx.navigateBack();
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
      }
    })
  }
})