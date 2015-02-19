define(['angular', 'directives/directives'], function(angular, directives) {

  directives.directive('searchTable',
    function() {
      return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        scope: {
          content: '=',
          labels: '=',
          onRowClick: '&'
        },
        templateUrl: 'app/partials/directives/search-table.html',

        link: function(scope, element, attrs) {

          function init() {
            scope.keys = Object.keys(scope.labels).sort();
            scope.currentPage = 0;
            scope.pageSize = 5;

            scope.reverse = true;
            scope.sortTable(0);
            scope.data = {};
          }


          scope.numberOfPages = function() {
            return Math.ceil((scope.filtered && scope.filtered.length || scope.content.length) / scope.pageSize);
          }

          scope.changePage = function(increment) {
            // css property pointer-events: none; tend not to work on Firefox so that's why this line is here
            if ((scope.currentPage === 0 && increment < 0) || (scope.currentPage === scope.numberOfPages() - 1 && increment > 0)) return;

            scope.currentPage += increment;
          }

          scope.sortTable = function(index) {
            scope.predicate = scope.keys[index];
            scope.reverse = !scope.reverse;
          }

          scope.showSortCaret = function(index) {
            return scope.predicate == scope.keys[index];
          }

          scope.selectItem = function(item, isClickable) {
            if (!scope.getClickable(isClickable)) return;

            scope.onRowClick({
              item: item
            });
          }

          scope.getClickable = function(item) {
            if (item === undefined) return;
            var prop = attrs.clickableProp;
            return !!item[prop] && item[prop] == true || /true/i.test(item[prop]);
          }

          scope.filterRows = function(item) {
            if (!scope.data.searchText) return true;

            for (var i = 0; i < scope.keys.length; i++) {
              var result = item.content.resource[scope.keys[i]].search(new RegExp(scope.data.searchText, "i"));
              if (result > -1) {
                return true;
                break;
              }
            };

            if (scope.filtered && scope.filtered.length < scope.pageSize && scope.currentPage > 0) {
              scope.changePage(-1);
            }

            return false;
          }

          scope.showCell = function(item) {
            return !!scope.labels[item];
          }

          scope.customOrderBy = function(item) {
            return item.content.resource[scope.predicate];
          }

          init();
        }


      };
    });
});