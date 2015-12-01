githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var searchResource = $resource('https://api.github.com/search/users');

  var self = this;

  self.searchResult = undefined;

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      {q: self.searchTerm},
      {access_token: '284c888df3ca4478d1840055d8d7f3cc091902bf'}
    );
    console.log(self.searchResult);
  };

}]);
