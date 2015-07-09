 define(['filters/filters'], function(filters) {

   filters.filter('pageStartFilter', function() {

     return function(input, start) {
       return input.slice(parseInt(start));
     }

   });

 })