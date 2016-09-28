/*
*获取网络数据
* */
module.exports={
    fetchData: function(url,cb){
        var that = this
        fetch(url).then(function(response){
            response.json().then(function(data){
                that.setData({
                    banners: that.data.banners.concat(data.banner),
                    booksHot:that.data.booksHot.concat(data.hotBook),
                    booksNew:that.data.booksNew.concat(data.newBook)
                })
                cb(data)
            })
        })
    }
}