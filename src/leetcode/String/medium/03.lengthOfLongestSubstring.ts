//cSpell:ignore abcabcbb,pwwkew,pwke

// function lengthOfLongestSubstring(s: string): number {
//     const len = s.length
//     let p = 0
//     let size = 0
//     while(p < len && p + size < len){
//       const temp = s.slice(p, p + size + 1)
//       if(!isContainsDuplicate(temp)){
//         size++
//       }else{
//         p++
//       }
//     }
//     return size
// };

// function isContainsDuplicate(str: string){
//   if(str.length === 1)return false;
//   return new Set(str.split('')).size !==  str.length
// }

// 滑动窗口
function lengthOfLongestSubstring(s: string): number {
  const len = s.length
  const helpSet = new Set<string>()
  let size = 0
  let j = 0
  for(let i = 0; i < len;){
    if(helpSet.has(s[i])){
      while(helpSet.has(s[i])){
        helpSet.delete(s[j++])
      }
    }else{
      helpSet.add(s[i])
      size = Math.max(helpSet.size, size)
      i++
    }
  }
  return size
};


/*
示例 1:
  输入: s = "abcabcbb"
  输出: 3 
  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:
  输入: s = "bbbbb"
  输出: 1
  解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:
  输入: s = "pwwkew"
  输出: 3
  解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
*/


console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))