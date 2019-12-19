export default context => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        welcome: 'Welcome'
      })
    }, 1)
  })
}
