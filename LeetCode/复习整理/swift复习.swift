/*
    let常量：只能赋值一次
        允许编译前不赋值，但使用时必须赋值
    
    for
        闭区间：0-3
            for i in 0...3 {

            }
        半开区间：1-4
            for i in 1..<5 {

            }
        单侧区间：让区间朝一个方向尽可能远
            for name in names[2...]
            for name in names[..<2]
        
        区间类型
            let range1: ClosedRange<Int> = 1...3
            let range2: Range<Int> = 1..<3
            let range3: PartialRangeThrough<Int> = ...5

    switch
        break：默认有break，可以不写break
        fallthrought：实现贯穿效果
        必须能处理所有情况
        支持Character,String类型
        支持元组类型

    where：额外条件
        for num in numbers where num > 0 {
            //过滤不合符条件的元素
        }
    
    标签语句
        outer: for i in 1...4 {
            for k in 1...4 {
                if k == 3 {
                    continue outer
                }
                if i == 3 {
                    break outer
                }
            }
        }

    
*/

/*
#函数
函数的定义：
    形参默认是let，也只能是let
*/
func sum(v1: Int, v2: Int) -> Int {
    return v1 + v2
}

/*
隐式返回
*/
func sum(v1: Int, v2: Int) -> Int {
    v1 + v2
}

/*
返回元组：实现多返回值
*/
func calculate(v1: Int, v2: Int) -> (sum: Int, diff: Int, average: Int) {
    let sum = v1 + v2
    return (sum, v1 - v2, sum >> 1)
}
let res = calculate(v1: 20, v2: 10)
res.sum
res.diff
res.average

/*
参数标签
    可以修改参数标签
    可以使用_省略参数标签
*/
func gotowork(at time: String) {
    print(time)
}
gotowork(at: "string")

/*
默认参数值
*/
func check(name: String = "nobody", age: Int, job: String = "none") {

}

check(age: 10, job: "aaa") // nobody , 10, aaa

/*
可变参数
    一个函数最多只有1个可变参数
    紧跟在可变参数后面的参数不能省略参数标签
*/
func sum(_ numbers: Int...) -> Int {
    var total = 0
    for num in numbers {
        total += number
    }
    return total
}
sum(10, 20, 30, 40)

/*
输入输出参数
    可变参数不能标记inout
    inout参数不能有默认值
    inout参数的本质是地址传递
        如果传递给inout参数的是计算属性，有监听器的属性，本质并非引用传递
    inout参数只能传入可以被多次赋值的
        例如var变量，数组中的值
*/
var number = 10
func add(_ num: inout Int) {
    num = 20
}

add(&number)

/*
函数重载
    规则：
    函数名相同
    参数个数不同 || 参数类型不同 || 参数标签不同
    
    返回值类型与函数重载无关，不能构成重载
    默认参数值和函数重载一起使用产生二义性
    可变参数，省略参数标签，函数重载一起使用产生二义性，编译器有可能报错
*/

func sum(a: Int, b: Int)
func sum(a: Int, b: Int, c: Int)
func sum(a: Int, b: Double)
func sum(a: Int, c: Int)

/*
内联函数
    优点：优化函数调用开销，减小栈上内存分配和释放
    不会内联的函数：
        1.函数体比较长
        2.递归调用
        3.包含动态派发
*/

// 永远不会内联
@inline(never) func test() {

}

//开启编译器优化后，及时代码很长，也会被内联
@inline(__always) func test() {

}

/*
函数类型
    形式参数类型、返回值类型
*/
func test(){} //()->Void 或者 ()->()
func sum(a: Int, b: Int) -> Int {
    a + b
} // (Int, Int) -> Int

//定义函数变量
var fn: (Int, Int) -> Int = sum
fn(2, 3) 

/*
函数类型作为函数参数
*/
func sum(v1: Int, v2: Int) -> Int {
    v1 + v2
}
func printRes(_ mathFn: (Int, Int) -> Int, _ a: Int, _ b: Int) {
    let res = mathFn(a, b)
}

/*
函数类型作为返回值
    返回值是函数类型，称为高阶函数
*/
func next(_ input: Int) -> Int {
    input + 1
}

