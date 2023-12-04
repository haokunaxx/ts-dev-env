/*
  [1,2,3].reduce((prev,next,index, arr) => {
    prev.push(next * 2)
    return prev
  },[])

  myReduce(source, callback, initialValue?, context?)
  1. 实现reduce
  2. 实现this指向绑定
  3. 实现初始值逻辑
  4. 支持对象迭代
  5. 实现reduceRight
*/
const myReduce = (
  source:
    | any[]
    | {
        [key: string]: any;
      },
  fn: (preVal: any, curVal: any, index: any, arr: any[]) => any,
  initialVal?: any,
  context?: any,
  reverse?: boolean
) => {
  const bind = (fn: Function, context: any) => {
    return function (
      preVal: any,
      curVal: any,
      index: any,
      arr:
        | any[]
        | {
            [key: string]: any;
          }
    ) {
      return fn.call(context, preVal, curVal, index, arr);
    };
  };

  let keys = Object.keys(source);
  reverse ? keys.reverse() : keys;
  const len = keys.length;

  const hasInitialVal = !!initialVal;
  let stepVal = hasInitialVal ? initialVal : (source as any)[keys[0]];
  let index = hasInitialVal ? 0 : 1;
  // let len = srcArr.length

  const bindFn = bind(fn, context);
  for (; index < len; index++) {
    const key = keys[index];
    stepVal = bindFn(stepVal, (source as any)[key], key, source);
  }
  return stepVal;
};

const myReduceRight = (
  source:
    | any[]
    | {
        [key: string]: any;
      },
  fn: (preVal: any, curVal: any, index: any, arr: any[]) => any,
  initialVal?: any,
  context?: any
) => myReduce(source, fn, initialVal, context, true);

// 以下为测试代码
// const res1 = [1, 2, 3].reduce((prev: number[], next: number) => {
//   return [...(Array.isArray(prev) ? prev : [prev]), next * 2];
// }, []);
// console.log(res1);

// const res2 = myReduce(
//   [1, 2, 3],
//   function (prev, cur, index, arr) {
//     return [...(Array.isArray(prev) ? prev : [prev]), cur * 2];
//   },
//   []
// );

// console.log(res2);

// const res3 = myReduce(
//   {
//     age1: 10,
//     age2: 20,
//     age3: 30,
//   },
//   function (this: any, prev, cur, key) {
//     return {
//       ...prev,
//       [key]: `${this.name}'s age is ${cur * 2}`,
//     };
//   },
//   {},
//   {
//     name: "xx",
//   }
// );

// console.log(res3);

// const res4 = myReduceRight(
//   [1, 2, 3],
//   function (prev, cur, index, arr) {
//     return [...(Array.isArray(prev) ? prev : [prev]), cur * 2];
//   },
//   []
// );

// console.log(res4);
// const res5 = [1, 2, 3].reduceRight((prev: number[], cur) => {
//   return [...(Array.isArray(prev) ? prev : [prev]), cur * 2];
// }, []);

// console.log(res5);
