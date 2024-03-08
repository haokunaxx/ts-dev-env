const box = document.querySelector('.box');

const getPadding = (el) => {
  const style = window.getComputedStyle(el, null)
  const paddingLeft = Number.parseInt(style.paddingLeft, 10) || 0
  const paddingRight = Number.parseInt(style.paddingRight, 10) || 0
  const paddingTop = Number.parseInt(style.paddingTop, 10) || 0
  const paddingBottom = Number.parseInt(style.paddingBottom, 10) || 0
  return {
    pLeft: paddingLeft,
    pRight: paddingRight,
    pTop: paddingTop,
    pBottom: paddingBottom,
  }
}
box.addEventListener('animationiteration', function () {
  const event = new CustomEvent("resize");
  box.dispatchEvent(event);
})
document.body.append(box.childNodes.length)
const checkEllipsis = () => {
  const range = document.createRange();
  range.setStart(box, 0)
  range.setEnd(box, box.childNodes.length)
  console.log(range)
  window.getSelection().addRange(range);
  const rangeWidth = range.getBoundingClientRect().width
  const rangeHeight = range.getBoundingClientRect().height
  const { pLeft, pRight, pTop, pBottom } = getPadding(box)
  console.log(rangeWidth, rangeHeight)
  console.log(pLeft, pRight, pTop, pBottom)
  const horizontalPadding = pLeft + pRight
  const verticalPadding = pTop + pBottom
  if (
    rangeWidth + horizontalPadding > box.offsetWidth ||
    rangeHeight + verticalPadding > box.offsetHeight ||
    range.scrollWidth > box.offsetWidth
  ) {
    result.textContent = '计算结果：存在省略号'
  } else {
    result.textContent = '计算结果：容器宽度足够，没有省略号了'
  }
}

checkEllipsis()
box.addEventListener('resize', checkEllipsis)