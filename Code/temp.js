function getRepeat2(arr) {
    arr.sort();
    var res = [];
    for(var i = 0;i < arr.length ; i++) {
        if (arr[i] === arr[i+1] && arr[i] !== arr[i-1]){
            newArr.push(arr[i])
        }
        // if(arr[i] === arr[i+1] && res.indexOf(i) == -1){
        //     res.push(arr[i])
        // }
    }
    return res
}