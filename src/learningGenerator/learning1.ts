function* test() {
  try {
    console.log('1')
    const a: number = yield 1
    console.log('-', a)
    const b: number = yield 2
    console.log(b)
    const c: number = yield 3
    console.log('c', c)
    // return 'hello'
  } finally {
    console.log('finally')
    yield 'GG'
  }
}

const a = test()
console.log(a)
const b = a.next()
// console.log(b)
console.log(a.next(250))
// console.log(a.next(10))
// a.return()
console.log(a.next())
console.log(a.next())
