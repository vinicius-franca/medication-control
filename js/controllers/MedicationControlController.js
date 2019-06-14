angular.module("MedicationControl").controller("MedicationControlController", function($scope, $location, $routeParams){
    $scope.app = "Medication Control";
    $scope.formFields = [
        {type: 'text', model:'name', label: 'Nome', required: true, data: ""},
        {type: 'select', model: 'unitMeasurement', label: 'Unidade de medida', required: true, options: [{label:'mL'}, {label:'mg'}], data: ""},
        {type: 'number', model: 'quantity', label: 'Quantidade', required: false, data: ""},
        {type: 'textarea', model: 'orientation', label: 'Orientação', required: true, data: ""}
    ];
    
    if(localStorage.model){
        $scope.listItems = JSON.parse(localStorage.model);
    }
    else { 
        $scope.listItems = [
            { 
                name: "Dipirona Sódica",
                unitMeasurement: {label: "mL"},
                orientation: 'Tempor incididunt irure aute officia ut irure nulla in voluptate enim id laborum consectetur.', 
                quantity: 15
            },
            { 
                name: "Acetaminophen",
                unitMeasurement: {label: "mg"},
                orientation: 'Acetaminophen is used to treat mild to moderate and pain, to treat moderate to severe pain in conjunction with opiates, or to reduce fever. Common conditions that acetaminophen treats include headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.', 
                quantity: 23
            },
            { 
                name: "Amoxicillin",
                unitMeasurement: {label: "mL"},
                orientation: 'Amoxicillin is used to treat many different types of infection caused by bacteria, such as tonsillitis, bronchitis, pneumonia, gonorrhea, and infections of the ear, nose, throat, skin, or urinary tract.', 
                quantity: 49
            },
        ];
    }
    $scope.onSelect = function(index, isSelected){
        if (isSelected){
            $scope.selected = index;
        }
        else{
            $scope.selected = null;
        }
    }
    $scope.addMedication = function(item){
        let obj = {};
        item.map((str) => {
            obj[str.model] = str.data;
        });
        $scope.listItems.push(angular.copy(obj));
        delete $scope.item;        
        localStorage.model = JSON.stringify($scope.listItems);
        $scope.newMedicationForm.$setPristine();
        $location.path("/medications");
    };
    $scope.updateMedication = function(item){
        let obj = {};
        item.map((str) => {
            obj[str.model] = str.data;
        });
        $scope.listItems[$routeParams.id] = obj;
        delete $scope.item;        
        localStorage.model = JSON.stringify($scope.listItems);
        $location.path("/medications");
    };
    
    var init = function(){
        if($routeParams.id){
            $scope.edit = true;
            $scope.item = $scope.listItems[$routeParams.id];
            $scope.formFields.forEach(field => {
                Object.getOwnPropertyNames($scope.item).forEach(function(val, idx, array) {
                    if (field.model === val){
                        field.data = $scope.item[val];
                    }
                });
            });                        
        }      
    }
    init();
});