function getIndex(arr,item) {
    var res = []
    arr.forEach(function(ele,index) {
        // 意思是：只有ele等于item时才会执行后边的表达式
        ele == item && res.push(index)
    })
    return res
}
// filter与foreach的区别在于，filter的函数需要return
function getIndex(arr,item) {
    var res = []
    arr.filter(function(ele,index) {
        return ele == item && res.push(index)
    })
    return res
}