//timeout - Hook Level

var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){
    beforeEach(function(done){
        this.timeout(500);
        setTimeout(done,3000);
    })

});