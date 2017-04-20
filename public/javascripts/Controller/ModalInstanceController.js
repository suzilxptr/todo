/**
 * Created by The BigBang on 8.4.2017.
 */



angular.module('todo-app')

    .controller('ModalInstanceController',function ($scope,$uibModal,$uibModalInstance,$http,CommonService) {

        $scope.open = function() {
            $scope.popup.opened = true;
        };

        $scope.popup = {
            opened: false
        };

        $scope.ok = function (todo) {
            if(todo.date && todo.description && todo.title){
                var obj=  CommonService.add(todo);
                $uibModalInstance.close(obj);
            }
            else{
                $scope.empty=true;
            }

        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        $scope.setDate = function(year, month, day) {
            $scope.dt = new Date(year, month, day);
        };


        $scope.date=function(){
            return new Date();
        }
    });