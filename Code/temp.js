// 使用变量暂存区交换的原理:
// for循环遍历数组，定义两种索引：顺序和倒序
// 将顺序的值赋给暂存区，倒序的值赋给正序，暂存区的值赋给倒序
function reverseArr(arr) {
    // 定义暂存变量
    let temp
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}

 // test===========
 let some = [5,4,6,3,4,9]
 reverseArr(some)
 console.log (some)  // =>[9, 4, 3, 6, 4, 5]