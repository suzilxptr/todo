/**
 * Created by The BigBang on 8.4.2017.
 */
var mongoose=require('mongoose');
var express=require('express');


//mongoose schema definition
var todoSchema=new mongoose.Schema({
    date:String,
    title:String,
    description:String
});

var todoSchema=mongoose.model('todo',todoSchema);
module.exports.todoSchema=todoSchema;
