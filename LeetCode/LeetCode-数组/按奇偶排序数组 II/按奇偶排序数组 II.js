/*
*   按奇偶排序数组 II
*   新空间，插入
*/
var sortArrayByParityII = function(A) {
    var res = []
    var oddIndex = 1
    var eveIndex = 0
    
    for (const i in A) {
        if (A[i] % 2 == 0) {
            res[eveIndex] = A[i];
            eveIndex += 2;
        } else {
            res[oddIndex] = A[i];
            oddIndex += 2;
        }
    }

    return res;
};

console.log(sortArrayByParityII([4,2,5,7]))

/*
*   按奇偶排序数组 II
*   循环 不正确位置交换
*/
var sortArrayByParityII = function(A) {
    var j = 1;
    for (var i = 0; i < A.length - 1; i = i + 2) {
        if ((A[i] & 1) != 0) {
             while ((A[j] & 1) != 0) {
                j = j + 2;
            }
            var tmp = A[i];
            A[i] = A[j];
            A[j] = tmp;
        }
    }
    return A;
};

console.log(sortArrayByParityII([4,2,5,7]))
