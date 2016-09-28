//index.js
//获取应用实例
var functions = require('../function.js')
var url='http://odog3v89f.bkt.clouddn.com/wx/home.json'
Page({
  data:{
    showLoading:true,
    banners: [],
    booksHot:[],
    booksNew:[]

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    functions.fetchData.call(that,url,function (data) {
      that.setData({
        showLoading: false
      })
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  swiperOnClik:function (e) {
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../bookinfo/index?url='+ds.url+'&title='+ds.title
    })
  }
})
