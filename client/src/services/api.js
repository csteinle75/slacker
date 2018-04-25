import axios from 'axios'

const instance = axios.create()

instance.tokenPath = '/token'
instance.registerPath = '/register'
instance.token = window.localStorage.getItem('token') || null

instance.new = function(url = '/') {
  this.defaults.baseURL = url

  if (this.token) {
    this.tokenInterceptor = this.interceptors.request.use(config => {
      config.headers['Authorization'] = 'Bearer ' + this.token
      return config
    })
  }
}

instance.setTokenPath = function(path) {
  this.tokenPath = path
}

instance.getTokenPath = function() {
  return this.tokenPath
}

instance.setRegisterPath = function(path) {
  this.registerPath = path
}

instance.getRegisterPath = function() {
  return this.registerPath
}

instance.login = function (username, password) {
  return this.post(this.getTokenPath(), {username, password})
    .then(resp => {
      window.localStorage.setItem('token', resp.data.token)
      

      this.tokenInterceptor = this.interceptors.request.use(config => {
        config.headers['Authorization'] = 'Bearer ' + resp.data.token
        return config
      })
    })
}

instance.logout = function() {
  this.token = null
  this.interceptors.request.eject(this.tokenInterceptor)
  this.interceptors.request.eject(this.registerInterceptor)
  window.localStorage.removeItem('token')
}

instance.register = function (username, password) {
  return this.post(this.getRegisterPath(), {username, password})
    .then(resp => {
      window.localStorage.setItem('token', resp.data.token)
      this.registerInterceptor = this.interceptors.request.use(config => {
        config.headers['Authorization'] = 'Bearer ' + resp.data.token
        return config
      })
    })
}

export default instance