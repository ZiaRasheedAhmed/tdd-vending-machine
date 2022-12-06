let arr = new Array();

module.exports = class Machine {
    constructor(item,price) {
        this.item = item;
        this.price = price;
    }


    seeSelections() {
        return [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
    }
    
};