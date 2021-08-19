// localStorage
export function getLStorage(name) {
  return JSON.parse(localStorage.getItem(name))
}

export function setLStorage(name, data) {
  return localStorage.setItem(name, JSON.stringify(data))
}

export function removeLStorage(name) {
  return localStorage.removeItem(name)
}

export function getComputedStyle(el, key) {
  return el && el.currentStyle
    ? el.currentStyle[key]
    : window.getComputedStyle
    ? window.getComputedStyle(el, void 0).getPropertyValue(key)
    : el.style[key]
}

// 防抖
export function debounce(fn, wait) {
  let timer
  return function () {
    // let context = this // 注意 this 指向
    let args = arguments // arguments中存着e

    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}

// 节流（时间戳+定时器）
export function throttle(func, delay) {
  let timer = null
  let startTime = Date.now()
  return function () {
    let curTime = Date.now()
    let remaining = delay - (curTime - startTime)
    let context = this
    let args = arguments
    clearTimeout(timer)
    if (remaining <= 0) {
      func.apply(context, args)
      startTime = Date.now()
    } else {
      timer = setTimeout(func, remaining)
    }
  }
}
