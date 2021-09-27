//mocha timeouts - Test level

var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){
    this.timeout(5000);
    var a = 10;
    var b = 10;

    it.only('Addition of two numbers', function(done){
        this.timeout(500);
        setTimeout(done,3000);
        var c = a+b;
        assert.equal(c,20);
    });
});