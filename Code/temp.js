// Plan D: map()
function count4(arr, item) {
    var time = 0
    //map()-->对数组中的每一项进行给定函数，
    //返回每次函数调用的结果组成的数组；
    arr.map(function (a) {
        if (a === item) {
            time++
        }
    })
    return time
}