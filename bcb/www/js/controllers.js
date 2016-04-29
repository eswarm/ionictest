angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('VenueCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('AboutCtrl', function($scope, $stateParams, AppService) {
    //$scope.data = AppService.getData();
})

.controller('AgendaCtrl', function($scope, AppService, $http) {

    $scope.data = AppService.getData();

    $http.get('https://barcampbangalore.org/bcb/schadmin/android.json')
    .then(
        function success(response) {
            $scope.data = response.data.slots;
        },
        function failed(response) {
            console.log(response.data.slots);
        }
    );
});
