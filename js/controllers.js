'use strict';

/* Controllers */

angular.module('ledCalculator.controllers', []).
    controller('HomeCtrl', ["$scope", function($scope) {

        $scope.vm = {
            nombreAmpoules: 1,
            puissanceOri: 60,
            puissanceLed: 7,
            prixKw: 0.086,

            usage: 6,

            coutActuel: coutActuel,
            coutLed: coutLed,
            economies: economies,
        };

        function coutActuel() {
            return $scope.vm.nombreAmpoules * $scope.vm.puissanceOri * $scope.vm.usage * 365 / 1000 * $scope.vm.prixKw;
        }

        function coutLed() {
            return $scope.vm.nombreAmpoules * $scope.vm.puissanceLed * $scope.vm.usage * 365 / 1000 * $scope.vm.prixKw;
        }

        function economies() {
            return coutActuel() - coutLed();
        }
    }]);