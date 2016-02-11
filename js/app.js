angular.module("ejemplo", [])  //declaras el modulo ejemplo
/*
.controller("MiControlador", [ "$scope", function($scope){
  $scope.nombre="Carlos";
  function imprimir( ejemploParametro ){
    alert("Hola "+$scope.nombre);
    console.log( ejemploParametro );
  }
  $scope.imprimir=imprimir;
}]);
*/

.controller("Mi2ctrl", Mi2ctrl);

Mi2ctrl.$inject=[];

function Mi2ctrl(){
  var vm=this;

  vm.nombre; // variable del valor del input

  vm.persona = {
    nombre: "Carlos",
    edad: 25,
  };

  vm.lista=[ { valor: 1 }, { valor: 1 }, { valor: 101 }, { valor: 32 }, { valor: 4 } ];

  function imprimir( ejemploParametro ){
    vm.persona.nombre = vm.nombre;
    alert("Hola " + vm.persona.nombre);
    console.log( ejemploParametro );
  }

  vm.imprimir=imprimir;

}
