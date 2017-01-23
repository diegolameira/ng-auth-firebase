'use strict';
(function() {

  angular.module('dl.ngAuthFirebase')
    .config(Config)

  /* @ngInject */
  function Config($httpProvider)
  {
    $httpProvider.interceptors.push(Interceptor401);

    // HTTP interceptor for 401..redirects to login

    /* @ngInject */
    function Interceptor401($q, $injector, $location, AuthConfig) {
      return {
        // This is the responseError interceptor
        responseError: function (rejection) {
          if (rejection.status === 401) {
            // Return a new promise
            return $location.url(AuthConfig.loginRoute());
          }

          /* If not a 401, do nothing with this error.
           * This is necessary to make a `responseError`
           * interceptor a no-op. */
          return $q.reject(rejection);
        }
      };
    }
  }

})();
