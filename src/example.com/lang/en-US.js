export default () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        welcome: 'Welcome',
        hello: 'Hello'
      })
    }, 1)
  })
}
