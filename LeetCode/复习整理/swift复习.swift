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
