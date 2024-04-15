function generateParenthesis(n: number): string[] {
  let dp = ['()']
  for (let i = 2; i <= n; i++) {
    dp = Array.from(
      dp.reduce((prev, item) => {
        const itemArr = item.split('')
        for (let j = 0, len = itemArr.length; j < len; j++) {
          const temp = [...itemArr]
          temp.splice(j, 0, '()')
          prev.add(temp.join(''))
        }
        return prev
      }, new Set<string>())
    )
  }
  return dp
}

/*
示例 1：
  输入：n = 3
  输出：["((()))","(()())","(())()","()(())","()()()"]

示例 2：
  输入：n = 1
  输出：["()"]
*/
