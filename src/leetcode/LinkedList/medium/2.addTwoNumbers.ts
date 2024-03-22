/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// function addTwoNumbers(
//   l1: ListNode | null,
//   l2: ListNode | null
// ): ListNode | null {
//   const run = (
//     node1: ListNode | null | undefined,
//     node2: ListNode | null | undefined,
//     value: number
//   ): ListNode | null => {
//     if (!node1 && !node2) {
//       if (value) {
//         return new ListNode(1)
//       } else {
//         return null
//       }
//     }
//     const temp = (node1?.val || 0) + (node2?.val || 0) + value
//     return new ListNode(
//       temp % 10,
//       run(node1?.next, node2?.next, temp >= 10 ? 1 : 0)
//     )
//   }
//   return run(l1, l2, 0)
// }

// function addTwoNumbers(
//   l1: ListNode | null,
//   l2: ListNode | null
// ): ListNode | null {
//   const arr1 = [],
//     arr2 = []
//   while(l1){
//     arr1.push(l1.val)
//     l1 = l1.next
//   }
//   while(l2){
//     arr2.push(l2.val)
//     l2 = l2.next
//   }
//   const len = Math.max(arr1.length, arr2.length)
//   const arr:number[] = []
//   let temp = 0
//   for(let i = 0;i<len;i++){
//     temp = temp + (arr1[i] || 0) + (arr2[i] || 0)
//     arr.push(temp % 10)
//     temp = temp >= 10 ? 1 : 0
//   }
//   temp === 1 && arr.push(1)
//   let node = new ListNode(arr.pop())
//   while(arr.length){
//     node = new ListNode(arr.pop(),node)
//   }
//   return node
// }

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const sumArr: number[] = []
  let temp = 0,
    i = 0
  while (l1) {
    sumArr.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    const sum = temp + (sumArr[i] || 0) + l2.val
    sumArr[i] = sum % 10
    temp = sum >= 10 ? 1 : 0
    i++
    l2 = l2.next
  }
  for (const len = sumArr.length; i <= len; i++) {
    if (temp === 1) {
      const sum = (sumArr[i] || 0) + temp
      sumArr[i] = sum % 10
      temp = sum >= 10 ? 1 : 0
    } else {
      break
    }
  }
  let node: ListNode | null = null
  while (sumArr.length) {
    node = new ListNode(sumArr.pop(), node)
  }
  return node
}

console.log(
  addTwoNumbers({
    val: 2,
    next: {
      val: 4,
      next: {
        val: 9,
        next: null
      }
    }
  },{
    val: 5,
    next: {
      val: 6,
      next: {
        val: 4,
        next: {
          val: 9,
          next: null
        }
      }
    }
  })
)
// console.log(
//   addTwoNumbers({
//     val: 2,
//     next: {
//       val: 4,
//       next: {
//         val: 3,
//         next: null
//       }
//     }
//   },{
//     val: 5,
//     next: {
//       val: 6,
//       next: {
//         val: 4,
//         next: null
//       }
//     }
//   })
// )

// console.log(
//   addTwoNumbers(
//     {
//       val: 9,
//       next: {
//         val: 9,
//         next: {
//           val: 9,
//           next: {
//             val: 9,
//             next: {
//               val: 9,
//               next: {
//                 val: 9,
//                 next: {
//                   val: 9,
//                   next: null
//                 }
//               }
//             }
//           }
//         }
//       }
//     },
//     {
//       val: 9,
//       next: {
//         val: 9,
//         next: {
//           val: 9,
//           next: {
//             val: 9,
//             next: null
//           }
//         }
//       }
//     }
//   )
// )
