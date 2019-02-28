
app.factory("recipesSrv", function($http, $q, $log, userSrv) {

    function Recipe(plainRecipe) {
        this.id = plainRecipe.id;
        this.name = plainRecipe.name;
        this.description = plainRecipe.description;
        this.imgUrl = plainRecipe.imgUrl;
        this.ingredients = plainRecipe.ingredients;
        this.steps = plainRecipe.steps;
        this.duration = plainRecipe.duration;
        this.userId = plainRecipe.userId;
    }

    function getActiveUserRecipes() {
        var async = $q.defer();
        var recipes = [];
        var activeUserId = userSrv.getActiveUser().id;

        // getting all recipes from JSON and then pushing to the array only those that 
        // were created by the active user
        $http.get("app/model/data/recipes.json").then(function(res) {
            var jsonRecipes = res.data;
            for(var i = 0; i < jsonRecipes.length; i++) {
                if (jsonRecipes[i].userId === activeUserId) {
                    recipes.push(new Recipe(jsonRecipes[i]));
                }
            }
            async.resolve(recipes);
        }, function(err) {
            async.reject(err);
        })

        return async.promise;
    }

    return {
        getActiveUserRecipes: getActiveUserRecipes
    }

})