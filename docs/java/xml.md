## XML

### 概念：Extensible Markup Language 可扩展标记语言

	* 可扩展：标签都是自定义的。<user> <student>
 * 功能
    * 存储数据
      	* 配置文件
      	* 在网络中传输
 * 与html的区别
   	* w3c：万维网联盟
      	* 自定义标签   预定义标签
      	* 语法严格  语法松散
         	* 存储数据  展示数据

### 语法：

 * 基本语法：
   1. xml文档的后缀名：.xml
   2. 第一行必须定义为文档声明
   3. 有且仅有一个根标签
   4. 属性值必须使用引号（单双皆可）
   5. 标签必须正确关闭
   6. 标签名称区分大小写

	* 快速入门：
	
 * 组成部分：
   1. 文档声明
      1. 格式：`<?xml 属性列表 ?>`
      2. 属性列表：
         1. *verison：版本号
         2. encoding：编码方式
         3. standalone：是否独立
   2. 指令
   3. 标签
   4. 属性
   5. 文本
      1. CDATA区，内容原样展示   `<![CDATA[data]]>`
   
* 约束：规定xml文档的书写规则

  * 作为框架的使用者（程序员）：
    1. 能够在xml中引入约束文档
    2. 能够简单地读懂约束文档
  * 分类：
    1. DTD：一种简单的约束技术
    2. Schema：一种复杂的约束技术
  * DTD：
    * 引入到xml文档中
      * 内部dtd：将约束规则定义在xml文档中
      * 外部dtd：将约束规则定义在外部dtd中
        * 本地：<!DOCTYPE 根标签名 SYSTEM "dtd文件的位置">
        * 网络：<!DOCTYPE 根标签名 PUBLIC "dtd文件名字" "dtd文件位置URL">

### 解析:操作xml文档，将文档中的数据读取到内存中

 * 操作xml文档：
   1. 解析（读取）：将文档中的数据读取到内存中
   2. 写入：将内存中的数据保存到xml文档中。持久化的存储
* 解析方式：
  1. DOM：将标记语言文档一次性加载进内存，在内存中形成一颗DOM树
     * 优点：操作方便，可以对文档进行CRUD的所有操作
     * 缺点：占用内存较高
  2. SAX：逐行读取，基于事件驱动（读一行释放一行）
     * 优点：基本不占内存
     * 缺点：只能读取，不能增删改
* xml常见的解析器：
  1. JAXP：sun公司提供的解析器，支持dom和sax
  2. DOM4J：dom
  3. Jsoup：
  4. PULL：Android内置的解析器，sax方式
* Jsoup:
   * 快速入门
      * 步骤：
        1. 导入jar包
        2. 获取一个document对象
        3. 获取对应的标签Element对象
        4. 获取数据
* 对象的使用：

  * Jsoup：工具类，可以解析html或xml文档，返回Document
    * parse：解析html或xml文档，返回document
      * parse(File in, String charsetName)：解析xml或html文件的
      * parse(String html):解析xml或html字符串
      * parse(URL url, int timeoutMillis)：通过网络路径获取指定的html或xml的文档对象
  * Document：文档对象，代表内存中的dom树
    * 获取Element对象
      * getElementById(String id):根据id属性值获取唯一的element对象
      * getElementsByTag(String tagName)：根据标签名称获取元素对象集合
      * getElementsByAttribute(String key):根据属性名称获取元素对象
      * getElementsByAttributeValue(String key, String value)：根据对应的属性名和属性值来获取元素集合
  * Elements：元素Element对象的集合，可以当作ArrayList`<Element>`
  * Element：元素对象
    * 获取子元素对象
      * getElementById(String id):根据id属性值获取唯一的element对象
      * getElementsByTag(String tagName)：根据标签名称获取元素对象集合
      * getElementsByAttribute(String key):根据属性名称获取元素对象
      * getElementsByAttributeValue(String key, String value)：根据对应的属性名和属性值来获取元素集合
    * 获取属性值
      * String attr(String key)：根据属性名称获取属性值
    * 获取文本内容
      * String text():获取文本内容
      * String html():获取标签体的所有内容（包括子标签的字符串内容）
* Node：节点对象
* 快捷查询方式：
   1. selector:选择器
      * 使用的方法：Elements select(String cssQuery)
        * 语法：参考Selector类中定义的语法
   2. XPath：即为XML路径语言，是一种用来确定XML文档中某部分位置的语言
      1. 使用Jsoup的XPath需要额外的jar包
      2. 查询w3cschool参考手册，使用xpath的语法完成查询