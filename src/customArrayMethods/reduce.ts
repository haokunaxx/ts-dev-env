/*
  [1,2,3].reduce((prev,next,index, arr) => {
    prev.push(next * 2)
    return prev
  },[])

  myReduce([1,2,3], [])
*/
const res1 = [1, 2, 3].reduce(
  (prev: any, next: any, index: any, arr: any) => {
    prev.push(next * 2)
    return prev
  }
)
console.log(res1)

const myReduce = (
  srcArr: any[],
  fn: (preVal: any, curVal: any, index: number, arr: any[]) => any,
  initialVal?: any,
  context?: any
) => {
  const bind = (fn: Function, context: any) => {
    return function (preVal: any, curVal: any, index: number, arr: any[]) {
      return fn.call(context, preVal, curVal, index, arr)
    }
  }

  const hasInitialVal = !!initialVal
  let stepVal = initialVal
  const bindFn = bind(fn, context)
  for (let i = 0, len = srcArr.length; i < len; i++) {
    stepVal = bindFn(stepVal, srcArr[i], i, srcArr)
  }
  return stepVal
}

// const res2 = myReduce(
//   [1, 2, 3],
//   (prev, cur, index, arr) => {
//     prev.push(cur * 2)
//     return prev
//   }
// )

// console.log(res2)
