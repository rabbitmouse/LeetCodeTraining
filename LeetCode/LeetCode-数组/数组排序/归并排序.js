/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
   return mergeSort(nums, 0, nums.length - 1)
};

var mergeSort = function(nums, l, r) {
    if (l >= r) {
        return // 退出条件
    }
    const mid = parseInt((r + l) / 2)
    mergeSort(nums, l, mid) // 拆分左边
    mergeSort(nums, mid + 1, r) // 拆分右边
    return merge(nums, l, mid, r) // 合并
}

var merge = function(nums, l, mid, r) {
    leftArr = nums.slice(l, mid + 1)
    rightArr = nums.slice(mid+1, r + 1)

    console.log (leftArr)
    console.log (rightArr)

    let i = 0
    let j = 0
    let k = l

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            nums[k] = leftArr[i]
            i++
        } else {
            nums[k] = rightArr[j]
            j++
        }
        k++
    }
    while(i < leftArr.length) {
        nums[k] = leftArr[i]
        k++
        i++
    }
    while(j < rightArr.length) {
        nums[k] = rightArr[j] 
        k++
        j++
    }
    
    return nums
}

console.log(sortArray([5,1,1,2,0,0]))