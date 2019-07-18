/*1 -> 从对应类中获取所有分类 cats
 *2 -> 将所有分类拼接到cls
    *2-1 -> 获取mlists,proplists,protolists，3个二维数组
        [[method_t, method_t, ...],[method_t][method_t...]]
    *2-2 -> 倒序遍历，最先访问最后编译的分类
        最后添加的同名方法会生效，前面添加的会被覆盖
    *2-3 -> 像二维数组中添加分类方法
    *2-4 -> 将二维数组拼接到宿主类的方法列表上
*3 -> 拼接列表 attachLists(addedLists, count)
    *3-1 -> 分配内存 oldcount + newcount
    *3-2 -> 内存移动 把原来列表中的方法移动到[newcount]
            [nil,nil,nil,[原来第一个元素],[原来第二个元素]]
    *3-2 -> 内存拷贝，将newlists拷贝到原列表中
            [A, B, C,[原来第一个],[原来第二个]]
*/

/*
关联对象本质
    *由AssociationsManager管理并在AssociationsHashMap存储
    *所有关联对象都在同一个全局容器中
    AssociationsHashMap = {DISGUISE(obj):ObjectAssociationMap}
    ObjectAssociationMap = {@selector(text):ObjcAssociation}
    ObjcAssociation = {OBJC_ASSOCIATION_COPY_NONATOMIC:"retain",@"VALUE":"hello"} === @property(retain) NSString *text
*/

/*
分类特点
    运行时决议
    有声明，有实现
    可以为系统类添加分类
*/

/*
扩展特点
    编译时决议
    只以声明形式存在
    不能为系统类添加扩展
*/

/*
通知实现机制
  NotificationMap = {"notificationName":Observers_List}
  Observers_List = [Observer1, Observer2, Observer3...]  
*/

/*
KVO
使用isa(isa-swizzling)混写实现
    1.Observer addObserver  Class A
    2.动态创建Class A1 : A, A1重写setter
        2.1—> 重写的setvalue {
            [self willChangeValueForKey:@"key"]
            [super setValue:obj];
            [self didChangeValueForKey:@"key"]
        }
    3.swizzling A and A1

    Q:通过kvc设置value能否生效
        可以->kvc会执行setter方法
    Q:通过成员变量赋值value能否生效
        不可以->成员变量赋值不会执行setter方法
*/

/*
KVC
valueForKey实现流程
    1.查找对应getter方法
        yes->end
        no->2.查找实例变量
            yes->end
            no->异常 valueforundefined
    查找规则：getKey, Key, isKey

setValueForKey实现流程
    1.查找setter方法
        yes->end
        no->2.查找实例变量
            yes->end
            no->异常setvalueforundefined
*/