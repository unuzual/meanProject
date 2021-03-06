// public/js/controllers/MainCtrl.js
angular.module('InserirCtrl', []).controller('InserirController',function($http,$route,$scope,$routeParams,$rootScope) {

	$rootScope.getLogged = function(){
		$http.get("/api/logged").success(function(response){
			$rootScope.user=response;

			if($rootScope.user.logged)
				$rootScope.logged=true;

			else
				$rootScope.logged=false;

		});
	}

	$rootScope.logout = function(){
		$http.get("/api/logout").success(function(response){
			$route.reload();
		});	
	}  

	$rootScope.getLogged();

	$http.get("/api/artistas/"+$routeParams.nomeCantor).success(function(response){
			$scope.Cantor = response;
	});

	$http.get("/api/albums/"+$routeParams.nomeCantor).success(function(response){
			$scope.AlbumsCantor = response;
	});

	$http.get("/api/generos/").success(function(response){
			$scope.Generos = response;
	});

});
