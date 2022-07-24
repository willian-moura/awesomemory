export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const waitTimer = (seconds: number, callback?: (n: number) => void) => {
  return new Promise((resolve) => {
    let i = seconds
    const interval = setInterval(() => {
      i -= 1
      callback && callback(i)
      if (i <= 0) {
        resolve(true)
        clearInterval(interval)
      }
    }, 1000)
  })
}
