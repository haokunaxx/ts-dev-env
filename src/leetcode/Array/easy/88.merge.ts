// js数组方法
// const merge = (arr1: number[], m: number, arr2: number[], n: number): void => {
//   arr1.splice(m, arr1.length - m, ...arr2)
//   arr1.sort((a, b) => a - b)
// }

// 添加辅助数组
// const merge = (arr1: number[], m: number, arr2: number[], n: number): void => {
//   const helpArr = []
//   let p1 = 0,
//     p2 = 0
//   while (p1 < m || p2 < n) {
//     let temp
//     if (p1 === m) {
//       temp = arr2[p2++]
//     } else if (p2 === n) {
//       temp = arr1[p1++]
//     } else if (arr1[p1] < arr2[p2]) {
//       temp = arr1[p1++]
//     } else {
//       temp = arr2[p2++]
//     }
//     helpArr.push(temp)
//   }
//   for (let i = 0, len = helpArr.length; i < len; i++) {
//     arr1[i] = helpArr[i]
//   }
// }

// 逆向双指针
const merge = (arr1: number[], m: number, arr2: number[], n: number): void => {
  let cur = m + n - 1
  m--
  n--
  while (n >= 0 || m >= 0) {
    if (n < 0) {
      arr1[cur--] = arr1[m--]
    } else if (m < 0) {
      arr1[cur--] = arr2[n--]
    } else if (arr1[m] > arr2[n]) {
      arr1[cur--] = arr1[m--]
    } else {
      arr1[cur--] = arr2[n--]
    }
  }
}
