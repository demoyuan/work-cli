import { get, post } from '~/http/request'
import qs from 'qs'
const apiRoot = process.env.apiRoot

export const login = (params: object) => post({ url: `${apiRoot}/login`, params: qs.stringify(params) })
export const logout = (params: object) => post({ url: `${apiRoot}/logout`, params: qs.stringify(params) })
