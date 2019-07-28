// setTimeout 不推荐
function count2(start , end) {
    if (start <= end) {
        console.log(start)
        start++;
        var timer = setTimeout(function(){count(start,end)},100)
    }
    return {
        cancel: function(){
            clearTimeout(timer)
        }
    }
}