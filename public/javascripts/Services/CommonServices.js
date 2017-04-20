/**
 * Created by The BigBang on 8.4.2017.
 */
angular.module('todo-app')

    //api calls
.service('CommonService',function($http){
    var todoDelete=function(id){
       return $http.post('/todo/delete',{id:id}).then(function(res){
            return res;
        },function(err){
            console.log(err);
        });
    }

    var add=function(todo){
       return $http.post('/todo/add',{todo:todo}).then(function(obj){
          return obj.data.obj;
        },function(err){
            console.log(err);
        });
    }

    var get=function(){
     var data= $http.get('/todo').then(function(res){
         return res.data;
        },function(err){
            console.log(err);
        });
        return data.$$state

    }

    return{
        todoDelete:todoDelete,
        add:add,
        get:get
    }

});