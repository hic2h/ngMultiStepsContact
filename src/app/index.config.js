(function() {
  'use strict';

  angular
    .module('ngMultiStepsContact')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
