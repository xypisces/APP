# 一个微商城网站的界面设计开发..

### 使用了sui框架.

1. 微信端的浏览器缓存问题
解决: 1. 对引用到的每个JS和CSS文件名后缀添加md5的标记(gulp-rev,gulp-rev-replace)
      2. 清理微信的存储空间
      3. url后面添加参数
      4. url自带随机数 cacheBuster

2. CSS样式继承问题