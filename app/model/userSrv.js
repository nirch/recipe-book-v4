
app.factory("userSrv", function($http, $q, $log) {

    var activeUser = null;

    function User(plainUser) {
        this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
    }

    function login(email, pwd) {
        var async = $q.defer();

        $http.get("app/model/data/users.json").then(function(response) {
            var users = response.data;
            for (var i = 0; i < users.length; i++) {
                if (users[i].email === email && users[i].pwd === pwd) {
                    activeUser = new User(users[i]);
                    async.resolve(activeUser);

                }
            }

            if (!activeUser) {
                async.reject("");
            }
        }, function(error) {
            $log.error(error);
            async.reject(error);
        })

        // if (email === "nir@nir.com" && pwd === "123") {
        //     activeUser = new User({id: "1", fname: "Nir", lname: "Channes", email:"nir@nir.com"});
        //     async.resolve(activeUser);
        // } else {
        //     async.reject();
        // }

        return async.promise;
    }


    return {
        login: login
    }

});