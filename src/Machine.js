let arr = new Array();
let amt1 = 0;
module.exports = class Machine {
    constructor() {
        amt1 =0;
    }


    seeSelections() {
        return [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
    }
    deposit(amt) {
            amt1 += amt;
            return ('You have deposited Rs: '+amt1);
    }
}