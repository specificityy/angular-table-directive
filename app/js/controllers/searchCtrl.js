define(['controllers/controllers'], function(controllers) {

  controllers.controller('searchCtrl', ['$scope', '$location', 'getContentSvc',
    function($scope, $location, getContentSvc) {
      function init() {
        var promiseContent = getContentSvc.getContent();

        promiseContent.then(function onContentSuccess(data) {
          $scope.data = data.response.results.result;
          $scope.pageLoaded = true;
        }, function onContentError(data) {
          $scope.error = data instanceof Object ? data.err : data;
        });
      }

      $scope.viewDetails = function(item) {
        getContentSvc.currentItem = item;
        $location.path('/details');
      }

      init();
    }
  ]);
});