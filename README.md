# 一个微商城网站的界面设计开发..

### 使用了sui框架.

### 微信端的浏览器缓存问题

解决: 
<ul>
<li>1. 对引用到的每个JS和CSS文件名后缀添加md5的标记(gulp-rev,gulp-rev-replace)</li>
<li>2. 清理微信的存储空间</li>      
<li>3. url后面添加参数 ( ajax方面也是)</li>      
<li>4. url自带随机数 cacheBuster</li>      
</ul>

### CSS样式继承问题

解决: 	
<ul>
<li>1. 尽量使用单独文件,不要为了方便而直接内联.</li>
<li>2. 命名要规范!</li> 
</ul>	

### 与后端沟通问题
### SVN的使用~


###output\yiyuan
龙岗医院手机端页面开发(基于dedecms)---在原有的PC端基础上

yiyuan文件夹属于本地编辑的预览页面

output文件夹属于关于dede的模板文件