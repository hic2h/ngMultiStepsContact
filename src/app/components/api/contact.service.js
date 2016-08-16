(function () {
  'use strict';

  angular
    .module('ngMultiStepsContact')
    .factory('contactService', function ($http, $q, apiBaseUrl) {
      return {
        submit: function (option) {
          option = option || {};
          return $http.post(apiBaseUrl + '/contact', option);
        }
      };
    });
})();
