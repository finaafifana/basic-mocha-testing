//MOCHA HOOKS

describe('Mocha Hooks',function(){
    before('Execute Before All Tests', function(){
        console.log('Execute Before All Tests');
    });

    beforeEach('Execute Before Each Tests', function(){
        console.log('Execute Before Each Tests');
    });
    after('Execute After All Tests', function(){
        console.log('Execute After All Tests');
    });
    afterEach('Execute After Each Tests', function(){
        console.log('Execute After Each Tests');
    });
    it('Mocha Hooks Tests', function(){
        console.log('Mocha - This is a Test for Mocha Hooks');
    });
});