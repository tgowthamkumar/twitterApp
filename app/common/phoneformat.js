var formatPhone = function (input, country, phoneCode) {
    if (input.length == 10 && country == 'US') {
        //format it
        var firstThree = input.substring(0, 3);
        var secondThree = input.substring(3, 6);
        var lastFour = input.substring(6, 10);
        return phoneCode + "-" + firstThree + "-" + secondThree + "-" + lastFour;
    }
    if (input.length == 10 && country == 'IN') {
        //format it
        return phoneCode + "-" + input.substring(0, 5) + "-" + input.substring(5, 10);
    }
    return input

};

var filterFn = function () {
    return formatPhone;
};

angular.module('twitterApp')
    .filter('phoneformat', [filterFn])
