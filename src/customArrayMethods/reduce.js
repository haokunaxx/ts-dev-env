/*
  [1,2,3].reduce((prev,next,index, arr) => {
    prev.push(next * 2)
    return prev
  },[])

  myReduce([1,2,3], [])
*/
var res1 = [1, 2, 3].reduce(function (prev, next, index, arr) {
    prev.push(next * 2);
    return prev;
});
console.log(res1);
var myReduce = function (srcArr, fn, initialVal, context) {
    var bind = function (fn, context) {
        return function (preVal, curVal, index, arr) {
            return fn.call(context, preVal, curVal, index, arr);
        };
    };
    var hasInitialVal = !!initialVal;
    var stepVal = initialVal;
    var bindFn = bind(fn, context);
    for (var i = 0, len = srcArr.length; i < len; i++) {
        stepVal = bindFn(stepVal, srcArr[i], i, srcArr);
    }
    return stepVal;
};
// const res2 = myReduce(
//   [1, 2, 3],
//   (prev, cur, index, arr) => {
//     prev.push(cur * 2)
//     return prev
//   }
// )
// console.log(res2)
