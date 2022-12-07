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
        const expected = "You have deposited Rs 100";
        // exercise
        const actual = machine.deposit(amt);

        // assert
        expect(expected).toEqual(actual);
    });

// 3. As a customer, I want to add additional money, so that I can use the denominations I have to purchase an item.
it('More deposite done', () => {
    // setup
    const machine = new Machine();
    const expected = "You have deposited Rs 150";
    // exercise
    machine.deposit(100);
    const actual = machine.deposit(50);

    // assert
    expect(actual).toEqual(expected);
});

//4. As a customer, I want to see a message if my item is unavailable, so that I can make another choice.
it('The item you selected is unavailable', () => {
    // setup
    const machine = new Machine();
    const expected = 'The item you selected is unavailable';
    
    
    // exercise
    const actual = machine.selectItem(3);

    // assert
    expect(expected).toEqual(actual);
});

//5. As a customer, I want to see a message if my deposit is insufficient, so that I know to add more money.
it('The item you selected is unavailable', () => {
    // setup
    const machine = new Machine();
    const expected = 'Your deposit is insufficient. Please add Rs 50 for this item';
    
    
    // exercise
    machine.deposit(100);
    const actual = machine.selectItem(0);

    // assert
    expect(actual).toEqual(expected);
});

});
