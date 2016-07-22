'use strict';

import angular from 'angular';

class SignInService {
  constructor($http, $q) {
    this.http = $http;
    this.q = $q;
  };

  authenticate(authData) {
    let deferred = this.q.defer();

    this.http({
      method: 'POST',
      url: '/api/v1/authenticate',
      data: authData
    }).then((response) => {
      deferred.resolve(response.data);
    }, (response) => {
      deferred.reject(response);
    });

    return deferred.promise;
  }
};

export default angular.module('service.signin', [])
  .service('SignInService', SignInService)
  .name;
