export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const waitTimer = (
  loops: number,
  callback?: ((n: number) => void) | null,
  waitInterval = 1000
) => {
  return new Promise((resolve) => {
    let i = loops
    const interval = setInterval(() => {
      i -= 1
      callback && callback(i)
      if (i <= 0) {
        resolve(true)
        clearInterval(interval)
      }
    }, waitInterval)
  })
}
