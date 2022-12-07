module.exports = class Machine {
    constructor() {
        this.totalDeposit =0;
        this.items = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
        this.expectedmoney = [10,20,50,100,500];
        this.change = [];
    }


    seeSelections() {
        return this.items;
    }

    deposit(amt) {
        var i = [];
        var expected = this.expectedmoney.find(i=> i === amt);
        if(expected == undefined){
            return " We are excepted only 10,20,50,100 or 500 note!"
        }
        this.totalDeposit += amt;
        return ('You have deposited Rs '+this.totalDeposit);
    }
    
    selectItem(code) {
        var i = this.expectedmoney.length;
        const validitem = this.items[code];
        if(validitem==undefined){
            return ('The item you selected is unavailable');
        }
        const itemName = Object.keys(validitem)[0];
        const itemPrice = Object.values(validitem)[0];
        if(itemPrice > this.totalDeposit){
            return "Your deposit is insufficient. Please add Rs "+Math.abs(itemPrice - this.totalDeposit)+" for this item";
        }
        this.totalDeposit -= itemPrice;
        while(this.totalDeposit > 0){
            // let remaining = this.totalDeposit - itemPrice
            for(let i of this.expectedmoney){
                if(i>this.totalDeposit){

                }
                else{
                    this.change.push(i);
                    this.totalDeposit = this.totalDeposit-i;
                }
            }
        }
        return {item: itemName, change: this.change};
    }
}

//money==this.totalDeposit
//price=item price
//change=change
//moneyList=expectedMoney