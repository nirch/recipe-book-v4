
app.factory("userSrv", function($http, $q) {

    var activeUser = null;

    function User(plainUser) {
        this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
    }

    function login(email, pwd) {
        var async = $q.defer();

        if (email === "nir@nir.com" && pwd === "123") {
            activeUser = new User({id: "1", fname: "Nir", lname: "Channes", email:"nir@nir.com"});
            async.resolve(activeUser);
        } else {
            async.reject();
        }

        return async.promise;
    }


    return {
        login: login
    }

});