function findSubstring(s: string, words: string[]): number[] {
  const helpMap = words.reduce((prev, word) => {
    prev[word] = (prev[word] || 0) + 1
    return prev
  }, {} as Record<string, number>)
  const res: number[] = []
  const wordItemLen = words[0].length,
    wordsStringLen = wordItemLen * words.length,
    sLen = s.length
  console.log(helpMap)
  for (let i = 0; i < sLen - wordsStringLen; i++) {
    const curStringWordsObj = {} as Record<string, number>
    // const str = s.slice(i, wordsStringLen)
    let j = i
    for (; j <= i + wordsStringLen; j += wordItemLen) {
      const item = s.slice(j, j+wordItemLen)
      // console.log(item, helpMap[item])
      if (!helpMap[item]) {
        break
      }
      curStringWordsObj[item] = (curStringWordsObj[item] || 0) + 1
    }

    console.log(i, curStringWordsObj)
    if (j === i + wordsStringLen) {
      let temp = true
      for (let key in helpMap) {
        if (
          !curStringWordsObj[key] ||
          helpMap[key] !== curStringWordsObj[key]
        ) {
          temp = false
          break
        }
      }
      temp && res.push(i)
    }
  }
  return res
}

// console.log(findSubstring('barfoothefoobarman', ['foo', 'bar'])) //[0,9]
// console.log(
//   findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])
// ) //[]
console.log(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the'])) //[6,9,12]
