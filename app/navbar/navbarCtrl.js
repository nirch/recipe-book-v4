
app.controller("navbarCtrl", function($scope, userSrv) {

    $scope.isUserLoggedIn = function() {
        return userSrv.isLoggedIn();
    }

})