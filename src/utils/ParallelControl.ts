type ParallelControlFn = (
  fns: Function[],
  parallelCount: number,
  maxRetryCount: number
) => Promise<any[]>;

// type HandlerFn = () => {};

// const asyncTaskMaker = (
//   timer: number,
//   type: "resolve" | "reject",
//   info: any
// ) => {
//   return () =>
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log(info);
//         // if(type === 'resolve'){
//         //     resolve(info);
//         // }else{
//         //     throw new Error(info)
//         // }
//         type === "resolve" ? resolve(info) : reject(info);
//       }, timer);
//     });
// };

// const fn1 = asyncTaskMaker(2000, "resolve", "fn1 result"),
//   fn2 = asyncTaskMaker(3000, "resolve", "fn2 result"),
//   fn3 = asyncTaskMaker(2000, "reject", "fn3 result"),
//   fn4 = asyncTaskMaker(4000, "resolve", "fn4 result"),
//   fn5 = asyncTaskMaker(2000, "resolve", "fn5 result"),
//   fn6 = asyncTaskMaker(2000, "resolve", "fn6 result");

/*
    1s      2s      3s      4s      5s      6s      7s      8s      9s      10
            fn1,            fn3,            fn3,            fn3,            fn6
                    fn2,                            fn4,            fn5,
*/

const ParallelControl1: ParallelControlFn = async (
  fns,
  parallelCount,
  maxRetryCount
) => {
  const run = (
    index: number,
    resolve: Function,
    reject: Function,
    retryCount: number = 0,
    reason: any = ""
  ) => {
    const fn = () => Promise.resolve(fns[index]());
    // const fn = () => {
    //     try{
    //         return Promise.resolve(fns[index]());
    //     }catch(err){
    //         return Promise.reject(err)
    //     }
    // }
    fn()
      .then((data) => {
        result[index] = {
          type: "success",
          data,
        };
        if (count >= fns.length - 1) {
          resolve(void 0);
        } else {
          run(++count, resolve, reject);
        }
      })
      .catch((reason) => {
        // 没有重试次数了
        if (retryCount >= maxRetryCount) {
          result[index] = {
            type: "failed",
            reason,
          };
          if (count >= fns.length - 1) {
            resolve(void 0);
          } else {
            run(++count, resolve, reject);
          }
          return;
        }
        console.log(`prepare to retry... times: ${retryCount + 1}`);
        run(index, resolve, reject, retryCount + 1);
      });
  };
  const handler = (index: number) => {
    return new Promise((resolve, reject) => {
      run(index, resolve, reject);
    });
  };

  const result: any[] = [];
  let count = -1;
  const runnings = fns.slice(0, parallelCount).map(() => handler(++count));
  await Promise.allSettled(runnings);
  return result;
};

// const init = async () => {
//   const res = await ParallelControl([fn1, fn2, fn3, fn4, fn5, fn6], 2, 2);
//   console.log("---", res);
// };

// init();
export {
  ParallelControl1
}

module.exports = ParallelControl1