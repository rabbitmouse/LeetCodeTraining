/*
什么是block？
    Block是将函数及其执行上下文封装起来的对象

    struct __block_impl {
        void *isa
        int Flags
        int Reserved
        void *FuncPtr
    }
*/

/*
截获变量
    局部变量
        基本数据类型：截获值
        对象类型：所有权修饰符一起截获
    静态局部变量：指针形式截获
    全局变量：不截获
    静态全局变量：不截获

__block
    需要：局部变量赋值
    不需要：静态全局，全局，静态局部变量

    __block修饰的变量变成了对象
    __block int multiplier -> struct _Block_multiplier_0 {
        void *__isa
        _Block_multiplier_0 *_forwarding
        int _flags
        int _size
        int multiplier //函数中的局部变量
    }

    _forwarding指针：
    multiplier = 4 -> multiplier._forwarding->multiplier = 4 

    如图：
                          栈
            __forwarding  -> __block变量     
*/

/*
Block的内存管理
    _NSConcreteGlobalBlock 全局 -> 已初始化区
    _NSConcreteStackBlock  栈  -> 栈区
    _NSConcreteMallocBlock 堆  -> 堆区

Block的Copy操作             
                           源位置
    _NSConcreteGlobalBlock 数据区 -> 什么都不做
    _NSConcreteStackBlock  栈  -> 堆
    _NSConcreteMallocBlock 堆  -> 增加引用计数

 __forwarding指针的作用  
    不论任何内存位置，都可以顺利访问同一个__block变量
*/