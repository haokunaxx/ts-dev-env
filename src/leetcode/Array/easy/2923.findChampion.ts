// function findChampion(grid: number[][]): number {
//   return grid
//     .sort(
//       (a, b) =>
//         a.filter((item) => item === 1).length -
//         b.filter((item) => item === 1).length
//     )[0]
//     .indexOf(0)
// }

function findChampion(grid: number[][]): number {
  let index = -1
  const reg = /^(1*)0(1*)$/
  for (let i = 0, len = grid.length; i < len; i++) {
    if (reg.test(grid[i].join(''))) {
      index = i
      break
    }
  }
  return index
}
