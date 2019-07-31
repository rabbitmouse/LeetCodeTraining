冷启动过程：从用户点击App图标开始到appDelegate didFinishLaunching方法执行完成为止
    1.main()函数之前，即操作系统加载App可执行文件到内存，然后执行一系列的加载&链接等工作，最后执行至App的main()函数
    2.main()函数之后，即从main()开始，到appDelegate的didFinishLaunchingWithOptions方法执行完毕
    3.App还需要做一些初始化工作，然后经历定位、首页请求、首页渲染等过程后，用户才能真正看到数据内容并开始使用

动态连接器:dyld

app启动
    -> 加载dyld到App进程
    -> 加载动态库
        Dyld从主执行文件的header获取到需要加载的所依赖动态库列表，然后它需要找到每个 dylib，递归加载所有的依赖动态链接库
    -> Rebase和Bind image
        Rebase在Image内部调整指针的指向
        Bind是把指针正确地指向Image外部的内容
    -> Objc setup
        注册Objc类
        把category的定义插入方法列表
    -> Initializers
        Objc的+load()
        C++的构造函数属性函数
        非基本类型的C++静态全局变量的创建
    -> 调用main函数

影响T1时间因素：
    动态库加载越多，启动越慢。
    ObjC类，方法越多，启动越慢。
    ObjC的+load越多，启动越慢。
    C的constructor函数越多，启动越慢。
    C++静态对象越多，启动越慢。

main()函数之后加载时间优化
    纯代码方式而不是storyboard加载首页UI。
    对didFinishLaunching里的函数考虑能否挖掘可以延迟加载或者懒加载。 
    对于一些与UI展示无关的业务，如微博认证过期检查、图片最大缓存空间设置等做延迟加载
    对实现了+load()方法的类进行分析，尽量将load里的代码延后调用。
    对于viewDidLoad以及viewWillAppear方法中尽量去尝试少做，晚做，不做。