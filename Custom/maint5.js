var app = angular.module('indian_visa', ['vcRecaptcha', 'ghiscoding.validation', 'pascalprecht.translate', 'ui.bootstrap']);

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

// Controller to disable vcRecaptcha functionality
app.controller('VisaController', function($scope) {
    // Disable reCAPTCHA functionality
    $scope.onRecaptchaSuccess = function() {
        // Do nothing to disable reCAPTCHA validation
    };

    $scope.onRecaptchaError = function() {
        // Do nothing to disable reCAPTCHA error handling
    };
});