func previous(_ inout: Int) -> Int {
    input - 1
}

func forward(_ forward: Bool) -> (Int) -> Int {
    forward ? next : pervious
}

forward(true)(3) //4
forward(false)(3) //

/*
typealias
    用来给类型起别名
*/
typealias Byte = Int8
typealias Date = (year: Int, month: Int, day: Int)
func test(date: Date) {
    print(date.0)
    print(date.year)
}
test((2011,9,10))

/*
嵌套函数
    将函数定义在函数内部
*/


/*
枚举 
*/

// 一般用法
enum Direction {
    case north
    case south
    case east
    case west
}

var dir = Direction.west
dir  = Direction.east
dir = .north
print(dir)

//将枚举的成员值跟其他类型的关联存储在一起
enum Score {
    case points(Int)
    case grade(Character)
}
var score = Score.points(97)
score = .grade("A")

switch score {
    case let .points(i):
        print(i)
    case let .grade(i):
        print(i)
}

/*原始值
    枚举成员可以使用相同类型的默认值预先关联
*/
enum PokerSuit : Character {
    case spade = "♠️"
    case heart = "♥️"
    case diamond = "♦️"
    case club = "♣️"
}
var suit = PokerSuit.spade
print(suit)// spade
print(suit.rawValue)//♠️
print(PokerSuit.club.rawValue) //♣️

/*
隐式原始值
    如果枚举的原始值类型是Int, String, swift会自动分配原始值
        Int默认0开始，递增
        String默认与枚举名相同
*/

enum Direction : String {
    case north, south, east, west
}
print(Direction.north) //north
print(Direction.north.rawValue) //north

/*
递归枚举
    indirect
*/
indirect enum AirthExpr {
    case number(Int)
    case sum(AirthExpr, AirthExpr)
    case difference(AirthExpr, AirthExpr)
}

let five = AirthExpr.number(5)
let four = AirthExpr.number(4)
let two = AirthExpr.number(2)
let sum = AirthExpr.sum(five, four)
let difference = AirthExpr.difference(sum, two)

//使用
func calculate(_ expr: ArithExpr) -> Int {
    switch expr {
        case let .number(value):
            return value
        case let .sum(left, right):
            return calculate(left) + calculate(right)
        case let .difference(left, right):
            return calculate(left) - calculate(right)
    }
}

/*
    MemoryLayout
        可以使用MemoryLayout获取数据类型占用的内存大小
*/
var age = 10
//泛型
MemoryLayout<Int>.size //8
MemoryLayout<Int>.stride //8
MemoryLayout<Int>.alignment //8

MemoryLayout.size(ofValue: age) //8
MemoryLayout.stride(ofValue: age) //8
MemoryLayout.alignment(ofValue: age) //8

enum Password {
    case number(Int, Int, Int, Int)
    case other
}
MemoryLayout<Password>.stride //40 分配占用的内存大小
MemoryLayout<Password>.size //33 实际占用的内存大小
MemoryLayout<Password>.alignment //8 对齐参数

/*
可选项（Optional）
    也叫可选类型，它允许将值设置为nil
*/

var age: Int? = 10

/*
强制解包 -> 使用optional里面的值
    对空盒子强制解包，会产生错误
*/
var num = age!

/*
判断可选项是否包含值
    1.判断是否为nil
    2.可选项绑定
*/
if let number = Int("123") {
    print("字符串转换成功:\(number)")
    //number是解包后的值
    //number作用域仅限大括号
} else {
    print("字符串转换失败")
}

/*
空合并运算符 ？？
    a ?? b
        a是可选项
        b是可选项或者不是可选项
        b和a的存储类型必须相同
        如果 a 不为nil 就返回a
        如果 a 为nil 就返回b
        如果 b 不是可选项，返回a时会自动解包
*/

let a: Int? = 1
let b: Int? = 2
let c = a ?? b // c是Int? optional(1)

let a: Int? = 1
let b: Int = 2
let c = a ?? b // c是Int 1

/*
guard 条件 else {
    do something ...
    退出当前作用域
}
*/

/*
隐式解包
*/
let num1: Int! = 10
let num2: Int = num1

