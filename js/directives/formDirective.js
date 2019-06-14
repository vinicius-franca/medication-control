angular.module("MedicationControl")
.directive("formDirective", function(){
    return {
        templateUrl: "view/FormDirective.html",
        restrict: "E",
        replace:true,        
        controller:'MedicationControlController',
        scope:{
            fields: "="
        }
    }
});
