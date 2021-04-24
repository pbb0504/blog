# Java 核心技术卷一

## 第 1 章 Java 程序设计概述

## 第 2 章 Java 程序设计环境

## 第 3 章 Java 的基本程序设计结构

### 3.1 一个简单的 Java 应用程序

### 3.2 注释

### 3.3 数据类型

#### 3.3.1 整型

#### 3.3.2 浮点类型

#### 3.3.3 char 类型

#### 3.3.4 Unicode 和 char 类型

#### 3.3.5 boolean 类型

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

Java 中使用算术运算符+、—、\*、/。

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

相当于 x^y^

`floorMod`方法

floorMod 方法的目的是解决一个长期存在的有关整数余数的问题。 考虑表达式 n % 2。所有人都知道， 如果 n 是偶数， 这个表达式为 0 ; 如果 n 是奇数， 表达式则为 1。 当然， 除非 n 是负数。

如果 n 为负，这个表达式则为-1。为什么呢？ 设计最早的计算机时，必须有人制定规则， 明确整数除法和求余对负数操作数该如何处理。数学家们几百年来都知道这样一个最优（或“ 欧几里德”）规则：余数总是要>=0。不过， 最早制定规则的人并没有翻开数学书好好研究，而是提出了一些看似合理但实际上很不方便的规则。

下面考虑这样一个问题： 计算一个时钟时针的位置。这里要做一个时间调整， 而且要归一化为一个 0 ~ 11 之间的数。 这很简单：（position + adjustment) % 12。不过， 如果这个调整为负会怎么样呢？ 你可能会得到一个负数。所以要引入一个分支， 或者使用（(position +adjustment) % 12 + 12) % 12。不管怎样， 总之都很麻烦。

floorMod 方法就让这个问题变得容易了： floorMod(position + adjustment, 12) 总会得到一个 0 ~ 11 之间的数。（遗憾的是，对于负除数，floorMod 会得到负数结果， 不过这种情况在实际中很少出现。）

> 不必一直添加 Math 前缀，只需要在 java 文件的开头静态导入`import static java.lang.Math.*`

#### 3.5.2 数值类型之间的转换

