// function findOriginalArray(changed: number[]): number[] {
//   changed = changed.sort((a, b) => a - b)
//   const len = changed.length
//   if (len % 2 !== 0 || len === 0) return []

//   const targetCount = len / 2
//   const res = []
//   const IndexSet = new Set<number>()

//   let p = 0,
//     q = 1
//   while (p < len && q < len) {
//     const temp = changed[p] * 2
//     if (temp > changed[len - 1]) break
//     if (changed[q] === temp) {
//       IndexSet.add(p)
//       IndexSet.add(q)
//       res.push(changed[p])
//       p++
//       while (IndexSet.has(p)) {
//         p++
//       }
//       q = p + 1
//       while (IndexSet.has(q)) {
//         q++
//       }
//       continue
//     }
//     if (changed[q] > temp) {
//       break
//     }
//     q++
//     while (IndexSet.has(q)) {
//       q++
//     }
//   }
//   return res.length === targetCount ? res : []
// }

function findOriginalArray(changed: number[]): number[] {
  changed = changed.sort((a, b) => a - b)
  const len = changed.length
  if (len % 2 !== 0 || len === 0) return []
  const helpMap = new Map<number, number>()
  const res: number[] = []
  let p = 0
  while (p < len) {
    const item = changed[p]
    const count = helpMap.get(item)
    if (count) {
      if (count === 1) {
        helpMap.delete(item)
      } else {
        helpMap.set(item, count - 1)
      }
    } else {
      helpMap.set(item * 2, (helpMap.get(item * 2) ?? 0) + 1)
      res.push(item)
    }
    p++
  }
  return helpMap.size ? [] :  res
}
/*
一个整数数组 original 可以转变成一个 双倍 数组 changed ，转变方式为将 original 中每个元素 值乘以 2 加入数组中，然后将所有元素 随机打乱 。
给你一个数组 changed ，如果 change 是 双倍 数组，那么请你返回 original数组，否则请返回空数组。original 的元素可以以 任意 顺序返回。

示例 1：
  [1,2,3,4,6,8]
  输入：changed = [1,3,4,2,6,8]
  输出：[1,3,4]
  解释：一个可能的 original 数组为 [1,3,4] :
  - 将 1 乘以 2 ，得到 1 * 2 = 2 。
  - 将 3 乘以 2 ，得到 3 * 2 = 6 。
  - 将 4 乘以 2 ，得到 4 * 2 = 8 。
  其他可能的原数组方案为 [4,3,1] 或者 [3,1,4] 。

示例 2：
  输入：changed = [6,3,0,1]
  输出：[]
  解释：changed 不是一个双倍数组。

示例 3：
  输入：changed = [1]
  输出：[]
  解释：changed 不是一个双倍数组。
*/

console.log(findOriginalArray([1, 3, 4, 2, 6, 8]))
console.log(findOriginalArray([6, 3, 0, 1]))
console.log(findOriginalArray([1]))
console.log(findOriginalArray([1, 2, 3, 2, 4, 6, 2, 4, 6, 4, 8, 12]))
console.log(findOriginalArray([4, 0, 3, 0]))
