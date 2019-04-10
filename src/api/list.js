import request from '@/utils/request'

export function getList(username) {
  return request({
    url: 'api/spider/getList',
    method: 'get',
    params: { username }
  })
}
export function getListTree(username) {
  return request({
    url: 'api/spider/getTreeList',
    method: 'get',
    params: { username }
  })
}
