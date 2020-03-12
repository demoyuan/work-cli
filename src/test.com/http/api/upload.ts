import * as api from './index'
import Main from '../main'

class Upload extends Main {
  constructor() {
    super()
  }

  public async uploadImage(params: any): Promise<any> {
    let fd = new FormData()
    fd.append('file', params.fileObj)
    fd.append('bucket', 'world')
    let { code, data } = await super.post(api.uploadFile, {}, {
      data: fd,
      responseType: 'json',
      headers: { 'Content-Type': 'multipart/form-data' },
      transformRequest: [(data: any) => data],
      hasToken: false
    })
    return { code, url: data ?? '' }
  }
}

export default new Upload()
