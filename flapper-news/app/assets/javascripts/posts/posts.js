angular.module('flapperNews')
.factory('posts', [function(){
  var o = {
    posts: [
    {id: 1, title: 'post 1', upvotes: 5, comments: []},
    {id: 2, title: 'post 2', upvotes: 2, comments: []},
    {id: 3, title: 'post 3', upvotes: 15, comments: []},
    {id: 4, title: 'post 4', upvotes: 9, comments: []},
    {id: 5, title: 'post 5', upvotes: 4, comments: []}
    ]};
    
  return o; //<----- it was returning the wrong thing.
}]);