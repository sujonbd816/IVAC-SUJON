app.factory('LanguageService', function($http){
    return {
        get: function(){
            return $http.get('https://cdn.jsdelivr.net/gh/sujonbd816/IVAC-SUJON@refs/heads/main/language%20.js'); // Replace with your desired URL
        }
    };
});
