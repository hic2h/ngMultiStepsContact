(function() {
  'use strict';

  angular
    .module('ngMultiStepsContact')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(contactService) {
    var vm = this;

    vm.submitContact = function(){

      var options = {};
      options.name = vm.name || '';
      options.email = vm.email || '';
      options.message = vm.message || '';

      contactService.submit(options)
        .success(function (response) {
          console.log(response);
          if(response === 'OK') vm.step = 'success';
          else vm.error = response
        })
        .error(function (response) {
          vm.error = response

        })
    }

    vm.reset = function(){
      vm.name = '';
      vm.email = '';
      vm.message = '';

      vm.step = 'name';
    };
  }
})();
