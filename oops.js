class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    // getPg() {
    //     if (this.rating == "PG") {
    //         return
    //     }
    // }

}

const Superman = new Movie("Casino Royale", "Eon Productions", "PG­13")
console.log(Superman)


// 
// class Bike {
//     constructor(brand, engine, type) {
//         this.Brand = brand;
//         this.Engine = engine;
//         this.Type = type;
//     }
// }
// const Motercycle = new Bike("BMW", "Petrol", "single")
// console.log(Motercycle)
// console.log(typeof Motercycle, typeof Bike)

// class Account {
//     constructor(Name, Address, Mobile, Balance, widraw) {
//         this.Name = Name;
//         this.Address = Address;
//         this.Mobile = Mobile;
//         this.Balance = Balance;
//         this.widraw = widraw;
//     }
//     getBalance() {
//         return "The balance is " + this.Balance;
//     }
//     widrawAmount() {

//     }
// }
// const Sourabh = new Account("Sourabh", "Solapur", 7517770319, 400, 3330);
// const urabh = new Account("urabh", "pur", 7517784319, 1200, 641);
// const rabh = new Account("rabh", "Sola", 8917770319, 30, 4);
// console.log(Sourabh, urabh, rabh)
// console.log(Sourabh.getBalance())
// console.log(urabh.getBalance())
// console.log(rabh.getBalance())
// console.log(Sourabh.widrawAmount())
// console.log(urabh.widrawAmount())
// console.log(rabh.widrawAmount())
// console.log(Sourabh.RemainingBalance())
// console.log(urabh.RemainingBalance())
// console.log(rabh.RemainingBalance())