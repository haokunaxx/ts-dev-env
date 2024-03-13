// function getRow(rowIndex: number): number[] {
//   return [...Array(rowIndex + 1)].reduce((prev: number[][], _, index) => {
//     if (index === 0) {
//       prev.push([1])
//       return prev
//     }
//     const prevItem = prev[prev.length - 1]
//     prev.push(
//       [...Array(index + 1)].map(
//         (_, idx) => (prevItem[idx - 1] || 0) + (prevItem[idx] || 0)
//         //如果要去掉 或判断，直接通过 for 循环从 [1, index)
//       )
//     )
//     return prev
//   }, [] as number[][])[rowIndex]
// };

// [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
function getRow(rowIndex: number): number[] {
  const arr = [...Array(rowIndex + 1)].fill(1)
  for(let i = 2; i <= rowIndex; i++){
    for(let j = i - 1; j > 0; j--){
      arr[j] = arr[j-1] + arr[j]
    }
  }
  return arr
};

console.log(getRow(3))
console.log(getRow(4))
console.log(getRow(0))
console.log(getRow(1))


// TODO: 线性递推：高数忘了
