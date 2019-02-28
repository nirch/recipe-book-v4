
app.controller("recipesCtrl", function($scope, userSrv) {

    $scope.activeUser = userSrv.getActiveUser();

})