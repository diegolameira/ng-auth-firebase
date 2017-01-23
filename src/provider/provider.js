'use strict';
(function() {

  angular.module('dl.ngAuthFirebase')
    .provider('AuthConfig', Provider)

  /* @ngInject */
  function Provider()
  {
    var loginRoute = '/login';

    return {
      setLoginRoute: setLoginRoute,
      setFirebaseAPI: setFirebaseAPI,
      $get: {
        loginRoute: getLoginRoute,
      }
    }

    function setLoginRoute(url)
    {
      loginRoute = url;
    }

    function setFirebaseAPI()
    {
      // TODO
    }

    function getLoginRoute()
    {
      return loginRoute;
    }

  }

})();
