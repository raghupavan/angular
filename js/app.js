(function () {
  'use strict';

  angular.module('LunchCheck',[])
//  $LunchCheckController.$inject($scope)
.controller('LunchCheckController', Minified);


Minified.$inject=['$scope'];
function Minified($scope) {
$scope.name="";
$scope.message="";

$scope.checking=function (){

 var wd=calculate($scope.name);
 if(wd<=3){
   $scope.message="enjoy";
 }
 else{$scope.message="Too much!";}
 // $scope.message=wd;
 };
 function calculate(string){
    var words= string.split(",").length;

    return words;

  //   if(words.length > 3){
  //   return  $scope.message="Enjoy";
  //       }
  // else{ return $scope.message="heavy";}
};
};


})();
