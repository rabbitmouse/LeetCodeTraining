/*
GCD
    同步、异步和串行、并发

    同步串行
        同步提交到主队列：会产生死锁
            原因：队列引起的循环等待
        同步提交到串行队列

    异步串行
    异步并发
        dispatch_async(global_queue, ^{
            nslog(1)
            [self performSelector:@selector(nslog(2))
                        withObject:nil
                        afterDelay:0]; //必须加入runloop
            nslog(3)
        })
        结果：1，3  gcd线程池默认不开启runloop

    dispatch_barrier_async()
        实现多读单写
*/

/*
NSOperation/NSOperationQueue
    添加任务依赖
    任务执行状态
        isReady
        isExecuting
        isFinished
        isCancelled
        状态控制：
            重写main方法，底层空手指变更任务执行完成状态，任务退出
                系统如何移除一个isFinished = YES的NSOperation
                    通过KVO：系统底层监听状态改变来移除
            重写start方法，自行控制任务状态
    最大并发量
*/

/*
锁
    @synchronized
        一般在创建单例时使用，保证多线程环境创建对象唯一
    atomic
        对修饰的对象进行原子操作
    OSSpinLock
        自旋锁，循环等待访问，不释放当前资源
        用于轻量级数据访问，int值+1/-1
    NSRecursiveLock
        递归锁，可重入
    NSlock
        线程同步，互斥等
    dispatch_semaphore_t
        信号量，线程同步，互斥访问
*/