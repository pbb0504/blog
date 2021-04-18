# cookie 和 session

会话(session)用来跟踪用户的整个会话，常用的跟踪技术有 cookie 和 session。cookie 用于客户端，session 用于服务器端。
由于 http 连接是无状态的，每次连接都是一次全新的请求。服务器对每一次客户端发起的请求都视为不同来源的，即服务器不记住之前有哪个客户端进行过请求。所以当 A 发过一次请求，再次发送的时候服务器不知道这是 A 第二次发送的请求。
因此，单纯地使用 http 连接是不能对用户的状态进行保存的，也就不能进行相应的服务。
<img :src="$withBase('images/http无状态.png')" alt="http无状态">

## cookie
Cookie 会根据从服务器端发送的响应报文内的一个叫做Set-Cookie的首部字段信息，通知客户端保存Cookie。当下次客户端再往该服务器发送请求时，客户端会自动在请求报文中加入Cookie 值后发送出去。
服务器端发现客户端发送过来的Cookie 后，会去检查究竟是从哪一个客户端发来的连接请求，然后对比服务器上的记录，最后得到之前的状态信息。
<img :src="$withBase('images/从服务器获取cookie.png')" alt="从服务器获取cookie">
<img :src="$withBase('images/使用cookie发起请求.png')" alt="使用cookie发起请求">
