const fn1 = () => {
  console.log('fn1 trigger')
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log('fn1')
      resolve('fn1')
    }, 2000)
  })
}
const fn2 = () => {
  console.log('fn2 trigger')
  return new Promise((_, reject) => {
    setTimeout(() => {
      // console.log('fn2')
      reject('fn2')
    }, 2000)
  })
}
const fn3 = () => {
  console.log('fn3 trigger')
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log('fn3')
      resolve('fn3')
    }, 2000)
  })
}
const fn4 = () => {
  console.log('fn4 trigger')
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log('fn4')
      resolve('fn4')
    }, 2000)
  })
}
const fn5 = () => {
  console.log('fn5 trigger')
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log('fn5')
      resolve('fn5')
    }, 2000)
  })
}
const fn6 = () => {
  console.log('fn6 trigger')
  return new Promise((_, reject) => {
    setTimeout(() => {
      // console.log('fn6')
      _('fn6')
    }, 2000)
  })
}

export async function ConcurrencyControl(
  tasks: Function[],
  maxConcurrent: number,
  maxRetryTimes: number
) {
  const handler = ({
    fn,
    maxRetryTimes,
    retryTimes,
    resolve,
    reject,
    reason
  }: {
    fn: Function
    maxRetryTimes: number
    retryTimes: number
    resolve: (...args: any[]) => any
    reject: (...args: any[]) => any
    reason?: any
  }): void => {
    if (retryTimes > maxRetryTimes) {
      result[index] = {
        type: 'failed',
        reason
      }
      return index >= tasks.length - 1
        ? resolve()
        : handler({
            fn: tasks[++index],
            maxRetryTimes,
            retryTimes: 0,
            resolve,
            reject
          })
    }
    const PromiseFn = Promise.resolve(fn())
    // retryTimes === 0 && result.push(PromiseFn)
    PromiseFn.then((data) => {
      result[index] = {
        type: 'success',
        data
      }
      index >= tasks.length - 1
        ? resolve()
        : handler({
            fn: tasks[++index],
            maxRetryTimes,
            retryTimes: 0,
            resolve,
            reject
          })
    }).catch((reason) => {
      handler({
        fn,
        maxRetryTimes,
        retryTimes: retryTimes + 1,
        resolve,
        reject,
        reason
      })
    })
  }

  const run = (task: Function) => {
    index++
    return new Promise((resolve, reject) => {
      handler({
        fn: tasks[index],
        retryTimes: 0,
        maxRetryTimes,
        resolve,
        reject
      })
    })
  }
  let index = -1
  const result: any[] = []
  const executingTasks = tasks.slice(0, maxConcurrent).map((task) => run(task))
  await Promise.all(executingTasks)
  return result
}

const init = async () => {
  const result = await ConcurrencyControl([fn1, fn2, fn3, fn4, fn5, fn6], 2, 2)
  console.log(result)
  // console.log(result[0].then(res=>console.log(res)))
  // console.log(result[1].catch(res=>console.log(res)))
}
init()
