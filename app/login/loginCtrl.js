
app.controller("loginCtrl", function($scope, $location) {

    $scope.invalidLogin = false;

    $scope.login = function() {
        if ($scope.email === "nir@nir.com" && $scope.pwd === "123") {
            $location.path("/recipes");
        } else {
            $scope.invalidLogin = true;
        }
    }

})