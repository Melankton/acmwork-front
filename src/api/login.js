import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: 'api/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
export function getVjudgeInfo(username, name) {
  return request({
    url: 'api/spider/vjudge',
    method: 'post',
    data: {
      username,
      name
    }
  })
}

export function saveUserInfo(username, password, email) {
  return request({
    url: 'api/user/saveUserInfo',
    method: 'post',
    data: {
      username,
      password,
      email
    }
  })
}

export function register(username, password, email) {
  return request({
    url: 'api/user/register',
    method: 'post',
    data: {
      username,
      password,
      email
    }
  })
}

export function vjudgeBind(vjudge, username) {
  return request({
    url: 'api/spider/vjudgebind',
    method: 'get',
    params: { vjudge, username }
  })
}

export function testVjudge(vjudge) {
  return request({
    url: 'api/spider/testvjudge',
    method: 'get',
    params: { vjudge }
  })
}

export function getInfo(token) {
  return request({
    url: 'api/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: 'api/user/logout',
    method: 'post'
  })
}
