---
outline: deep
---
<div style="background-color: #ffcccc; margin: 0; padding: 0;">

 **<span style="color:red; font-size: 24px;">！！！重要更新：由于阿里对云工开物计划的调整，现已经无法通过白嫖代金券获得免费服务器，但RDP方面的教程仍然适用！！！</span>**

</div>

![微信图片_20250126111121](/img/rdp/微信图片_20250126111121.jpg)

<p></p>

# 🤓如何用一台服务器构筑远程桌面

> 完成此项目大约需要30~35min

==*😭是否总觉得上课时要带上自己五斤重的游戏本太麻烦*==

==*😨是否总为笔记本的续航而感到担忧*==

==*🥳只要你跟着这个教程，你能得到:*==

==*😋无成本拿下一台属于你的服务器*==

==*🤩在任何地方，任何时间，用任何设备远程连接到你的电脑*==

==*🤗享受远程桌面带来的便利*==

> <small>现在网上那么多远程桌面服务，为什么要自己搭建呢？</small>

> [贴一段这类软件的隐私协议](/view.md)

## 一、参加阿里云云工开物计划

- 首先需要注册一个阿里云账号
- 阿里云网址: [https://www.aliyun.com/](https://www.aliyun.com/) 
- 直接用支付宝扫描注册一个就行
- 根据活动说明参加云工开物计划并领取300元代金券
- [阿里云高校计划_云工开物_助力高校科研与教育加速-阿里云](https://university.aliyun.com/mobile?userCode=94mwiuua)
- ![领取代金券](/img/rdp/yungongkaiwu.png)

<font color =red>如果完成了这一步，恭喜你已经超越80%的だいがくせい</font>

## 二、白嫖一台服务器
- 这里推介用轻量应用服务器，虽然功能比ECS少，但是ECS基础版全是3M小水管
- 🤓而阿里云的轻量应用可是有整整30M带宽1TB每月的流量，而且还便宜
- [轻量应用服务器](https://www.aliyun.com/product/swas)
- ![轻量应用服务器](/img/rdp/qingliang.png)

***配置选择***
### 1. **实例类型选择服务器实例**
+ ![实例类型](/img/rdp/shilileixing.png)

### 2. **地域建议选择海外的，如果选国内的的话域名解析可能要备案**
- 😝至于另外一个原因吗，欤? 似乎有个东西叫<span class = "hidden-text">~~Sing-box~~</span>?
- 申必代码
- <span class  = "hidden-text">~~aHR0cDovLzguMTM4LjE2OS4zMzo3OTk5L3VwbG9hZC9zYi5zaA==~~</span>
- ![地域](/img/rdp/diyu.png)
- 新加坡和日本的延迟如下:
    <figure style="text-align: center;">
    <img src="/img/rdp/ping.png" alt="新加坡" 
    style="width: 100%; height: 100%;">
    <figcaption>新加坡</figcaption>
    </figure>

    <figure style="text-align: center;">
    <img src="/img/rdp/ping2.png" alt="日本"
    style="width: 100%; height: 100%;">
    <figcaption>日本</figcaption>
    </figure>

- 再贴个广州的延迟
    <figure style="text-align: center;">
    <img src="/img/rdp/ping3.png" alt="广州"
    style="width: 100%; height: 100%;">
    <figcaption>广州</figcaption>
    </figure>
- 如果能抢到香港的话最好，大概20ms左右
  
### 3. **镜像选择CentOS 8 或者CentOS Stream 9**
![镜像](/img/rdp/jingxiang.png)

### 4. **套餐配置选择第一个**
![套餐](/img/rdp/taocan.png)

### 5. **购买时长选择1个月**
- 至于为什么不选一年，😤因为有某个大冤种直接买了一年的直接三天不到被封了，所以建议一个一个月买

### 6. **购买**
- 右下角购买时应该会有显示抵扣的，24*12 = 288，🥰这就是Ali爸爸的爱捏💖
- 这里因为之前买过了所以没有全部抵扣
![购买](/img/rdp/goumai.png)

- <font color =red>如果完成了这一步，恭喜你已经超越了90%的だいがくせい</font>

## 三、连接服务器并配置服务端

### 1.打开控制台修改sshd配置文件
- 由于轻量应用默认不开放root登录，所以需要修改sshd配置文件
- 打开控制台，选择远程连接
![远程连接](/img/rdp/yuancheng.png)
- 选择admin用户登录
![admin](/img/rdp/admin.png)
- > 输入vi /etc/ssh/sshd_config
- > 按i进入编辑模式
- 找到PermitRootLogin no这一行，将no改为yes
![修改](/img/rdp/xiugai.png)
- > 按ESC退出编辑模式
- > 输入:wq保存退出
- > 输入systemctl restart sshd重启sshd服务
- > 输入exit退出控制台

### 2.使用Xshell连接服务器
- *(如果有条件的话建议使用VSCode的Remote-SSH插件)*
- *(网上挺多教程的，可以参考一下)*
- [Xshell下载](http://8.138.169.33:8888/xshell/)
- 主机填写公网IP，端口填写22，用户名填写root，密码填写你的密码（记得在控制台重置密码）
![Chongzhi](/img/rdp/chongzhi.png)
![Xshell](/img/rdp/xshell.png)
- 在左边的用户身份验证输入账户密码
![Xshell](/img/rdp/xshell2.png)
- 连接成功后会出现如下界面
![Xshell](/img/rdp/xshell3.png)
- 选择接受并保存
![Xshell](/img/rdp/xshell4.png)

### 3.上传并启动frp服务端
- *frp是一个内网穿透工具,可用于将内网服务映射到公网*
- [frps下载](http://8.138.169.33:8888/frp/frp_0.59.0_linux_amd64.tar.gz)
- 使用Xftp上传frp_0.59.0_linux_amd64.tar.gz到服务器
- Xftp可以从工具栏打开
![Xftp](/img/rdp/xftp.png)
- 上传到root目录下
- 使用命令:
- > tar -zxvf frp_0.59.0_linux_amd64.tar.gz #解压
- > cd frp_0.59.0_linux_amd64 #进入文件夹
- > chmod +x frps #修改权限
- > nohup ./frps -c ./frps.toml > output.log 2>&1 & #后台运行
- <small>*如果有需要可自行搜索查看如何注册为系统服务*</small>
- 前往阿里云控制台，选择防火墙
![Fanghuoqiang](/img/rdp/fanghuoqiang.png)
- 点击**添加安全组规则** 开放7000和8000端口
![duankou](/img/rdp/duankou.png)   
![duankou](/img/rdp/duankou2.png)

- <font color =red>如果完成了这一步，恭喜你已经超越了99%的だいがくせい</font>

## 四、配置客户端
- [frpc下载](http://8.138.169.33:8888/frpc/)
- 解压到本地后使用记事本打开frpc.toml
![frpc](/img/rdp/frpc.png)
- 在解压位置下打开powershell，输入 
- > .\frpc.exe -c .\frpc.toml
- 显示如下即为成功
![frpc](/img/rdp/frpc2.png)
- 如显示失败请检查前面的步骤是否存在问题

> 🤠可选：将frpc注册为系统服务并开机自动启动
> 
> [nssm下载](http://8.138.169.33:8888/nsssm/)
> 
> 打开/win64/
> 
> 在当前目录下打开powershell
> 
> 输入 
> 
> > .\nssm.exe install Frpcservice "your\path\frpc.exe" -c "your\path\frpc.toml"

- <font color =red>如果完成了这一步，恭喜你已经超越了99.114514%的だいがくせい</font>

## 五、开启RDP服务
- 参见:
- [Windows家庭版开启远程桌面的方法](https://www.cnblogs.com/jingliangxiaozi/p/18143143)
- [Win10,Win11家庭版开启远程桌面接入功能-有详细操作截屏](https://www.cnblogs.com/ministep/p/15829494.html)
- [RDP Wrapper 监听器状态为 Not listening [not supported] 的解决方法](https://blog.csdn.net/NXY666/article/details/121152969)

## 六、连接远程桌面
- 😍如果能到了这一步，恭喜你也是个神人了
- 如果是ios设备，请前往APP Store下载**Microsoft Remote Desktop**，搜索结果的第一个就是
- 如果是安卓设备，请前往应用商店下载**Microsoft Remote Desktop**
- > 以下基于ios设备演示
- 打开软件，点击下方的加号，选择添加桌面

![rdp1](/img/rdp/rdp1.jpg)

- 输入服务器的公网IP与端口，点击保存

![rdp2](/img/rdp/rdp2.jpg)
> <small>如果觉得总是要输ip麻烦可以注册一个域名然后再绑定</small>
> <small>[域名](https://wanwang.aliyun.com/domain/?source=5176.29345612&userCode=94mwiuua)</small>
- 点击刚刚添加的桌面，输入用户名与密码

![rdp5](/img/rdp/rdp5.jpg)

![rdp6](/img/rdp/rdp6.jpg)
- ***注意：用户名在开始菜单的左下角查看；密码不是PIN码，而是微软账号的密码，如果忘记可以在【设置】-【账户】-【登录选项】-【密码】中更改***

- 登录成功后即可连接到远程桌面
- <font color =red>如果完成了这一步，恭喜你已经超越了99.999%的だいがくせい！！！👍👍👍爆赞</font>

- EOF

~~<span class = "hidden-text">ん？至于我为什么要做这个教程？如果你在阿里云产生了消费我是有返水的啦~</span>~~

