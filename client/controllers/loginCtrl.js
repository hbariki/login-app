app.controller('loginCtrl',function($scope,$location){
    $scope.invalidInfo = false;
    $scope.submit = function(formInvalid){
        if(!formInvalid) {
            //if form is valid
            if($scope.username === 'username' && $scope.password === 'password') {
                $location.path('/dashboard');

            }else {
                $scope.invalidInfo = true;
            }
        }
    };
});