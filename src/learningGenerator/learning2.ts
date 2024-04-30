function delay(data: any, ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, ms)
  })
}

function* effectFn() {
  console.log('1')
  let result1: string = yield delay('hello world', 1000)
  console.log('2', result1)
  let result2: string = yield delay('250', 1000)
  console.log('3', result2)
  let result3: string = yield delay('xx', 1000)
  console.log('4', result3)
  let result4: string = yield 'hi'
  console.log('5', result4)
  let result5: string = yield delay('1998', 1000)
  console.log('6', result5)
}

const gen = effectFn()

const autoRun = (data: IteratorResult<Promise<any> | string>) => {
  if (data.done) {
    return
  }
  if (typeof (data.value as Promise<any>).then === 'function') {
    ;(data.value as Promise<any>).then((res) => {
      autoRun(gen.next(res))
    })
  }else{
    autoRun(gen.next(data.value as string))
  }
}

autoRun(gen.next())

// console.log(gen.next('2'))
// console.log(gen.next())
// console.log(gen.next())
