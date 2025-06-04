---
outline: deep
head:
  - - link
    - rel: stylesheet
      href: /katex.min.css
lastUpdated: false

prev: 
    text: 课程项目二：复数运算
    link: /cpp_2

next: false
---

# 课程项目三：文本查询程序

## 项目需求
[文本查询程序](http://8.138.169.33:5212/s/A4S0)     
[源文件](https://github.com/klizz111/CPP_Lecture_Project/tree/main/Project3)

## 程序简介

### 程序编译及运行环境
编译命令
> 	cwd:${fileDir}  
> g++ ./*.cpp -fdiagnostics-color=always --std=c++17 -g -O3 -o search

系统环境
> Ubuntu 24.04 LTS  
> g++ (GCC) 10.2.1 20200825

### 程序特点
 支持读取多个文件，支持多文件的查询;支持重定向符将输出重定向到其他文件;支持复杂查询。

### 程序功能展示

- 主界面![image1](/img/cpp3/image001.png)
- 文本格式化![image2](/img/cpp3/image002.png)
- - 原始文本![image3](/img/cpp3/image003.png)
- - 格式化后文本![image4](/img/cpp3/image004.png)
- 文本查询
- - 基础查询![image5](/img/cpp3/image005.png)
- - 复杂查询
- - 变量赋值![image6](/img/cpp3/image006.png)
- - 逻辑非查询![image7](/img/cpp3/image007.png)
- - 逻辑或查询![image8](/img/cpp3/image008.png)
- - 逻辑与查询![image9](/img/cpp3/image009.png)
- - 带括号的复杂表达式查询![image10](/img/cpp3/image010.png)
- - 输出重定向到文件![image11](/img/cpp3/image011.png)![image12](/img/cpp3/image012.png)    
- 错误处理![image13](/img/cpp3/image013.png)![image14](/img/cpp3/image014.png)![image15](/img/cpp3/image015.png)![image16](/img/cpp3/image016.png)

## 程序实现与设计思路

### 数据存储

由于数据格式化与文本查询的输出类似，故定义一个Result对象管理文本的输入和输出，部分声明：

```cpp
class Result {
protected:
    set<LINENO> nos; // 出现的行号,使用set去重
    static vector<string> input; // 输入的内容,使用stattic避免重复拷贝
    int times = 0; // 出现次数  
public:
    Result() = default;
    friend ostream& operator<<(ostream &os, const Result &qr); // 输出结果到屏幕
    friend ofstream& operator<<(ofstream &os, const Result &qr); // 输出结果到文件
    friend Formatter;
static void clear() {input.clear();} // 清空结果 
    static void setInput(vector<string> &input) { // 设置输入
        Result::input = input;
    }
};
```

为了便于后面文本查询，这里的思路是对同一个文件，使用一个共享变量input存储这个文件的全部内容，并且使用static避免内存的重复拷贝。考虑到要对多文件进行处理，故还设置clear
与setInput两个静态方法用于更改input变量。并且重载了<<运算符用于输出。

### 文本格式化

定义一个Formmatter对象用于格式化文件并存储到Result对象中，部分声明：

```cpp
// 格式化文件
class Formatter {
private:
    int lineMax; // 每行最大字符数
    fstream *files; // 文件, 使用指针, 避免发生拷贝
public:
    Formatter() = default;
    Formatter(int lineMax = 0, fstream *files = nullptr) : lineMax(lineMax), files(files) {
        if (lineMax < 0) {
            throw std::runtime_error("最大行数不能小于0");
        }
    }
    // 格式化文件
    Result format();
};
```

当linemax为0时，使用getline逐行读取并存储到Result中;当linemax不为0时，利用标点符号和空格控制字符串的截断。

### 文本查询

参考C++ Primer的内容，具体架构如下:
![image17](/img/cpp3/image017.jpg)

Query对象声明：

```cpp
class Query {
private:
    Query(std::shared_ptr<Query_base> query) : q(query) {}
    std::shared_ptr<Query_base> q;
public:
    Query(const std::string& s) : q(new WordQuery(s)) {}
    QueryResult eval(const TextQuery& t) const { 
        return q->eval(t); 
    }

    friend Query operator~(const Query&);
    friend Query operator|(const Query&, const Query&);
    friend Query operator&(const Query&, const Query&);
};
```

对是查找，使用正则逐行查找；
对非查找，先使用一次是查后再逐行排除；

```cpp
    for (LINENO n = 1; n <= full_size; ++n) { // 遍历所有行
        if (result.hasLintNo(n) == false) { // 如果不存在
            ret_lines.insert(n); // 插入
        }
    }
```

对与查找，对set使用stl库中的set_intersection求一次交集

```cpp
// 与查询
QueryResult AndQuery::eval(const TextQuery &text) const {
    QueryResult left = lhs.eval(text), right = rhs.eval(text);
    set<LINENO> ret_lines;
    // 使用set_intersection求交集
    set_intersection(left.begin(), left.end(), 
                    right.begin(), right.end(), 
                    inserter(ret_lines, ret_lines.begin())); 
    return QueryResult(std::move(ret_lines));
}
```

对与查找，对set使用stl库中的set_intersection求一次交集

```cpp
// 与查询
QueryResult AndQuery::eval(const TextQuery &text) const {
    QueryResult left = lhs.eval(text), right = rhs.eval(text);
    set<LINENO> ret_lines;
    // 使用set_intersection求交集
    set_intersection(left.begin(), left.end(), 
                    right.begin(), right.end(), 
                    inserter(ret_lines, ret_lines.begin())); 
    return QueryResult(std::move(ret_lines));
}
```

对或查找，使用set_union求并集；

```cpp
// 或查询
QueryResult OrQuery::eval(const TextQuery &text) const
{
    QueryResult right = rhs.eval(text), left= lhs.eval(text);
    set<LINENO> ret_lines;
    // 使用set_union求并集
    set_union(left.begin(), left.end(), 
                right.begin(), right.end(), 
                inserter(ret_lines, ret_lines.begin()));

    return QueryResult(std::move(ret_lines));
}
```

由于重载了运算符，使得单词查询可以使用C++运算符的优先级，既实现了带括号的复杂查询。
![image18](/img/cpp3/image018.png)

最后对于复杂查询的表达式，形成一个类似于函数递归的结构，通过递归保存将所有的查询绑定到一个Query对象q上,对q使用eval()方法会递归调用每一个派生类的eval()方法实现查询。

### REPL环境
为了实现REPL环境，在repl.h中编写了一个REPL类用于管理REPL。  
为了实现对变量的存储与赋值，和项目二一样，使用unodered_map建立哈希表存储。  
REPL对象部分声明:  

```cpp
class Repl {
private:
    Lexer lexer;
    string input;
    unordered_map<string , string> variables;// 存储变量
    vector<fstream> files; // 文件
    vector<string> file_names_list; // 文件名列表
    bool redirect = false; // 是否重定向
    vector<string> outPutFileList; // 输出文件列表
public:
    Repl() = default;
    void mainloop(); // 主循环
    void interpret(); // 解释器
    string showrep(); // 显示查询语句
    vector<Token> inversedPolish(); // 中缀表达式转逆波兰表达式
    Query buildQueryFromRPN(const vector<Token> &rpnTokens); // 根据逆波兰表达式构造查询
    void checkifredirect();
```

对于用户输出，也是和项目二一样，通过正则匹配编写了一个Lexer对象用于解析用户输入![image19](/img/cpp3/image019.png)

再通过inversedPolish()方法，使用Shunting-Yard算法  
将表达式转换为逆波兰表达式，最后通过buildQueryFromRP()方法构建Query表达式求解。  

```cpp
inline Query Repl::buildQueryFromRPN(const vector<Token> &rpnTokens) {
    std::stack<Query> st;
    for (auto &tk : rpnTokens) {
        // 忽略末尾无用的"="
        if (tk.type == "operator" && tk.value == "=") {
            continue;
        }
        if (tk.type == "word") {
            st.push(Query(tk.value));
        } else if (tk.type == "operator") {
            if (tk.value == "~") {
                Query topQ = st.top(); 
                st.pop();
                st.push(~topQ);
            } else if (tk.value == "&") {
                Query rhs = st.top(); 
                st.pop();
                Query lhs = st.top(); 
                st.pop();
                st.push(lhs & rhs);
            } else if (tk.value == "|") {
                Query rhs = st.top(); 
                st.pop();
                Query lhs = st.top(); 
                st.pop();
                st.push(lhs | rhs);
            }
        }
    }
    // 最终只应有一个查询对象
    if (st.size() != 1) {
        throw std::runtime_error("RPN parse error");
    }
    return st.top();
}
```

### 程序优化

主要在Result对象上，使用静态变量与移动构造、赋值来避免多次拷贝带来的内存及性能浪费。  

### 遇到的困难

主要在对Query查询的编写上，由于其结构较为复杂与抽象，需要花一定时间去理解与编写代码。  

## 项目总结

程序目前仍存在部分不足，如不完整的错误处理机制，不支持将结果输出到多个文件中等。    
通过这个项目对OOP的思想有了进一步的理解与认识，之前的编写的项目充其量只能算套了个对象的壳的面向过程。但是在这个项目中很明显感觉到了OOP的精髓，既封装、继承多态与抽象。在项目开始初期构建抽象对象的过程可能较为困难与复杂，但是在后续开发中可以大大简化工作与减少开发难度。给自己的启示就是在以后的项目中一定要花时间析需求，构建合理的实现路径。再者就是在完成项目二时没了解逆波兰表达式导致项目过于臃肿，这次使用了逆波兰表达式使得程序精简不少。
