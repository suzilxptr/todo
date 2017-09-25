var express = require('express');
var router = express.Router();
var todoModel=require('../models/todo_model');


//get all list
router.get('/',function(req,res,next){

    todoModel.todoSchema.find({},function(err,todoList){
        if(err){
            throw err;
        }
        else{
            res.send(todoList);
        }
    });
});

//add todoo
router.post('/add',(req,res,next) => {
    todoModel.todoSchema.create({
        date:req.body.todo.date,
        description:req.body.todo.description,
        title:req.body.todo.title
    },function(err,obj){
        if(err){
            throw err;
        }
        else{
            res.send({status:res.statusCode,obj:obj});
        }
    });

});

//delete todoo
router.post('/delete',(req,res,next) => {
    todoModel.todoSchema.remove({_id:req.body.id},function(err,obj){
        if(err){
            throw err;
        }
        else{
            res.send({status:res.statusCode});
        }
    });
});

module.exports = router;
