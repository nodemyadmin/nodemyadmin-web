import angular from 'angular';

class AuthService {
  constructor($cookies) {
    this.cookieStore = $cookies;
  };

  getCredentials() {
    if(this.cookieStore.get('authenticate')) {
      return true;
    }
  }
};

export default angular.module('service.auth', [])
  .service('AuthService', AuthService)
  .name;
