# Redis

## 6 Redis6 新数据类型

### 6.1 BitMaps

主要用来进行位操作

可以把 Bitmaps 想象成为一个以位为单位的数组，数组的每个单元只能存储 0 或 1，数组的下标称为偏移量，偏移量上的值默认为 0

#### 命令

##### 在某个偏移量上设置值

**`setbit key offset value`** `setbit users:20200101 1 1`

##### 获取某个偏移量的值

**`getbit key offset`** `getbit users:20200101 1`

##### bitcount

用来计数在一个 key 中，特定范围内值为 1 的位的数量。
特定范围：start end 这两个参数的设置都可以使用负数，例如-1 表示最后一位，-2 表示倒数第二位

:::: warning 注意
这里的 start 和 end 所代表的是 byte 位置，即 0 1 所代表的是从下标 0 到下标 1 字节中 bit 位为 1 的个数

例子：
[00001000 10000000] 这个 bitmap 中，使用`bitcount key 0 1`后得到的结果为 2
::::

##### bitop

**`bitop operation destkey key [key ...]`**

用于将两个 bitmaps 的值进行 and（交集）、or（并集）、not（非）、xor（亦或）的操作，并将结果存储在 destkey 中

**例子：**
```redis
2020-11-04 访问过网站的用户 id=1，2，5，9

setbit unique:users:20201104 1 1

setbit unique:users:20201104 2 1

setbit unique:users:20201104 5 1

setbit unique:users:20201104 9 1

2020-11-03 访问过网站的用户 id=0,1,4,9

setbit unique:users:20201103 0 1

setbit unique:users:20201103 1 1

setbit unique:users:20201103 4 1

setbit unique:users:20201103 9 1

计算出两天都访问过网站的用户数量

bitop and unique:users:20201103_04 unique:users:20201103 unique:users:20201104

result:2
```

#### BitMaps 与 set 对比

<table>
<th colspan="4">set和Bitmaps存储一天活跃用户数对比</th>
<tr>
<td>数据类型</td>
<td>每个用户id所占空间</td>
<td>需要存储的用户数量</td>
<td>总所占空间</td>
</tr>
<tr>
<td>set</td>
<td>64bit</td>
<td>50000000</td>
<td>64bit*50000000=400MB</td>
</tr>
<tr>
<td>BitMaps</td>
<td>1bit</td>
<td>100000000</td>
<td>1bit*100000000=12.5MB</td>
</tr>
</table>

明显的，随着使用时间的增加，BitMaps的优势会体现得越来越明显

<table>
<th colspan="4">存储空间随时间变化对比</th>
<tr>
<td>存储时间</td>
<td>一天</td>
<td>一个月</td>
<td>一年</td>
</tr>
<tr>
<td>set</td>
<td>400MB</td>
<td>12GB</td>
<td>144GB</td>
</tr>
<tr>
<td>BitMaps</td>
<td>12.5MB</td>
<td>375MB</td>
<td>4.5GB</td>
</tr>
</table>

但是，当用户量较少的时候，使用BitMaps就不太合适了

### 6.2 HyperLogLog

#### 基数问题

统计PV（PageView 页面访问量）时，只要使用简单的incr、incrby即可，而统计UV（UniqueVisitor 独立访客）时，他的独立访问数等数据如何计算？这种求集合中不重复元素个数的问题称为**基数问题**。

解决基数问题有很多方法：1. mysql中使用distinct计算不重复个数 2. redis中使用hash、set、bitmaps来处理。这些方法结果很精确，但是一旦数据量上升，所需要的存储空间也会大大增加。

所以Redis推出了一种降低精度，但是大大减少存储空间占用的算法：**HyperLogLog**

**HyperLogLog**是用来做基数统计的算法，它的优点是，当输入的数据量很大时，依然保持很小的固定的存储空间。在Redis中，每个HyperLogLog键消耗12KB内存，但却可以计算2^64个不同元素的基数。但是，HyperLogLog只会根据输入的数据计算基数，而不会存储输入的数据，所以它只输出计算的结果而不输出其它数据。

:::: tip 什么是基数
根据对等这种关系对集合进行分类，凡是互相对等的集合就划入同一类。这样，每一个集合都被划入了某一类。任意一个集合A所属的类就称为集合A的基数，记作|A|（或cardA)。这样，当A 与B同属一个类时，A与B 就有相同的基数，即|A|=|B|。而当 A与B不同属一个类时，它们的基数也不同。

如果把单元素集的基数记作1，两个元素的集合的基数记作2，等等，则任一个有限集的基数就与通常意义下的自然数一致 。空集的基数也记作0。于是有限集的基数也就是传统概念下的“个数”。但是，对于无穷集，传统概念没有个数，而按基数概念，无穷集也有基数，例如，任一可数集（也称可列集）与自然数集N有相同的基数，即所有可数集是等基数集。不但如此，还可以证明实数集R与可数集的基数不同。所以集合的基数是个数概念的推广。

[1,3,4,5,6,4,5] 去除重复元素后 [1,3,4,5,6] 这个数据集的基数为5，即其中元素的个数
::::

#### 命令

##### pfadd

`pfadd key element [element ...]`

```cmd
pfadd key1 "java"
1

pfadd key2 ".net"
1

pfadd key3 "c++"
1

pfadd key1 "java"
0
```

:::: warning
如果添加元素后key的近似基数发生变化，返回1；如果近似基数没有变化，返回0
::::

##### pfcount


