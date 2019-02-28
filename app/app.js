
var app = angular.module("recipeBook", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "app/home/home.html"
    }).when("/login", {

    }).when("/signup", {

    }).when("/recipes", {

    }).when("/recipe/:recipeId", {

    }).when("/new" , {

    }).otherwise({
        redirectTo: "/"
    })
})
