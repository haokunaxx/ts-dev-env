/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length <= 1) {
    return nums[0] !== undefined ? new TreeNode(nums[0]) : null
  }
  const i = nums.length >> 1
  return new TreeNode(
    nums[i],
    sortedArrayToBST(nums.slice(0, i)),
    sortedArrayToBST(nums.slice(i + 1))
  )
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))
console.log(sortedArrayToBST([0]))

