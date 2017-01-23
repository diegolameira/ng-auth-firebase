'use strict';
(function(){

  angular.module('dl.ngAuthFirebase.signin')
    .component('signinForm', {
      templateUrl: 'dl.ngAuthFirebase/signin/form/signinForm.tpl.html',
      controller: Controller,
      controllerAs: 'vm',
    })

  /* @ngInject */
  function Controller($scope, AuthConfig)
  {

    this.signin = signin;
    this.signinWith = signinWith;

    function signin(credentials)
    {
      // TODO
    }

    function signinWith(service)
    {
      // TODO
    }

  }

})();
