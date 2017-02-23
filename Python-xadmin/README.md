### django搭建web后台

#### 环境搭建
- 安装python,mysql,navicat
- 安装虚拟环境virtualenv :
    - pip install virtualenv
    - virtualenv 文件名
    - 文件名/scripts/pip install virtualenvwrapper-win
    - mkvirtualenv testvirr2 //虚拟环境
    - deactivate //退出环境
    - workon //选择进入哪个虚拟环境

#### 项目配置流程

- 安装mysql-python
- setting配置:DATABASES,TEMPLATES下的DIRS,STATICFILES_DIRS
- migration生成数据表
- 编写views.py
- 配置urls.py
- html与css分离与地址修改