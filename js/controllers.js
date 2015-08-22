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

dureeVieAmpoule: 1000,
dureeVieLED: 25000,
coutAmpoule: 0,
coutAmpouleLED: 0,
coutInstallationFixtures: 0,

coutActuel: coutActuel,
coutLed: coutLed,
economies: economies,

coutTotal: coutTotal,
coutTotalLed: coutTotalLed,
economiesTotales: economiesTotales,
        };

        function heuresParAn() {
            return $scope.vm.usage * 365;
        }

        function coutActuel() {
            return $scope.vm.nombreAmpoules * $scope.vm.puissanceOri * heuresParAn() / 1000 * $scope.vm.prixKw;
        }

        function coutLed() {
            return $scope.vm.nombreAmpoules * $scope.vm.puissanceLed * heuresParAn() / 1000 * $scope.vm.prixKw;
        }

        function economies() {
            return coutActuel() - coutLed();
        }

        function coutTotal() {
            return coutActuel() + heuresParAn() / $scope.vm.dureeVieAmpoule * $scope.vm.coutAmpoule;
        }

        function coutTotalLed() {
            return coutLed() + heuresParAn() / $scope.vm.dureeVieLED * $scope.vm.coutAmpouleLED;
        }

        function economiesTotales() {
            return coutTotal() - coutTotalLed();
        }
}]);
