const Client = require('ssh2-sftp-client')
const sftp = new Client()

module.exports = {
  uploadFnc: config => {
    sftp.connect(config)
      .then(() => {
        return sftp.uploadDir(config.localPath, config.remotePath)
      })
      .then(data => {
        console.log(data)
      })
      .then(() => {
        sftp.end()
      })
      .catch(err => {
        console.error(err.message)
      })
  }
}
