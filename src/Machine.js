let arr = new Array();
let amt1 = 0;
module.exports = class Machine {
    constructor() {
        amt1 =0;
        this.items = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
    }


    seeSelections() {
        return [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
    }

    deposit(amt) {
            amt1 += amt;
            return ('You have deposited Rs: '+amt1);
    }
    
    selectItem(code) {
        return ('The item you selected is unavailable');
    }
}