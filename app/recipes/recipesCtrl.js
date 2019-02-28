
app.controller("recipesCtrl", function($scope, userSrv, $location) {

    if (!userSrv.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.activeUser = userSrv.getActiveUser();


    $scope.recipes = [
        {
            "id": "1",
            "name": "Shakshuka",
            "description": "Eggs with tomatos",
            "imgUrl": "https://static01.nyt.com/images/2014/09/02/dining/shakshuka/shakshuka-superJumbo-v2.jpg",
            "ingredients": "Eggs, Tomato, Onion",
            "steps": "Put eggs and then tomato",
            "duration": 15
        },
        {
            "id": "2",
            "name": "Shawarma",
            "description": "Turkey in pita",
            "imgUrl": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/2/28/0/ZB0505H_Chicken-Shawarma-with-Tomato-Cucumber-Relish-and-Tahini-Sauce_s4x3.jpg.rend.hgtvcom.616.462.suffix/1485881272706.jpeg",
            "ingredients": "Eggs, Tomato, Onion",
            "steps": "Put eggs and then tomato",
            "duration": 15
        }
    ]

})