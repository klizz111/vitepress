---
outline: deep
prev:
    text: 一、什么是格？
    link: lattice/lattice_1
next:
    text: 三、GGH公钥加密方案
    link: lattice/lattice_3
head:
    - - link
      - rel: stylesheet
        href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---

<style>
.terminal {
  background-color: #2d2d2d;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  margin: 20px 0;
  overflow: hidden;
}

.terminal-header {
  background-color: #424242;
  padding: 10px;
  display: flex;
  gap: 6px;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.red { background-color: #FF5F56; }
.yellow { background-color: #FFBD2E; }
.green { background-color: #27C93F; }

.terminal-content {
  padding: 15px;
  color: #fff;
  font-family: monospace;
}

.terminal-content pre {
  margin: 0;
  white-space: pre-wrap;
}
</style>

# 格密码学习笔记二：*Babai*算法

## 前言

-   之前说了格上的困难问题主要都可以规约到*SVP*、*CVP*和*LWE*问题上，具体如何在实际方案中应用，可以先了解一下*Babai*算法。
-   格密码的安全性和抗量子性依个人理解来说，是主要靠*噪声*的引入来实现的。
-   而*Babai*算法就是一个可以**去噪声**的算法，可以用来解决*CVP*问题。

## Babai 算法简介

-   先上定义：
    ![img](/img/lattice/2/1.png)
-   现在光看这个定义觉得抽象没关系，举个例子就懂了。
    ![img](/img/lattice/2/2.png)
    ![img](/img/lattice/2/3.png)
    ![img](/img/lattice/2/4.png)

这里的系数$t_i$其实就是矩阵$T \leftarrow wV^{-1}$中的元素，而$a_i$就是对$T$取整的结果，既$A \leftarrow [T]$。

-   看上去很神奇，但是实际上就是简单的矩阵运算，这里能够抗噪声主要是因为格是离散的，对于数据的**取整**达到最终去噪声的效果。

## Babai 算法示例

-   sage 内置有格密码运算的相关函数，这里使用[_sage.crypto.gen_lattice_](https://doc.sagemath.org/html/en/reference/cryptography/sage/crypto/lattice.html)函数产生格，函数的其他具体参数参考 sage 官网文档。

```python
# sage
# type: ignore

# 生成维度为3的一个优质基
# m:格的维度，q:格的模数，seed:随机种子
# 这里建议m>=q，否则可能会报错，格的随机性也会差一些。
V = sage.crypto.gen_lattice(m=5, q=11, seed=None)
print(V)
```

<div class="terminal">
  <div class="terminal-header">
    <div class="terminal-button red"></div>
    <div class="terminal-button yellow"></div>
    <div class="terminal-button green"></div>
  </div>
  <div class="terminal-content">
    <pre><code>[2 0 0 0 0]
[0 2 0 0 0]
[0 0 2 0 0]
[0 0 0 2 0]
[0 0 1 0 1]</code></pre>
  </div>
</div>

- 这里计算一下Hadamard比率

```python
# Hadamard比率计算
def hadamard_ratio(V):
    prod_norm = 1
    n = V.nrows()
    for i in range(n):
        row = V.row(i)
        row_norm = row.norm()  # 计算欧几里得氏范数
        prod_norm *= row_norm
    # 计算 Hadamard 比率：行列式的绝对值与行范数乘积的比值
    ratio = abs(V.determinant()) / prod_norm if prod_norm != 0 else 0
    return (ratio)**(1/n).n() 

print(hadamard_ratio(V)) 
```

<div class="terminal">
  <div class="terminal-header">
    <div class="terminal-button red"></div>
    <div class="terminal-button yellow"></div>
    <div class="terminal-button green"></div>
  </div>
  <div class="terminal-content">
    <pre><code>0.933032991536807</code></pre>
  </div>
</div>

- 可以看到，Hadamard比率接近1，说明这个格是一个优质基。
- 这里定义一个目标向量w和噪声e。

```python
# type: ignore
w = Matrix([1000,1000,1000,1000,1000])
e = Matrix([-1,-1,1,-1,2])
c = w+e # 给w加密，既添加噪声
print(c)
```

<div class="terminal">
  <div class="terminal-header">
    <div class="terminal-button red"></div>
    <div class="terminal-button yellow"></div>
    <div class="terminal-button green"></div>
  </div>
  <div class="terminal-content">
    <pre><code>[ 999  999 1001  999 1002]</code></pre>
  </div>
</div>

```python
V_1 = V.inverse() # 求优质基的逆
T = c*V_1
A = T.n().apply_map(lambda x: round(x)) # 取整
print(A)
```

<div class="terminal">
  <div class="terminal-header">
    <div class="terminal-button red"></div>
    <div class="terminal-button yellow"></div>
    <div class="terminal-button green"></div>
  </div>
  <div class="terminal-content">
    <pre><code>[ 500  500   -1  500 1002]</code></pre>
  </div>
</div>

```python
dec_c = A*V # 解密
print(dec_c) 
```

<div class="terminal">
  <div class="terminal-header">
    <div class="terminal-button red"></div>
    <div class="terminal-button yellow"></div>
    <div class="terminal-button green"></div>
  </div>
  <div class="terminal-content">
    <pre><code>[1000 1000 1000 1000 1002]</code></pre>
  </div>
</div>

- 可以看到，解密后的结果和原始的w相差不大，这里没有完全还原的原因是生成的优质基并非那么的"优质"，这也体现了格密码在工程实现中的一些问题。
- 现在看看如果是劣质基会发生什么情况

```python
#type: ignore
VV = sage.crypto.gen_lattice(m=5, q=100, seed=None)
print(hadamard_ratio(VV))
VV_1 = VV.inverse()
A = (c*VV_1).n().apply_map(lambda x: round(x))
dec_c = A*VV
print(dec_c) 
```
<div class="terminal">
  <div class="terminal-header">
    <div class="terminal-button red"></div>
    <div class="terminal-button yellow"></div>
    <div class="terminal-button green"></div>
  </div>
  <div class="terminal-content">
    <pre><code>0.429092208133945
[ 996 1010 1000  972 1002]</code></pre>
  </div>
</div>

- 可以看到，劣质基的Hadamard比率远小于1，解密后的结果和原始的w相差很大。

- **因此，Babai算法输入优质基，去噪声，误差小，能找到最近向量，解决CVP困难问题。**
- **反之，Babai算法输入劣质基，去噪声，误差大，不能找到最近向量，不能解决CVP问题。**
