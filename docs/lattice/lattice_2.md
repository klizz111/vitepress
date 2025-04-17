---
outline: deep
prev:
    text: 一、什么是格？
    link: lattice/lattice_1
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---

# 格密码学习笔记二：*Babai*算法与*GGH*加密方案

## 前言 

- 之前说了格上的困难问题主要都可以规约到*SVP*、*CVP*和*LWE*问题上，具体如何在实际方案中应用，可以先了解一下*Babai*算法。
- 格密码的安全性和抗量子性依个人理解来说，是主要靠*噪声*的引入来实现的。
- 而*Babai*算法就是一个可以**去噪声**的算法，可以用来解决*CVP*问题。

## Babai算法简介

- 先上定义：
![img](/img/lattice/2/1.png)
- 现在光看这个定义觉得抽象没关系，举个例子就懂了。
![img](/img/lattice/2/2.png)
![img](/img/lattice/2/3.png)
![img](/img/lattice/2/4.png)

这里的系数$t_i$其实就是矩阵$T \leftarrow wV^{-1}$中的元素，而$a_i$就是对$T$取整的结果，既$A \leftarrow [T]$。

- 看上去很神奇，但是实际上就是简单的矩阵运算，这里能够抗噪声主要是因为格是离散的，对于数据的**取整**达到最终去噪声的效果。

## Babai算法代码示例
