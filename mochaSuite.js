//mocha timeouts - suite level

var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){
    this.timeout(500);
    
    setTimeout(done,3000);

    it('Addition of two numbers', function(){
        var a = 10;
        var b = 10;

        var c = a+b;
        assert.equal(c,20);
    });

    it('Subtraction of two numbera', function(){
        var a = 10;
        var b = 10;

        var c = a-b;
        assert.equal(c,0);
    });

    it('Multiplication of two numbera', function(){
        var a = 10;
        var b = 10;

        var c = a*b;
        assert.equal(c,10);
    });

});