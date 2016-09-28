Page({
  data:{
    showLoading:false,
    modalHidden:true,
    toastSuccess:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    var url = options.url
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
  reading:function (e) {
    this.setData({
      modalHidden:false
    })
  },
  modalChange:function (e) {
    this.setData({
      modalHidden:true
    })
  },
  download:function (e) {
    this.setData({
      toastSuccess:false
    })
  },
  toastChange:function () {
    this.setData({
      toastSuccess:true
    })
  }
})