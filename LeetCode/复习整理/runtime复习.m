/*
    isa指针
    指针型isa：isa的值代表Class的地址
    非指针型isa：64位系统下, isa的部分代表Class的地址

    isa指向
    实例 -> Class -> MetaClass
*/

/*
cache_t: 
    1.快速查找方法执行函数
    2.可增量扩展的哈希表结构
    3.局部性原理的最佳应用(调用频次高的函数)

    数据结构
    [bucket_t,bucket_t,bucket_t,bucket_t,bucket_t...bucket_t]
    bucket_t = {key, IMP}
*/

/*
methodLists
protocols
ivars
properties
    均为一位数组
*/

/*
mehtod_t
    types:[返回值，参数1，参数2，···，参数N]
    - (void)aMethod -> v@:
    v@: = [void,id(接受者对象),SEL(方法选择器)]
*/

/*
    消息传递
    void objc_msgSend(self, SEL)

    //从父类开始查找方法
    void objc_msgSendSuper() {
        struct objc_super {
            _unsafe_unretained id receiver; 还是当前对象
        }
    }

    流程：
    start -> 缓存
        YES -> invoke -> end
        NO -> 当前类方法列表是否命中
                YES -> invoke -> end
                NO -> 逐级父类方法列表查找
                        YES -> invoke -> end
                        NP -> 消息转发 -> end
*/

/*
方法缓存查找
    hash查找

当前类中查找
    已排序好的列表，采用二分查找
    没有排序的列表，一般遍历查找

父类逐级查找
    父类缓存查找
        YES -> end
        NO -> 遍历方法列表
            YES -> end
            NO -> 继续向上父类查找
*/

/*
消息转发
    resolveInstanceMethod：(添加方法实现，处理消息)
        YES -> 消息已处理
        NO -> forwardingTargetForSelector:(转发给其他对象处理)
                YES -> 转发目标，消息已处理
                NO -> methodSignatureForSelector:（方法签名封装）
                        return invocation -> forwardinvocation
                                                处理消息 -> 消息处理
                                                无法处理 -> 异常
                        return nil -> 异常
*/

/*
@dynamic
    get/set方法在运行时添加实现而不是在编译时添加

动态运行时语言特点
    动态运行时语言将函数决议推迟到运行时
    编译时语言在编译时进行函数决议，运行时无法修改
*/