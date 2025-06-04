---
outline: deep

head:
    - - link
      - rel: stylesheet
        href: /katex.min.css
--- 

## RLWE转化为CVP
1. RLWE问题中的方案:

$$
t(X) \equiv a(X) \cdot s(X)+e(X) \; (mod \; p)
$$

2. 相应的矩阵形式为:

$$
t^* \equiv M(a)s^* + e^* \; (mod \; p)
$$

3. 存在整向量$\; s^{ex} = (\begin{matrix}s^* \\r\end{matrix}) \; \in \; \mathbb{Z}^{2n}$，$\Lambda$中格点$M(a)^{ex} \cdot s^{ex}$与目标向量$t^{ex} \;$的差向量为：

$$
t^{ex} - M(a)^{ex} \cdot s^{ex} = \begin{pmatrix}e^* \\ s^* \end{pmatrix}
$$

4. 如果条件RLWE问题中的$\;s(x)\;$要求是短多项式，则可以构造2n阶整方阵:

$$
M(a)^{ex} \; = \; \begin{pmatrix} 
                    M(a) & qI_n \\ 
                    -I_n & 0 \end{pmatrix}
\; \in \; \mathbb{Z}^{2n \times 2n}
$$

- 其中$\; l_n \;$是$\;n\;$阶单位矩阵,$\; ql_n \;$是$\; l_n \;$的$\; q \;$倍<br></br>

5. 设$\; \Lambda \;$是$\; M(a)^{ex}  \;$列张成的格，定义目标（列）向量：

$$
t^{ex} = \begin{pmatrix} t^* \\ 0 \end{pmatrix}
$$

6. 存在整向量$\; s^{ex} = \begin{pmatrix} s^* \\ r \end{pmatrix} \in \mathbb{Z}^{2n} \;$, $\; \Lambda \;$中格点$\; M(a)^{ex}s^{ex} \;$与目标向量$\; t^{ex} \;$的差向量为

$$
t^{ex} - M(a)^{ex}s^{ex} = \begin{pmatrix}e^* \\ s^* \end{pmatrix} \in \mathbb{Z}^{2n}
$$
  
7. 由于$\;e\;$和$\;s\;$都是选取比较短的多项式，$\;\begin{pmatrix}e^* \\ s^* \end{pmatrix}\;$是较短的整向量

8. 故**RLWE**问题就转化为格$\;\Lambda\;$中的**CVP**求解

