/*
内存布局：                  
                    内核区  0xc0000000
                    栈（stack）：方法调用
                    
                    堆（heap）：alloc的
                    未初始化数据（.bss）：未初始化全局变量
                    已初始化数据（.data）：已初始化全局变量
                    代码段(.text)：程序代码
*/

/*
内存管理方案：
    小对象（NSNumber）->TaggedPointer
    64位架构->NONPOINTER_ISA：isa指针占64位，剩余比特位存储了内存管理相关数据内容
    散列表->引用计数表，弱引用表

    NONPOINTER_ISA
    arm64架构
    0   0   0   0   0   0   0   0   0   0   0   0）   0（是否使用c++）   0（有无关联对象）   0（indexed->0：对象地址，1对象地址+内存管理数据）
    0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
    0   0   0   0   0(是否有散列表)   0(是否正在释放)   0（是否有弱引用）   0   0   0   0   0   0   (指针地址0   0
    0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0

    SideTables 散列表
    Spinlock_t 自旋锁 忙等的锁 当前线程不停判断是否可以进锁
                     适用于轻量访问
    RefcountMap 引用计数表（hash表）
        查找：hash查找
    weak_table_t 弱引用表（hash表）
    对象指针key ->hash函数 -> value （weak_entry_t 结构体数组：存储弱引用指针）

    ARC
        编译器自动插入retain，release代码
        编译器LLVM和Runtime协作的结果

    引用计数管理
    alloc实现
        最终调用C函数calloc
        此时并没有设置引用计数为1
    retain实现
        // 通过hash表 找到对应的sidetable
        SideTable& table = SideTables()[this];
        // 通过hash表 获取引用计数值
        size_t& refcntStorage = table.refcnts[this]
        // +偏移量
        refcntStorage += SIDE_TABLE_RC_ONE

    release实现
    // 通过hash表 找到对应的sidetable
        SideTable& table = SideTables()[this];
        // 通过hash表 获取引用计数值
        size_t& refcntStorage = table.refcnts.find(this)
        // -偏移量
        refcntStorage -= SIDE_TABLE_RC_ONE
    
    dealloc实现
        判断是否可以释放 
            · nonpointer_isa 是否为非指针行isa
            · weakly_referenced
            · has_assoc
            · has_cxx_dtor
            · has_sidetable_rc 是否用引用计数表维护
        YES-> free()
        NO->object_dispose()

        object_dispose()实现
            objc_destructInstance()
            free()

            objc_destructInstance()实现
                hasCxxDtor? yes->销毁C++对象
                hasAssociatedObjects? yes->移除关联对象
                clearDeallocating()

                    clearDeallocating()实现
                        sidetable_clearDeallocating()
                        weak_clear_no_lock() 将指向该对象的弱引用指针置位nil
                        table.refcnts.erase() 从引用计数表清除该对象

    autoreleasepool 数据结构
        以栈为结点通过双向链表组合而成
        是和线程一一对应的

        autoreleasepoolPage
            push->插入哨兵对象nil（嵌套autoreleasepool：在for循环中alloc大量对象，使用autoreleasepool）
            pop->批量发送release

    循环引用
    1.自循环引用
    2.相互循环引用
    3.多循环引用
*/