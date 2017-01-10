let PortalCtrl = function ($scope, SndsService, $rootScope, $window) {
  let vm = $scope;
  vm.user = $rootScope.user;
  vm.now = new Date();

  vm.doLogout = function () {
    if (ENVIRONMENT == 'development') {
      $window.location.href = 'http://ssosit.cnsuning.com/ids/logout?service=http://sndssit.cnsuning.com:8181/'
    } else if (ENVIRONMENT == 'sit') {
      $window.location.href = 'http://ssosit.cnsuning.com/ids/logout?service=http://sndssit.cnsuning.com/'
    } else {
      $window.location.href = 'http://sso.cnsuning.com/ids/logout?service=http://snds.cnsuning.com/'
    }
  }
}

PortalCtrl.$inject = ['$scope', 'SndsService', '$rootScope', '$window'];
export default app => app.controller('PortalCtrl', PortalCtrl);
