# JavaSE (Java核心技术卷一)

## 第1章 Java程序设计概述

## 第2章 Java程序设计环境

## 第3章 Java的基本程序设计结构

### 3.1 一个简单的Java应用程序

### 3.2 注释

### 3.3 数据类型

#### 3.3.1 整型

#### 3.3.2 浮点类型

#### 3.3.3 char类型

#### 3.3.4 Unicode和char类型

#### 3.3.5 boolean类型

### 3.4 变量

#### 3.4.1 变量初始化

#### 3.4.2 常量

利用关键字**final**指示常量

被**final**指示的变量只能被赋值一次，一旦被赋值就不能再更改。习惯上常量名使用全大写。

如果希望在某一个类中的常量可以在类中多个方法中使用，通常称这些常量为**类常量**，使用关键字**static final**设置。

```Java
public class Constants2{
    public static final double CM_PER_INCH = 2.54;
    public static void main(Stringn args){
        double paperWidth = 8.5;
        double paperHeight = 11;
         System.out.println("Paper size in centimeters: "
              + paperWidth * CMJERJNCH +
              " by " + paperHeight * CM_PER_INCH) ;
    }
}
```

### 3.5 运算符

Java中使用算术运算符+、—、*、/。

参与/运算的两个数都是整数除法，否则，表示浮点除法。

#### 3.5.1 数学函数与常量

计算一个数的平方根：

```Java
Math.sqrt(16);
```

幂运算：

```Java
Math.pow(x,y);
```

相当于x^y^

`floorMod`方法

floorMod 方法的目的是解决一个长期存在的有关整数余数的问题。 考虑表达式 n % 2。所有人都知道， 如果 n 是偶数， 这个表达式为 0 ; 如果 n 是奇数， 表达式则为 1。 当然， 除非 n 是负数。

如果 n 为负，这个表达式则为-1。为什么呢？ 设计最早的计算机时，必须有人制定规则， 明确整数除法和求余对负数操作数该如何处理。数学家们几百年来都知道这样一个最优（或“ 欧几里德”）规则：余数总是要>=0。不过， 最早制定规则的人并没有翻开数学书好好研究，而是提出了一些看似合理但实际上很不方便的规则。

下面考虑这样一个问题： 计算一个时钟时针的位置。这里要做一个时间调整， 而且要归一化为一个 0 ~ 11 之间的数。 这很简单：（position + adjustment) % 12。不过， 如果这个调整为负会怎么样呢？ 你可能会得到一个负数。所以要引入一个分支， 或者使用（(position +adjustment) % 12 + 12) % 12。不管怎样， 总之都很麻烦。

floorMod 方法就让这个问题变得容易了： floorMod(position + adjustment, 12) 总会得到一个 0 ~ 11 之间的数。（遗憾的是，对于负除数，floorMod 会得到负数结果， 不过这种情况在实际中很少出现。）

> 不必一直添加Math前缀，只需要在java文件的开头静态导入`import static java.lang.Math.*`

#### 3.5.2 数值类型之间的转换

![](https://secure-static.wolai.com/static/kCgPcuiHWoJ9J9Fz8mJnaH/image.png)

实心箭头表示无信息丢失的转换，虚线箭头表示有信息丢失的转换。

123456789是一个大整数，它所包含的位数比float类型所能表达的位数多。当将这个整型数值转换为float时，将会得到同样大小的结果，但却失去了一定的精度。

```Java
int n = 123456789;
float a = n;// f == 1.234567892E8 
```

当使用上面两个不同类型的数值进行计算时，需要将他们转换为同一种类型，再进行计算。

```Java
if 两个操作数中有一个是double类型，另一个操作数就转换为double类型
else 其中有一个是float类型，另一个转换为float类型
else 其中有一个是long类型，另一个就转换为long类型
else 两个都转换为int类型 
```

#### 3.5.3 强制类型转换

```Java
double x = 9.997;
int nx = (int)x;
// nx = 9

```

浮点数转换为整型时会截断小数部分

如果想要得到舍入的最接近整数，就使用Math.round方法：

```Java
double x = 9.997;
int nx = (int)Math.round(x);// nx = 10 
```

为什么仍然需要进行强制类型转换？

round方法返回的结果为long类型

#### 3.5.4 结合赋值和运算符

`x += 4`

如果运算符得到了一个值，其类型与左侧的变量类型不同，那么就会默认进行强制类型转换。例如：x是一个int类型，x += 3.5 是合法的，相当于(int)(x+3.5)

#### 3.5.5 自增和自减运算符

i++     ++i

作为单独的语句使用时两者没有区别。作为表达式运算时，前缀：先自增再使用变量；后缀：先使用变量再自增

#### 3.5.6 关系和boolean运算符

如果第一个操作数已经能确定表达式的值，那么后面的计算就不需要再进行。

expression~1~ && expression~2~
而且已经计算得到第一个表达式的真值为 false, 那么结果就不可能为 true。

进行应用：`x!=0 && 1/x>2`如果x==0，那么就可以避免进行后面的错误运算