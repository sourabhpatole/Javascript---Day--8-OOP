class Uber {
    constructor(KM, Rate, wantToPaid) {
        this.totalKM = KM;
        this.RatePerKM = Rate
        this.wantToPaid = this.getTotal();
    }
    getTotal() {
        return this.totalKM * this.RatePerKM
    }
}
const Pune = new Uber(231, 9)
console.log(Pune)