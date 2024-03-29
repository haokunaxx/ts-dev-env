/* cSpell:ignore PAYPALISHIRING,PINALSIGYAHRPI */
function convert(s: string, numRows: number): string {
  if (numRows === 1) return s
  let reverse = false
  let arr: string[][] = [...Array(numRows)].map((_) => [])
  let i = 0,
    j = 0
  const len = s.length
  let res = ''
  while (i < len) {
    arr[j].push(s[i++])
    if (j === 0) {
      reverse = false
    } else if (j === numRows - 1) {
      reverse = true
    }
    reverse ? j-- : j++
  }
  for (let p = 0; p < numRows; p++) {
    res += arr[p].join('')
  }
  return res
}

/*
示例 2：
  输入：s = "PAYPALISHIRING", numRows = 4
  输出："PINALSIGYAHRPI"
解释：
  P     I    N
  A   L S  I G
  Y A   H R
  P     I
*/

/*
  2  (0,2,4）
  3  (0,4,8)
  4  (0,6,12)
  5  (0,8,16)

  1       2      3
  P     I      N
  A   L   S  I   G
  Y A     H R
  P       I

*/
