let baseurl = 'http://1.116.104.232:8080/fleamarket/'
var api = {
    avatar:'/static/logo.png',
    login: baseurl + 'wx/login',//用户登录（微信版）
    getInfo: baseurl + 'user/privatemessage',//用户详情页
    changeAvatar:baseurl+'user/uploadpicture',//用户上传/修改头像
    changeSignature:baseurl+'user/signature',//用户添加/修改个性签名
    getListByTag:baseurl+'type',//找到分类下所有商品
    getComments:baseurl+'user/myevaluations',//评价列表
}


export default api
