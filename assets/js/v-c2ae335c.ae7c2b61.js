"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[589],{5514:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-c2ae335c",path:"/java/Redis.html",title:"Redis",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"6 Redis6 新数据类型",slug:"_6-redis6-新数据类型",children:[{level:3,title:"6.1 BitMaps",slug:"_6-1-bitmaps",children:[]},{level:3,title:"6.2 HyperLogLog",slug:"_6-2-hyperloglog",children:[]}]},{level:2,title:"10 事务|锁机制",slug:"_10-事务-锁机制",children:[{level:3,title:"10.1 redis的事务",slug:"_10-1-redis的事务",children:[]},{level:3,title:"10.2 锁",slug:"_10-2-锁",children:[]},{level:3,title:"10.3 watch",slug:"_10-3-watch",children:[]},{level:3,title:"10.4 redis事务三特性",slug:"_10-4-redis事务三特性",children:[]}]}],filePathRelative:"java/Redis.md",git:{updatedTime:1623663429e3,contributors:[]}}},7690:(e,n,a)=>{a.r(n),a.d(n,{default:()=>r});const s=(0,a(6252).uE)('<h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h1><h2 id="_6-redis6-新数据类型" tabindex="-1"><a class="header-anchor" href="#_6-redis6-新数据类型" aria-hidden="true">#</a> 6 Redis6 新数据类型</h2><h3 id="_6-1-bitmaps" tabindex="-1"><a class="header-anchor" href="#_6-1-bitmaps" aria-hidden="true">#</a> 6.1 BitMaps</h3><p>主要用来进行位操作</p><p>可以把 Bitmaps 想象成为一个以位为单位的数组，数组的每个单元只能存储 0 或 1，数组的下标称为偏移量，偏移量上的值默认为 0</p><h4 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h4><h5 id="在某个偏移量上设置值" tabindex="-1"><a class="header-anchor" href="#在某个偏移量上设置值" aria-hidden="true">#</a> 在某个偏移量上设置值</h5><p><strong><code>setbit key offset value</code></strong> <code>setbit users:20200101 1 1</code></p><h5 id="获取某个偏移量的值" tabindex="-1"><a class="header-anchor" href="#获取某个偏移量的值" aria-hidden="true">#</a> 获取某个偏移量的值</h5><p><strong><code>getbit key offset</code></strong> <code>getbit users:20200101 1</code></p><h5 id="bitcount" tabindex="-1"><a class="header-anchor" href="#bitcount" aria-hidden="true">#</a> bitcount</h5><p>用来计数在一个 key 中，特定范围内值为 1 的位的数量。 特定范围：start end 这两个参数的设置都可以使用负数，例如-1 表示最后一位，-2 表示倒数第二位</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>这里的 start 和 end 所代表的是 byte 位置，即 0 1 所代表的是从下标 0 到下标 1 字节中 bit 位为 1 的个数</p><p>例子： [00001000 10000000] 这个 bitmap 中，使用<code>bitcount key 0 1</code>后得到的结果为 2</p></div><h5 id="bitop" tabindex="-1"><a class="header-anchor" href="#bitop" aria-hidden="true">#</a> bitop</h5><p><strong><code>bitop operation destkey key [key ...]</code></strong></p><p>用于将两个 bitmaps 的值进行 and（交集）、or（并集）、not（非）、xor（亦或）的操作，并将结果存储在 destkey 中</p><p><strong>例子：</strong></p><div class="language-redis ext-redis line-numbers-mode"><pre class="language-redis"><code>2020-11-04 访问过网站的用户 id=1，2，5，9\n\nsetbit unique:users:20201104 1 1\n\nsetbit unique:users:20201104 2 1\n\nsetbit unique:users:20201104 5 1\n\nsetbit unique:users:20201104 9 1\n\n2020-11-03 访问过网站的用户 id=0,1,4,9\n\nsetbit unique:users:20201103 0 1\n\nsetbit unique:users:20201103 1 1\n\nsetbit unique:users:20201103 4 1\n\nsetbit unique:users:20201103 9 1\n\n计算出两天都访问过网站的用户数量\n\nbitop and unique:users:20201103_04 unique:users:20201103 unique:users:20201104\n\nresult:2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h4 id="bitmaps-与-set-对比" tabindex="-1"><a class="header-anchor" href="#bitmaps-与-set-对比" aria-hidden="true">#</a> BitMaps 与 set 对比</h4><table><th colspan="4">set和Bitmaps存储一天活跃用户数对比</th><tr><td>数据类型</td><td>每个用户id所占空间</td><td>需要存储的用户数量</td><td>总所占空间</td></tr><tr><td>set</td><td>64bit</td><td>50000000</td><td>64bit*50000000=400MB</td></tr><tr><td>BitMaps</td><td>1bit</td><td>100000000</td><td>1bit*100000000=12.5MB</td></tr></table><p>明显的，随着使用时间的增加，BitMaps的优势会体现得越来越明显</p><table><th colspan="4">存储空间随时间变化对比</th><tr><td>存储时间</td><td>一天</td><td>一个月</td><td>一年</td></tr><tr><td>set</td><td>400MB</td><td>12GB</td><td>144GB</td></tr><tr><td>BitMaps</td><td>12.5MB</td><td>375MB</td><td>4.5GB</td></tr></table><p>但是，当用户量较少的时候，使用BitMaps就不太合适了</p><h3 id="_6-2-hyperloglog" tabindex="-1"><a class="header-anchor" href="#_6-2-hyperloglog" aria-hidden="true">#</a> 6.2 HyperLogLog</h3><h4 id="基数问题" tabindex="-1"><a class="header-anchor" href="#基数问题" aria-hidden="true">#</a> 基数问题</h4><p>统计PV（PageView 页面访问量）时，只要使用简单的incr、incrby即可，而统计UV（UniqueVisitor 独立访客）时，他的独立访问数等数据如何计算？这种求集合中不重复元素个数的问题称为<strong>基数问题</strong>。</p><p>解决基数问题有很多方法：1. mysql中使用distinct计算不重复个数 2. redis中使用hash、set、bitmaps来处理。这些方法结果很精确，但是一旦数据量上升，所需要的存储空间也会大大增加。</p><p>所以Redis推出了一种降低精度，但是大大减少存储空间占用的算法：<strong>HyperLogLog</strong></p><p><strong>HyperLogLog</strong>是用来做基数统计的算法，它的优点是，当输入的数据量很大时，依然保持很小的固定的存储空间。在Redis中，每个HyperLogLog键消耗12KB内存，但却可以计算2^64个不同元素的基数。但是，HyperLogLog只会根据输入的数据计算基数，而不会存储输入的数据，所以它只输出计算的结果而不输出其它数据。</p><div class="custom-container tip"><p class="custom-container-title">什么是基数</p><p>根据对等这种关系对集合进行分类，凡是互相对等的集合就划入同一类。这样，每一个集合都被划入了某一类。任意一个集合A所属的类就称为集合A的基数，记作|A|（或cardA)。这样，当A 与B同属一个类时，A与B 就有相同的基数，即|A|=|B|。而当 A与B不同属一个类时，它们的基数也不同。</p><p>如果把单元素集的基数记作1，两个元素的集合的基数记作2，等等，则任一个有限集的基数就与通常意义下的自然数一致 。空集的基数也记作0。于是有限集的基数也就是传统概念下的“个数”。但是，对于无穷集，传统概念没有个数，而按基数概念，无穷集也有基数，例如，任一可数集（也称可列集）与自然数集N有相同的基数，即所有可数集是等基数集。不但如此，还可以证明实数集R与可数集的基数不同。所以集合的基数是个数概念的推广。</p><p>[1,3,4,5,6,4,5] 去除重复元素后 [1,3,4,5,6] 这个数据集的基数为5，即其中元素的个数</p></div><h4 id="命令-1" tabindex="-1"><a class="header-anchor" href="#命令-1" aria-hidden="true">#</a> 命令</h4><h5 id="pfadd" tabindex="-1"><a class="header-anchor" href="#pfadd" aria-hidden="true">#</a> pfadd</h5><p><code>pfadd key element [element ...]</code></p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>pfadd key1 &quot;java&quot;\n1\n\npfadd key2 &quot;.net&quot;\n1\n\npfadd key3 &quot;c++&quot;\n1\n\npfadd key1 &quot;java&quot;\n0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>如果添加元素后key的近似基数发生变化，返回1；如果近似基数没有变化，返回0</p></div><h5 id="pfcount" tabindex="-1"><a class="header-anchor" href="#pfcount" aria-hidden="true">#</a> pfcount</h5><p>TODO</p><h2 id="_10-事务-锁机制" tabindex="-1"><a class="header-anchor" href="#_10-事务-锁机制" aria-hidden="true">#</a> 10 事务|锁机制</h2><h3 id="_10-1-redis的事务" tabindex="-1"><a class="header-anchor" href="#_10-1-redis的事务" aria-hidden="true">#</a> 10.1 redis的事务</h3><p>Redis 事务可以一次执行多个命令， 并且带有以下三个重要的保证：</p><ul><li>批量操作在发送 EXEC 命令前被放入队列缓存。</li><li>收到 EXEC 命令后进入事务执行，事务中任意命令执行失败，其余的命令依然被执行。</li><li>在事务执行过程，其他客户端提交的命令请求不会插入到事务执行命令序列中。</li></ul><p>一个事务从开始到执行会经历以下三个阶段：</p><ul><li>开始事务。</li><li>命令入队。</li><li>执行事务。</li></ul><h4 id="multi、exec、discard" tabindex="-1"><a class="header-anchor" href="#multi、exec、discard" aria-hidden="true">#</a> multi、exec、discard</h4><p>在redis-cli中输入命令<code>multi</code>，即可开启事务</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>multi\n&gt; OK\nset key2 value2\n&gt; QUEUED\nset key3 value3\n&gt; QUEUED\nexec\n&gt; 1) OK\n&gt; 2) OK\n\nmulti\n&gt; OK\nget key2\n&gt; QUEUED\nget key3\n&gt; QUEUED\nexec\n&gt; 1) &quot;value2&quot;\n&gt; 2) &quot;value3&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>:::: info 如果中途放弃事务，输入<code>discard</code>即可退出，事务作废。 ::::</p><h3 id="_10-2-锁" tabindex="-1"><a class="header-anchor" href="#_10-2-锁" aria-hidden="true">#</a> 10.2 锁</h3><h4 id="悲观锁" tabindex="-1"><a class="header-anchor" href="#悲观锁" aria-hidden="true">#</a> 悲观锁</h4><p>每次访问资源时都认为会对资源进行修改，所以每次访问资源都要先上锁，等待此次操作结束后再解锁。</p><h4 id="乐观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁" aria-hidden="true">#</a> 乐观锁</h4><p>在资源上加上版本号，每对资源进行操作，更新资源的版本号。当两个操作同时从数据库拿到资源，A对资源进行了更新，将更新后的版本号写入数据库，B想要对资源进行操作，发现数据库中资源的版本号已经比自己手上的版本号更新，就放弃本次操作，转而去获取最新的数据进行操作。</p><h3 id="_10-3-watch" tabindex="-1"><a class="header-anchor" href="#_10-3-watch" aria-hidden="true">#</a> 10.3 watch</h3><p>在执行multi之前，可以对一个或多个key进行监视，如果在事务执行之前key被其他操作改动，那么事务将被打断。</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>set key 1\ncmd1:\n&gt; watch key\n&gt; multi\n&gt; increby key 1\n&gt; exec\n\ncmd2:\n&gt; watch key\n&gt; multi\n&gt; increby key 2\n&gt; exec\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>操作顺序：</p><ol><li>cmd1 watch key</li><li>cmd2 watch key</li><li>cmd1 multi</li><li>cmd2 multi</li><li>cmd1 increby key 1</li><li>cmd2 increby key 2 // 此时，两个事务都添加了命令</li><li>cmd1 exec // SUCCESS</li><li>cmd2 exec // nil 事务被打断</li></ol><h4 id="unwatch" tabindex="-1"><a class="header-anchor" href="#unwatch" aria-hidden="true">#</a> unwatch</h4><p>取消对所有key的监视。如果在执行unwatch之前先执行了exec或discard，就无需再执行unwatch。</p><h3 id="_10-4-redis事务三特性" tabindex="-1"><a class="header-anchor" href="#_10-4-redis事务三特性" aria-hidden="true">#</a> 10.4 redis事务三特性</h3><ol><li><p>单独的隔离操作</p><p>事务中的所有命令会序列化，按顺序执行。在执行过程中，不会被其他客户端发来的命令打断</p></li><li><p>没有隔离级别的概念</p><p>队列中的命令在没有提交之前不会实际被执行。</p></li><li><p>不保证原子性</p><p>事务中如果有一条命令执行失败，不会回滚，而是继续执行之后的命令</p></li></ol>',61),r={render:function(e,n){return s}}}}]);