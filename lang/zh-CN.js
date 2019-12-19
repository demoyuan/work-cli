export default context => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        welcome: '欢迎'
      })
    }, 1)
  })
}