![](https://secure-static.wolai.com/static/kCgPcuiHWoJ9J9Fz8mJnaH/image.png)

实心箭头表示无信息丢失的转换，虚线箭头表示有信息丢失的转换。

123456789 是一个大整数，它所包含的位数比 float 类型所能表达的位数多。当将这个整型数值转换为 float 时，将会得到同样大小的结果，但却失去了一定的精度。

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

如果想要得到舍入的最接近整数，就使用 Math.round 方法：

```Java
double x = 9.997;
int nx = (int)Math.round(x);// nx = 10
```

为什么仍然需要进行强制类型转换？

round 方法返回的结果为 long 类型

#### 3.5.4 结合赋值和运算符

`x += 4`

如果运算符得到了一个值，其类型与左侧的变量类型不同，那么就会默认进行强制类型转换。例如：x 是一个 int 类型，x += 3.5 是合法的，相当于(int)(x+3.5)

#### 3.5.5 自增和自减运算符

i++ ++i

作为单独的语句使用时两者没有区别。作为表达式运算时，前缀：先自增再使用变量；后缀：先使用变量再自增

#### 3.5.6 关系和 boolean 运算符

如果第一个操作数已经能确定表达式的值，那么后面的计算就不需要再进行。

expression~1~ && expression~2~
而且已经计算得到第一个表达式的真值为 false, 那么结果就不可能为 true。

进行应用：`x!=0 && 1/x>2`如果 x==0，那么就可以避免进行后面的错误运算

#### 3.5.7 位运算符

#### 3.5.8 括号与运算符级别

#### 3.5.9 枚举类型

有时，变量的取值只限于几个值之间。例如：s,m,l,xl... 如果使用平常的方式定义值，有可能会出现限定值之外的情况。那么，我们就需要一个枚举类型。枚举类型包括有限个命名的值。

```java
enum SIZE { SMALL, MEDIUM, LARGE }
System.out.println(SIZE.SMALL);
// output: SMALL

SIZE s = SIZE.LARGE;
System.out.println(s);
// output: LARGE
```

SIZE 类型的变量只能赋值为有限的值（即类型声明中的值）或 null

### 3.6 字符串

待写

### 3.7 输入输出

待写

### 3.8 控制流程

待写

### 3.9 大数值

待写

### 3.10 数组

待写

## 第 4 章 对象与类

### 4.6 对象构造

#### 4.6.1 重载

有些类有多个构造器。例如，StringBuilder 有多个构造方法

```java
StringBuilder sb = new StringBuilder();
// or
StringBuilder sb2 = new StringBuilder("hello");
```

这种特征叫做重载（overloading）。如果多个方法有相同的名字，不同的参数，便会产生重载。编译器会对相匹配的方法进行**挑选**。
::: details 挑选
挑选：
现在我们已经知道（如上 StringBuilder 的例子），两个相同名字的构造方法，它们有不同的参数。当我们在使用方法时，无论使用了无参方法还是有参方法，编译器会对相对应的方法进行匹配，即当我们使用无参构造方法，编译器自动寻找相应的无参构造方法。
:::
如果编译器挑选不出，就会产生编译时错误。
这个过程称为重载解析（overloading resolution）。

**关于重载还有其它的知识点，后期再说**

#### 4.6.2 默认域初始化

如果创造变量的时候没有给变量赋值，那么 java 会默认给变量赋予一个值。
| 类型 | 值 |
| :-: | :-: |
| int | 0 |
| long | 0 |
| boolean | false |
| float | 0.0 |
| double | 0.0 |
| char | /u0000(NULL) |
| string | NULL |
| Object | NULL |
| [] | NULL |
| [int,float...] | [0,0.0,...] |

#### 4.6.3 无参数的构造器

很多类会包含一个无参数的构造函数，对象由无参构造函数创建时，里面的成员变量会被设置为一个默认值（如果没有被特殊赋值的话）。

```java
class Other {
    private int a;

    public int getA(){
        return a;
    }
}

Other other = new Other();
System.out.println(other.getA());
output: 0
```

:::: tip
如果在编写类时没有提供无参的构造器，那么系统会默认提供一个无参数构造器。构造器会将所有的成员变量设置为相应的默认值。数值型设置为 0，布尔型设置为 false，其它类型设置为 null。
::::

:::: warning
如果在编写类时已经提供有参构造器，此时再使用无参构造器创建实例，会产生错误。
::::

#### 4.6.4 显示域初始化

使用有参构造函数，或者在声明成员变量时初始化变量。

#### 4.6.5 参数名

请采用易懂的参数名，不要嫌长

#### 4.6.6 调用另一个构造器

如果构造器中使用`this(args[])`这样的形式，即可引用类中其它的构造函数

:::: tip
这样的引用必须是方法中的第一条语句
否则会有错误：Call to 'this()' must be first statement in constructor body
::::

#### 4.6.7 初始化块

前面有两种初始化数据域的方法

- 在构造器中设置值
- 在声明中赋值
  现在来介绍第三种机制，称为**初始化块**(initialization block)。在类的声明中，可以包含多个代码块，只要类的对象被构造，这些块就会执行。

```java
class Employee {
    private static int nextId;

    private int id;
    private String name;
    private double salary;

    // initialization block
    {
        id = nextId;
        nextId++;
    }

    public Employee(String n, double s){
        this.name = n;
        this.salary = s;
    }

    public Employee(){
        this.name = "";
        this.salary = 0;
    }
}
```

:::: warning
一般来说，初始化块放在需要初始化的变量之后。但是即使是在块后面定义的变量，也可以在块中初始化，但是**不建议这样做**，有可能会产生循环定义的问题。
::::

**调用构造器的具体处理步骤**

1. 所有数据域被初始化为默认值（即使在后面的构造器中没有提及此变量）
2. 按照在类声明中出现的次序，依次执行所有域初始化语句和初始化块
3. 如果构造器调用了第二个构造器，则先执行第二个构造器
4. 继续执行构造器

:::: details 实例代码

```java
class Other {
    private int a;
    private String s;
    public Other(){
        this("");
    }
    public Other(String s){
        this.s = "1";
    }
    public int getA(){
        return a;
    }
}
```

**这段代码的执行过程为**

1. 初始化 a=0，s=null
2. 执行`Other()`，调用`Other(String s)`给 s 赋值为"1"
3. 返回`Other()`方法，执行完毕

::::

**静态域**

可以在声明静态域时提供初始化值，或者在静态初始化块中进行初始化。
如果代码比较简单：`private static int nextId = 0`，可以直接进行初始化
如果初始化的代码比较复杂，建议放在静态初始化块中

```java
static {
    Random generator = new Random();
    nextId = generator.nextInt(10000);
}
```

在类第一次加载的时候，将会进行静态域的初始化。与实例域一样，除非显式地设置值，否则采用默认值。所有的静态初始化语句和静态初始化块都按照类定义的顺序执行。

:::: tip

在 JDK6 之前，即使没有 main 方法也能编写 java 程序

```java
class Main {
    static {
        System.out.println("Hello World!");
    }
}
```

当使用`java Main`调用此类时，会先执行静态代码块，打印语句，然后显示消息，指出 main 方法未定义。在 java7 之后，java 程序会优先判断是否有 main 方法

::::

#### 4.6.8 对象析构与 finalize 方法

有些语言，如 c++，会有显式的析构器，其中会有当对象不再使用时进行清理的代码。在析构器中，最常见的操作是回收分配给对象的存储空间。Java 有自动的垃圾回收器，所以没有析构器。
可以为任何一个类添加 finalize 方法。此方法在垃圾回收器清除对象之前调用，在实际应用中，不要依赖于此方法，因为不知道方法什么时候调用。
资源使用完毕后，可以手动关闭，即 close 方法。

:::: tip
有个名为 System.mnFinalizersOnExit(true) 的方法能够确保 finalizer 方法在 Java 关闭前被调用。 不过， 这个方法并不安全，也不鼓励大家使用。有一种代替的方法是使用方法 Runtime.addShutdownHook 添加“关闭钩” （shutdown hook), 详细内容请参看 API 文档。
::::

### 4.7 包

