 define(['services/services'], function(services) {

   services.factory('getContentSvc', ['$http', '$q',
     function($http, $q) {
       var svc = {
         getContent: function() {
           var deferred = $q.defer();

           $http.get('app/data/Content.json').success(function(data) {
             !!data && data.response && data.response.results && data.response.results.result && deferred.resolve(data) || deferred.reject('No data received.');
           }).error(function(err, status, headers, config) {
             deferred.reject({
               error: err,
               status: status
             });
           });

           return deferred.promise;
         }
       };

       return svc;
     }
   ]);
 });