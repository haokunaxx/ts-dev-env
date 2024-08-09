export function debounce<T extends (...params: any[]) => any>(
  fn: T,
  wait: number,
  opt?: {
    leading?: boolean
    trail?: boolean
  }
): (...params: Parameters<T>) => void {
  let timerId: any = null
  const { leading = false, trail = true } = opt || {}
  let flag = true
  return (...params) => {
    if (!timerId) {
      if (leading && flag) {
        flag = false
        fn(...params)
      }
    }
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      if (trail) {
        fn(...params)
      }
      clearTimeout(timerId)
      timerId = null
    }, wait)
  }
}

const fn = (message: string) => {
  console.log('hello', message)
}

const debounceFn = debounce(fn, 3000, {
  leading: true
})

let timer = setInterval(() => {
  console.log('running')
  debounceFn('world')
}, 1000)

setTimeout(() => {
  clearInterval(timer)
}, 5000)
