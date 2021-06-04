# Redis

## 6. Redis6 新数据类型

### BitMaps

主要用来进行位操作

可以把 Bitmaps 想象成为一个以位为单位的数组，数组的每个单元只能存储 0 或 1，数组的下标称为偏移量，偏移量上的值默认为0

#### 命令

**在某个偏移量上设置值**

**`setbit key offset value`** `setbit users:20200101 1 1`

**获取某个偏移量的值**

**`getbit key offset`** `getbit users:20200101 1`

**bitcount**

:::: info 说明
用来计数在一个key中，特定范围内值为1的位的数量。
特定范围：start end 这两个参数的设置都可以使用负数，例如-1表示最后一位，-2表示倒数第二位
::::
