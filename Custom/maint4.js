var app = angular.module('indian_visa', ['ghiscoding.validation', 'pascalprecht.translate', 'ui.bootstrap']);

// Filter to trust HTML content
app.filter('sce', ['$sce', function ($sce) {
    return $sce.trustAsHtml;
}]);

// Language configuration
app.config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: basepath + '/locales/validation/',
        suffix: '.json'
    });

    // Define the default language for the app
    $translateProvider.preferredLanguage('en');
});

// Controller for visa form (just as an example, since HTML cannot be changed)
app.controller('VisaController', function ($scope) {
    // Example Visa Form Data
    $scope.visa = {
        name: '',
        email: '',
        phone: '',
        visaType: ''
    };
});