/*
多重可选项
*/
var num1: Int? = 10
var num2: Int?? = num1
var num3: Int?? = 10


/*
结构体
    所有结构体都有一个编译器自动生成的初始化方法
        必须保证所有成员都有初始值
*/
/*
自定义初始化器
    一旦在定义结构体时自定义了初始化器，编译器就不会帮它生成其他初始化器了
*/
struct  Point {
    var x: Int = 0
    var y: Int = 0
    init(x: Int, y: Int) {
        self.x = x
        self.y = y
    }
}

/*
类
    类的定义和结构体类似，但编译器并没有为类自动生成可传入成员的初始值
        如果类的所有成员都在定义的时候指定了初始值，编译器会生成午餐的初始化器
*/

/*
结构体与类的区别
    结构体是值类型
    类是引用类型（指针类型）

    值类型赋值给var,let或者给函数传参，是直接将内容拷贝一份
        产生全新副本，属于深拷贝
        为了提升性能，String, Array, Dictionary使用copy on write
            如果不修改，默认浅拷贝
            仅当有写操作时，才真正执行拷贝操作
    
    引用类型赋值给var，let或者传参，是将内存地址拷贝一份
        指针指向同一个地址，属于浅拷贝
*/

let p = Point(x: 10, y: 20) //结构体对象内存不能改变
p = Point(x: 11, y: 22) // 不能修改
p.x = 33 // 不能修改
p.y = 44 // 不能修改

let s = Size(width: 10, height: 20) //指针地址不能改变
s = Size(width:11, height:22) //不能修改
s.width = 33 //可以修改
s.heart = 44 //可以修改

/*
枚举、结构体、类都可以鼎汉方法
    方法不占用对象内存空间
    方法存储在代码段
*/

//类里的方法等价于这样写
func show(self: Point) {
    print(self.x, self.y)
}

class Point {
    var x = 11
    var y == 22
    func show(){
        print(x, y)
    }
}

/*
闭包表达式
    可以通过func定义函数，也可以通过闭包定义一个函数
*/
func sum(_ v1:Int, _ v2: Int) -> Int {v1 + v1}

var fn = {
    (v1: Int, v2: Int) -> Int in
    return v1 + v2
}
fn(10, 20)

{
    (参数列表) -> 返回值类型 in
    函数体代码
}

//闭包表达式的简写
func exec(v1: Int, v2: Int, fn:(Int, Int) -> Int) {
    print(fn(v1, v2))
}

exec(v1: 10, v2: 20, fn: {
    (v1: Int, v2: Int) -> Int in
    return v1 + v2
})

exec(v1: 10, v2: 20, fn: {
    v1, v2 in return v1 + v2
})

exec(v1: 10, v2: 20, fn: {
    v1, v2 in v1 + v2
})

exec(v1: 10, v2: 20, fn: {
    $0 + $1
})

//尾随闭包：将很长的闭包表达式作为函数的最后一个实参，使用尾随闭包可以增强函数可读性
    //被书写在函数调用外面的闭包表达式

exec(v1: 10, v2: 20) {
    $0 + $1
}
//如果闭包表达式是函数唯一实参，而且使用尾随闭包。那就不需要在函数名后面写圆括号
func exec(fn: (Int, Int) -> Int) {
    print(fn(1, 2))
}

exec(fn: {$0 + $1})
exec(){$0 + $1}
exec{$0 + $1}

//数组排序
var arr = [10, 2, 4, 29, 44]
arr.sort() //升序
arr.sort(by areInIncreasingOrder: (Element, Element) -> Bool)
//返回true：i1排在i2前面
//返回false：i1排在i2后面
func cmp(i1: Int, i2: Int) -> Bool {
    return i1 > i2
}
arr.sort(by: cmp)
arr.sort(by: {$0 < $1})
arr.sort(){$0 < $1}

/*
闭包（closure）
    一个函数和它捕获的变量、常量组合起来，称为闭包
        定义在函数内部的函数
        捕获的是外层函数的局部变量、常量
*/

func fn() -> () -> () {
    var a = 10
     
    func fn1() {
        a = 11
    }
    return fn1
}