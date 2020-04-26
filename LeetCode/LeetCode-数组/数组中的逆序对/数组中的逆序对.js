/**
 * @param {number[]} nums
 * @return {number[]}
 */
var reversePairs = function(nums) {
    return mergeSort(nums, 0, nums.length - 1)
 };
 
 var mergeSort = function(nums, l, r) {
     if (l >= r) {
         return 0// 退出条件
     }
     const mid = parseInt((r + l) / 2)
     const lc = mergeSort(nums, l, mid) // 拆分左边
     const rc = mergeSort(nums, mid + 1, r) // 拆分右边
     console.log('lc----:',lc)
     console.log('rc----:',rc)
     return merge(nums, l, mid, r) + lc + rc // 合并
 }
 
 var merge = function(nums, l, mid, r) {
     leftArr = nums.slice(l, mid + 1)
     rightArr = nums.slice(mid+1, r + 1)
 
     let i = 0
     let j = 0
     let k = l
     let count = 0
 
     while (i < leftArr.length && j < rightArr.length) {
         if (leftArr[i] <= rightArr[j]) {
             nums[k] = leftArr[i]
             i++
         } else {
             nums[k] = rightArr[j]
             j++
             count = count + leftArr.length - i
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
     
     return count
 }
 
 console.log(reversePairs([1,3,2,3,1]))

