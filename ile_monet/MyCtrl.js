{/*<h3><span class="glyphicon glyphicon-home" aria-hidden="true"></span><strong>Hello</strong></h3>

<div class="container" ng-controller="MyCtrl">


    <ul>
        <li>Moja liczba: {{liczba}}</td> 
        <li>Dwa: {{dwa}}</li>
        <li>Jeden: {{jeden}}</li>
        <li>Piec: {{piec}}</li>
    </ul>

<button type="submit" class="btn btn-danger" ng-click="check(17)">Check</button> 
<button type="submit" class="btn btn-info" ng-click="reset()">Reset</button> 

</div>*/}

app.controller('MyCtrl', function($scope,$location) {

    $scope.piec = 0;
    $scope.dwa = 0;
    $scope.jeden = 0;

    $scope.reset = function() {

        $scope.piec =  $scope.dwa =  $scope.jeden = 0; 
        $scope.liczba =""

    }

    $scope.check = function(liczba){
        $scope.liczba=liczba;
        $scope.piec = Math.floor(liczba/5);
        var pom = liczba%5
        $scope.dwa = Math.floor(pom/2);
        var pom2 = pom%2
        $scope.jeden = pom2;
    }


    //rekurencja

    var moneta = [ 5, 2, 1 ]
    var i = 0;
    var liczba = 48;

    var check = function(liczba){

        var pom = Math.floor(liczba/moneta[i]);
        console.log(moneta[i]+"jest tyle:"+ pom)
        liczba = liczba%moneta[i]
        if(i<moneta.length-1){
            i++;
            check(liczba);
        }
    }

    check(liczba);

});

