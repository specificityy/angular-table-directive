define(['controllers/controllers'], function(controllers) {

  controllers.controller('detailsCtrl', ['$scope', '$location', 'getContentSvc',
    function($scope, $location, getContentSvc) {
      function init() {

        if (!getContentSvc.currentItem) {
          $scope.goBack();
          return;
        }

        $scope.data = getContentSvc.currentItem.content.resource;
        $scope.showStandards = $scope.data.standards && $scope.data.standards.standard && $scope.data.standards.standard.length > 0;
      }

      $scope.goBack = function() {
        $location.path('/search');
      }

      init();
    }
  ]);
});