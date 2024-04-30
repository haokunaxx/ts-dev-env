// class ParseRelativeTimeStrategy {
//   constructor(
//     public unit: number,
//     public threshold: number,
//     public text: string
//   ) {}
//   shouldApply(diff: number): boolean {
//     return diff < this.threshold
//   }

//   getText(diff: number): string {
//     diff = Math.floor(diff / this.unit)
//     return this.text.replace('$', `${diff}`)
//   }
// }

// const myParseRelativeTimeStrategy = [
//   new ParseRelativeTimeStrategy(1000, 60 * 1000, '$秒前'),
//   new ParseRelativeTimeStrategy(60 * 1000, 60 * 60 * 1000, '$分钟前'),
//   new ParseRelativeTimeStrategy(60 * 60 * 1000, 24 * 60 * 60 * 1000, '$小时前'),
//   new ParseRelativeTimeStrategy(
//     24 * 60 * 60 * 1000,
//     30 * 24 * 60 * 60 * 1000,
//     '$天前'
//   ),
//   new ParseRelativeTimeStrategy(
//     30 * 24 * 60 * 60 * 1000,
//     12 * 30 * 24 * 60 * 60 * 1000,
//     '$月前'
//   )
// ]

// function parseRelativeTime(
//   timestamp: number,
//   strategyList: ParseRelativeTimeStrategy[] = myParseRelativeTimeStrategy
// ) {
//   const diff = Date.now() - timestamp
//   for (const strategy of strategyList) {
//     if (strategy.shouldApply(diff)) {
//       return strategy.getText(diff)
//     }
//   }
//   return '很久以前'
// }
// const now = Date.now()

// console.log(parseRelativeTime(now - 24 * 1000)) // 24秒前
// console.log(parseRelativeTime(now - 24 * 60 * 1000)) // 24分钟前
// console.log(parseRelativeTime(now - 8 * 60 * 60 * 1000)) //8小时前
// console.log(parseRelativeTime(now - 24 * 24 * 60 * 60 * 1000)) // 24天前
// console.log(parseRelativeTime(now - 8 * 30 * 24 * 60 * 60 * 1000)) //8个月前
