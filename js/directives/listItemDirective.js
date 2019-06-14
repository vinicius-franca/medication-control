angular.module("MedicationControl")
.directive("list", function(){
    return {
        templateUrl: "view/list.html",
        restrict: "E",
        replace:true,
        controller:'MedicationControlController',
        scope:{
            items: "=",
            isSelected: "="
        },
        bindController: true,        
        link: function(scope, element, attrs, ctrl){
            let listItems = scope.items;
            scope.deleteMedication = function(i){                
                delete listItems[i];
                localStorage.model = JSON.stringify(listItems);
            }            
            scope.increment = function(i){                
                listItems[i].quantity += 1;
                localStorage.model = JSON.stringify(listItems);
            } 
            scope.decrement = function(i){                
                listItems[i].quantity -= 1;
                localStorage.model = JSON.stringify(listItems);
            }
        }
    }
});
