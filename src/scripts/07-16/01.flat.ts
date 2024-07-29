// 1. 扁平化 2. 排序 3. 去重
export const flat = (arr: any[]) => {
  const _flatten = (arr: any[]): number[] =>
    arr.reduce((prev, next) => {
      prev.push(...(Array.isArray(next) ? _flatten(next) : [next]))
      return prev
    }, [] as number[])
  const flattenArr = _flatten(arr)
  return [...new Set(flattenArr)].sort((a, b) => a - b)
}

console.log(
  flat([
    [1, 3, 2],
    [2, 5, 4, 1]
  ])
)
