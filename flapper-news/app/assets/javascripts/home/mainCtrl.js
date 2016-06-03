angular.module('flapperNews')
.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
  $scope.test = 'Hello world!';
  $scope.posts = posts.posts;
  
  
  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }
    posts.posts.push(
      {
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        //Adding mock comments to test out route
        comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]
      });
          $scope.title = '';
          $scope.link = '';
          
  };
  
  $scope.upVote = function(post){
      // $scope.posts[idx].upvotes++;
    post.upvotes += 1;
  };
  
  $scope.downVote = function(post){
    post.upvotes -= 1;
  };
  
}]);