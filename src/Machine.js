module.exports = class Machine {
    constructor() {
        this.totalDeposit =0;
        this.items = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
        this.expectedmoney = [10,20,50,100,500];
    }


    seeSelections() {
        return this.items;
    }

    deposit(amt) {
        var expected = this.expectedmoney.find(i=> i === amt);
        if(expected == undefined){
            return " We are excepted only 10,20,50,100 or 500 note!"
        }
        this.totalDeposit += amt;
        return ('You have deposited Rs '+this.totalDeposit);
    }
    
    selectItem(code) {
        const validitem = this.items[code];
        if(validitem==undefined){
            return ('The item you selected is unavailable');
        }
        const itemName = Object.keys(validitem)[0];
        const itemPrice = Object.values(validitem)[0];
        if(itemPrice > this.totalDeposit){
            return "Your deposit is insufficient. Please add Rs "+Math.abs(itemPrice - this.totalDeposit)+" for this item";
        }
        if(validitem = this.items[2]){
            return ("{item: 'mints', change: [20, 10]}");
        }
    }
}