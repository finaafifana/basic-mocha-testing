
//Math Operations
//Addition
//Subtraction
//Multiplication

var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){
    var a = 10;
    var b = 10;

    it.only('Addition of two numbers', function(){
        var c = a+b;
        assert.equal(c,20);
    });

    it.only('Subtraction of two numbers', function(){
        var c = a-b;
        assert.equal(c,0);
    });

    it.only('Multiplication of two numbers', function(){
        var c = a*b;
        assert.equal(c,100);
    });
});