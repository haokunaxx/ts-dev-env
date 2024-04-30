type CommonParams = {
  diff: number
  unit: number
  threshold: number
  text: string
}

type ShouldApply = (params: CommonParams) => boolean
type DisplayTextGetter = (params: CommonParams) => string

const strategyBuilder = (
  shouldApply: ShouldApply = ({ diff, threshold }) => diff < threshold,
  displayTextGetter: DisplayTextGetter = ({ diff, unit, text }) =>
    text.replace('$', `${Math.floor(diff / unit)}`)
) => {
  return (unit: number, threshold: number, text: string) => {
    const getCommonParams = (diff: number) => ({
      unit,
      threshold,
      text,
      diff
    })
    return {
      shouldApply: (diff: number) => shouldApply(getCommonParams(diff)),
      displayTextGetter: (diff: number) =>
        displayTextGetter(getCommonParams(diff))
    }
  }
}

const parseRelativeTimeStrategy = strategyBuilder()

const ONE_SECOND = 1000
const ONE_MINUTE = ONE_SECOND * 60
const ONE_HOUR = ONE_MINUTE * 60
const ONE_DAY = ONE_HOUR * 24
const ONE_MONTH = ONE_DAY * 30
const ONE_YEAR = ONE_DAY * 365

const defaultStrategies = [
  parseRelativeTimeStrategy(ONE_SECOND, 15 * ONE_SECOND, '刚刚'),
  parseRelativeTimeStrategy(ONE_SECOND, ONE_MINUTE, '$秒前'),
  parseRelativeTimeStrategy(ONE_MINUTE, ONE_HOUR, '$分钟前'),
  parseRelativeTimeStrategy(ONE_HOUR, ONE_DAY, '$小时前'),
  parseRelativeTimeStrategy(ONE_DAY, ONE_MONTH, '$天前'),
  parseRelativeTimeStrategy(ONE_MONTH, ONE_YEAR, '$个月前'),
  parseRelativeTimeStrategy(ONE_YEAR, Infinity, '$年前')
]

const anotherParseStrategyList = [
  parseRelativeTimeStrategy(1000, 60 * 1000, '$秒前'),
  parseRelativeTimeStrategy(60 * 1000, 60 * 60 * 1000, '$分钟前'),
  parseRelativeTimeStrategy(60 * 60 * 1000, 24 * 60 * 60 * 1000, '$小时前'),
  parseRelativeTimeStrategy(
    24 * 60 * 60 * 1000,
    30 * 24 * 60 * 60 * 1000,
    '$天前'
  ),
  parseRelativeTimeStrategy(
    30 * 24 * 60 * 60 * 1000,
    12 * 30 * 24 * 60 * 60 * 1000,
    '$月前'
  )
]

const parseRelativeTime = (
  timestamp: number,
  strategyList: ReturnType<
    typeof parseRelativeTimeStrategy
  >[] = defaultStrategies
) => {
  const nowTime = Date.now()
  const diff = nowTime - timestamp
  for (const strategy of strategyList) {
    if (strategy.shouldApply(diff)) {
      return strategy.displayTextGetter(diff)
    }
  }
  return '很久以前'
}

const now = Date.now()
console.log(parseRelativeTime(now - 8 * 1000)) // 刚刚
console.log(parseRelativeTime(now - 24 * 1000)) // 24秒前
console.log(parseRelativeTime(now - 24 * 60 * 1000)) // 24分钟前
console.log(parseRelativeTime(now - 8 * 60 * 60 * 1000)) //8小时前
console.log(parseRelativeTime(now - 24 * 24 * 60 * 60 * 1000)) // 24天前
console.log(parseRelativeTime(now - 8 * 30 * 24 * 60 * 60 * 1000)) //8个月前
console.log(parseRelativeTime(now - 24 * 30 * 24 * 60 * 60 * 1000)) //一年
console.log('----------')
console.log(parseRelativeTime(now - 8 * 1000, anotherParseStrategyList)) // 刚刚
console.log(parseRelativeTime(now - 24 * 1000, anotherParseStrategyList)) // 24秒前
console.log(parseRelativeTime(now - 24 * 60 * 1000, anotherParseStrategyList)) // 24分钟前
console.log(
  parseRelativeTime(now - 8 * 60 * 60 * 1000, anotherParseStrategyList)
) //8小时前
console.log(
  parseRelativeTime(now - 24 * 24 * 60 * 60 * 1000, anotherParseStrategyList)
) // 24天前
console.log(
  parseRelativeTime(
    now - 8 * 30 * 24 * 60 * 60 * 1000,
    anotherParseStrategyList
  )
) //8个月前
console.log(
  parseRelativeTime(
    now - 24 * 30 * 24 * 60 * 60 * 1000,
    anotherParseStrategyList
  )
) //一年
