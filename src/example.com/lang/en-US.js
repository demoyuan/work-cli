export default () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        welcome: 'Welcome'
      })
    }, 1)
  })
}
