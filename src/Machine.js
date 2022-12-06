let arr = new Array();

module.exports = class Machine {
    constructor() {
        
    }


    seeSelections() {
        return [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
    }
    deposit(amt) {
            return ('You have deposited Rs: '+amt);
    }
    
};