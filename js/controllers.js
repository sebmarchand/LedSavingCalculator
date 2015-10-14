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

    dureeVieAmpoule: 2000,
    dureeVieLED: 25000,
    coutAmpoule: 1,
    coutAmpouleLED: 0,
    coutInstallationFixtures: 0,

    coutActuel: coutActuel,
    coutLed: coutLed,
    economies: economies,

    coutTotal: coutTotal,
    coutTotalLed: coutTotalLed,
    economiesTotales: economiesTotales,
    calcul_roi: calcul_roi,
  };

  function heuresParAn() {
    return $scope.vm.usage * 365;
  }

  function coutActuel() {
    return $scope.vm.nombreAmpoules * $scope.vm.puissanceOri *
      heuresParAn() / 1000 * $scope.vm.prixKw;
  }

  function coutLed() {
    return $scope.vm.nombreAmpoules * $scope.vm.puissanceLed *
      heuresParAn() / 1000 * $scope.vm.prixKw;
  }

  function economies() {
    return coutActuel() - coutLed();
  }

  function coutTotal() {
    return coutActuel() + heuresParAn() / $scope.vm.dureeVieAmpoule *
      $scope.vm.coutAmpoule;
  }

  function coutTotalLed() {
    return coutLed() + heuresParAn() / $scope.vm.dureeVieLED * $scope.vm.coutAmpouleLED;
  }

  function economiesTotales() {
    return coutTotal() - coutTotalLed();
  }

  function calcul_roi() {
    var per_second = economies() / 365 / 24 / 60 / 60;
    var switch_cost = ($scope.vm.coutInstallationFixtures + $scope.vm.coutAmpouleLED) *
      $scope.vm.nombreAmpoules;
    var seconds = switch_cost / per_second
    var minutes = Math.floor(seconds / 60)
    seconds -= minutes * 60
    var heures = Math.floor(minutes / 60)
    minutes -= heures * 60
    var jours = Math.floor(heures / 24)
    heures -= jours * 24
    var mois = Math.floor(jours / 30.4)
    jours -= jours * 30.4
    return mois;
  }
}]);