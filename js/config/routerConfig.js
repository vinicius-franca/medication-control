angular.module("MedicationControl").config(function($routeProvider){
    $routeProvider.when("/medications", {
        templateUrl: "view/medications.html",
        controller: "MedicationControlController"
    });
    $routeProvider.when("/new", {
        templateUrl: "view/newMedication.html",
        controller: "MedicationControlController"
    });    
	$routeProvider.when("/edit/:id", {
		templateUrl: "view/newMedication.html",
		controller: "MedicationControlController",
	});
    $routeProvider.otherwise({redirectTo: "/medications"});
});