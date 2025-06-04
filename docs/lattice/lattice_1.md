---
outline: deep 
prev: false
next:
    text: 二、Babai算法与GGH加密方案
    link: lattice/lattice_2

head:
    - - link
      - rel: stylesheet
        href: /katex.min.css
---

# 格密码学习笔记一：什么是格？

- [格简介](https://zhuanlan.zhihu.com/p/161411204)

## 格的定义

![格](/img/lattice/1/1.png)
- 说白了就是一个线性无关的矩阵，既$Det \neq 0$。
- 对于格更直观的理解：例如在一个二维的空间中存在一个线性无关的基向量，显然两个向量可以组成一个四边形，通过不断的平移这个四边形可以把整个二维空间划分为一个个小的四边形，这些小四边形就叫做格。

## 优质基与劣质基
![优质基与劣质基](/img/lattice/1/2.png)
- 关于优质基的生成可以参考[这里](https://klizz.top/lattice/lattice_3.html#%E4%BB%A3%E7%A0%81%E4%B8%BE%E4%BE%8B)

