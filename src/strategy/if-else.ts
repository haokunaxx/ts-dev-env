//策略模式从一个将时间戳转换成相对时间的需求开始
function _parseRelativeTime(timestamp: number) {
  const now = Date.now()
  const diff = now - timestamp
  let temp: number
  if (diff < 60 * 1000) {
    //小于 60s
    const temp = Math.floor(diff / 1000)
    return `${temp}秒前`
  } else if (diff < 60 * 60 * 1000) {
    //小于 60 分钟
    temp = Math.floor(diff / (60 * 1000))
    return `${temp}分钟前`
  } else if (diff < 24 * 60 * 60 * 1000) {
    //小于 24 小时
    temp = Math.floor(diff / (60 * 60 * 1000))
    return `${temp}小时前`
  } else if (diff < 30 * 24 * 60 * 60 * 1000) {
    //小于一个月
    temp = Math.floor(diff / (24 * 60 * 60 * 1000))
    return `${temp}天前`
  } else if (diff < 12 * 30 * 24 * 60 * 60 * 1000) {
    //小于一年
    temp = Math.floor(diff / (30 * 24 * 60 * 60 * 1000))
    return `${temp}月前`
  }
  return '很久之前'
}

// const now = Date.now()
// console.log(parseRelativeTime(now - 24 * 1000)) // 24秒前
// console.log(parseRelativeTime(now - 24 * 60 * 1000)) // 24分钟前
// console.log(parseRelativeTime(now - 8 * 60 * 60 * 1000)) //8小时前
// console.log(parseRelativeTime(now - 24 * 24 * 60 * 60 * 1000)) // 24天前
// console.log(parseRelativeTime(now - 8 * 30 * 24 * 60 * 60 * 1000)) //8个月前


//这样转换就固定了，这个方法也仅限于上面的一些条件