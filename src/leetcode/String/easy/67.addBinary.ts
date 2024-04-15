// function addBinary(a: string, b: string): string {
//   return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
// };

function addBinary(a: string, b: string): string {
  let p = a.length - 1,
    q = b.length - 1
  let res = '',
    addon = 0
  while (p >= 0 || q >= 0) {
    const aVal = a[p] ? Number(a[p--]) : 0,
      bVal = b[q] ? Number(b[q--]) : 0
    let temp = aVal + bVal + addon
    res = (temp >= 2 ? temp - 2 : temp) + res
    addon = temp >= 2 ? 1 : 0
  }
  return addon === 1 ? '1' + res : res
}

console.log(addBinary('1010', '1011'))
