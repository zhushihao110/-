export const quickSort = (arr, key) => {
  if (arr.length <= 1) { return arr }

  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)[0]
  const left = []
  const right = []

  for (let i = 0; i < arr.length; i++) {
    if (key) {
      if (arr[i][key] < pivot[key]) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    } else {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
  }

  return quickSort(left, key).concat([pivot], quickSort(right, key))
}

export const throttle = (fn, gapTime) => {
  if (gapTime === null || gapTime === undefined) {
    gapTime = 1500
  }

  let _lastTime = null // 返回新的函数
  return function () {
    let _nowTime = +new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, arguments)   // 将this和参数传给原函数
      _lastTime = _nowTime
    }
  }
}

export const compareVersion = (v1, v2) => {
  v1 = v1.split('.')
  v2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i])
    const num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}

export const rpx2px = (num, mediaWidth) => {
  return num * mediaWidth / 750
}

export const chunkString = (str, length) => {
  return str.match(new RegExp('.{1,' + length + '}', 'g')) || [str]
}
