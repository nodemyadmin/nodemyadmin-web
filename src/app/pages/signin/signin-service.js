'use strict';

import angular from 'angular';

class SignInService {
  constructor($http, $q) {
    this.http = $http;
    this.deferred = $q.defer();
  };

  authenticate(authData) {
    console.log('Log: Authenticate Service');
    this.http({
      method: 'POST',
      url: '/api/v1/authenticate',
      data: authData
    }).then((response) => {
      console.log('Log: Success Callback');
      this.deferred.resolve(response);
    }, (response) => {
      console.log('Log: Error Callback');
      this.deferred.reject(response);
    });

    return this.deferred.promise;
  }
};

export default angular.module('service.signin', [])
  .service('SignInService', SignInService)
  .name;
