
var app = angular.module("recipeBook", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "app/home/home.html"
    }).when("/login", {
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"
    }).when("/signup", {

    }).when("/recipes", {
        templateUrl: "app/recipes/recipes.html",
        controller: "recipesCtrl"
    }).when("/recipe/:recipeId", {

    }).when("/new" , {

    }).otherwise({
        redirectTo: "/"
    })
})
