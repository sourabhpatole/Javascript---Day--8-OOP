

class Account {
    constructor(Name, Address, Mobile, Balance, widraw) {
        this.Name = Name;
        this.Address = Address;
        this.Mobile = Mobile;
        this.Balance = Balance;
        this.widraw = widraw;
    }
    getBalance() {
        return "The balance is " + this.Balance;
    }
    widrawAmount() {
        if (this.Balance > this.widraw) {
            return this.Balance - this.widraw;
        } else {
            console.log("Insufficient Fund")
        }
    }
}
const Sourabh = new Account("Sourabh", "Solapur", 7517770319, 400, 3330);
const urabh = new Account("urabh", "pur", 7517784319, 1200, 641);
const rabh = new Account("rabh", "Sola", 8917770319, 30, 4);
console.log(Sourabh, urabh, rabh)
console.log(Sourabh.getBalance())
console.log(urabh.getBalance())
console.log(rabh.getBalance())
console.log(Sourabh.widrawAmount())
console.log(urabh.widrawAmount())
console.log(rabh.widrawAmount())
console.log(Sourabh.RemainingBalance())
console.log(urabh.RemainingBalance())
console.log(rabh.RemainingBalance())