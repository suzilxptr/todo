/**
 * Created by The BigBang on 8.4.2017.
 */

angular.module('todo-app')
    .controller('homeCtrl',function($scope,$uibModal,$http,CommonService){
        var vm=this;

        vm.tiles= CommonService.get(); //todoo list
        vm.propertyName='_id'; //default sort


        vm.delete=function(id,$index){
            CommonService.todoDelete(id);
            vm.tiles.value.splice($index,1);
        }


        vm.open = function (size, parentSelector) {
            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'addModal.html',
                controller: 'ModalInstanceController',
                size: size,
                appendTo: parentElem
            });

            modalInstance.result.then(function (tile) {
                vm.tiles.value.push(tile);
            }, function () {

            });
        }

        vm.currentSort=function(propertyName){
            vm.propertyName=propertyName;
        }


    });
