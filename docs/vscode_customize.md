---
outline: deep
lastUpdated: true
---

# 自定义个性化VSCode主题

## 前言

- 之前觉得VSCode的默认语法高亮不够好看，特别是不同语言之间的高亮差异太大了，同时也想着整一个霓虹灯效果，结果人机CSDN上都是清一色的复制粘贴，全让替换成*SynthWave '84*这个主题，但是说白了就是***Custom CSS and JS Loader***这个插件罢了😅，网上的一堆文章半天扯不到重点。
- 这篇文章讲一下怎么用这个插件实现主题自定义，主要是如何选取想要自定义的元素，剩下的样式想要怎么定义直接AI就行。

## 插件下载安装

- 这个不多说了，直接在VSCode的插件市场搜索*Custom CSS and JS Loader*，安装就行。
![image](/img/vscode/1.png)

## 配置插件

- 安装完成后，打开VSCode的设置，搜索*Custom CSS and JS*，找到*Custom CSS and JS: Path*，点击右侧的*Edit in settings.json*，在settings.json中添加如下配置：
```json
"vscode_custom_css.imports": [
    "file:///D://your/path/*.css" // 这里是你css文件的路径
],
```

## 编写CSS文件

- 然后就可以开始编写css自定义界面了，编写完成后按*F1*,直接搜CSS，然后选择*Reload Custom CSS and JS*，就可以看到效果了。
![image](/img/vscode/2.png)
- 如果点了之后没有自动重载的话可以继续按*F1*，然后选择*Developer: Reload Window*，就可以看到效果了。

## 如何选取想要自定义的元素

- 这里就需要用到*DevTools*了，按*F1*，然后选择*Developer: Toggle Developer Tools*，打开开发者工具。(或者在上方工具栏->*Help*(帮助)->*Toggle Developer Tools*(切换开发者工具))  
- 这里可以先参考[*SynchWave '84*](https://github.com/robb0wen/synthwave-vscode)的主题，或者我在这基础上添加了一些元素的[主题](css.md)。

### 选取元素的方法

1. 直接选取：打开Dev Tools后，点击左上角的鼠标图标，然后在想要选取的元素上点击一下，就可以在右侧的*Elements*中看到对应的元素了。这里显示是*span.mtk10*。
> 这里以代码高亮为例，可以看到，代码块被语言服务器标记为***mtk****的形式，这边由于class只作用于编辑器中，所以直接用类选择器就行了。
![image](/img/vscode/3.png)
```css
/* 这里要实现霓虹效果主要是text-shadow属性 */
.mtk10 {
    color: #9cdcfe;
    text-shadow: 0 0 2px #393a33, 0 0 4px #2e80d2, 0 0 8px #32ece6dd,
        0 0 10px #2ee1e775;
}
```

2. 使用Dev Tools的元素检视工具：在上一步的基础上如果想要选取更深层的元素，如工具栏上的某一个小图标，可以先跟**1**一样点击选取，等到右侧元素同步后，右键点击想要选取的元素，选择*Copy(复制)*->*Copy selector(复制selector)*，就可以复制到该元素的选择器了。
> 如我在这里选择右下角终端的×图标
![image](/img/vscode/4.png)
> 最后复制出来的selector就是这一个元素的了
> ```css
> #workbench\.parts\.panel > div.composite.title.has-composite-bar > div.global-actions > div > div > ul > li:nth-child(2) > a
> ```

3. 利用**样式**工具，可以直接在*Elements*中选中元素后，右侧的*Styles*中就会显示该元素的所有样式了，悬浮到selector上可以看到这个selector影响的所有元素，适用于对例如左边栏下边栏等存在多种元素的情况，也可以用来检查前面两种方法选取的元素是否正确。
> ![image](/img/vscode/5.png)
> ![image](/img/vscode/6.png)

4. 对于一些奇奇怪怪难以选中的其实还可以试试**录制器**工具，这里就不多展开了

## 其他

- 其实这个插件还支持导入js的，但是Electron这里的加载顺序好像是先加载自定义的js再渲染页面，所以基本上可以说用不了。
- 而且VSCode现在默认是不支持动画效果的，如果想要有动画效果可以试一下***VSCode Animations***这个插件，就是挺吃性能的。
- 最后贴一下我自己写的[主题](css.md)的效果。
![image](/img/vscode/7.png)
