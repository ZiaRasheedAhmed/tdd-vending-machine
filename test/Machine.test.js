const Machine = require('../src/Machine');
let amt = 0;
// 1. As a customer, I want to see that the vending machine has items, so that I can purchase them.
describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [{ 'crisps': 100 }, { 'chocolate': 350 }, { 'mints': 70 }];

        // exercise
        const actual = machine.seeSelections();

        // assert
        expect(expected).toEqual(actual);
    });

// 2. As a customer, I want to know how much money I have deposited, so that I know what I can purchase.
    it('how much money I have deposited', () => {
        // setup
        const machine = new Machine();
        amt =100;
        let abc = '';
        const expected = new Array(10,20,50,100,500);
        for(let i = 0; i < expected.length; i++){
            if(expected[i] == amt){
                abc = 'You have deposited Rs: '+amt;
                break;
            }
            else{
                abc = expected[i];
            }
        }
        // exercise
        const actual = machine.deposit(amt);

        // assert
        expect(abc).toEqual(actual);
    });

// 3. As a customer, I want to add additional money, so that I can use the denominations I have to purchase an item.
it('More deposite done', () => {
    // setup
    const machine = new Machine();
    const amt2 = 50;
    const expected = new Array(10,20,50,100,500);
    for(var i = 0; i < expected.length; i++){
        if(expected[i] == amt2){
            amt +=amt2;
            abc = 'You have deposited Rs: '+amt;
            break;
        }
        else{
            abc = expected[i];
        }
    }
    // exercise
    const actual = machine.deposit(amt);

    // assert
    expect(actual).toEqual(abc);
});

// 4. As a customer, I want to see a message if my item is unavailable, so that I can make another choice.
it('The item you selected is unavailable', () => {
    // setup
    const machine = new Machine();
    const expected = 'The item you selected is unavailable';
    
    
    // exercise
    const actual = machine.selectItem(3);

    // assert
    expect(expected).toEqual(actual);
});

});
