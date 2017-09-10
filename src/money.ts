export class Money {
    private readonly units : number;
    
    private readonly decimalPlaces : number = 2;

    private readonly regionInfo : string = "SE"; // ISO 3166-1 alpha-2 code

    private readonly currencySymbol : string = "SEK"; // ISO 4217 currency symbol
    
    constructor(value : number) {
        this.units = Math.round(value * Math.pow(10, this.decimalPlaces));
    }

    public static get Zero() : Money {
        return new Money(0);
    }

    public plus(money : Money) : Money {
        Money.assertRegions(this, money);

        return new Money((this.units + money.units) / Math.pow(10, this.decimalPlaces));
    }

    public minus(money : Money) : Money {
        Money.assertRegions(this, money);

        return new Money((this.units - money.units) / Math.pow(10, this.decimalPlaces));
    }

    public multiply(value : number) : Money {
        const product = this.units * value;
        
        const factor = Math.pow(10, this.decimalPlaces);
        
        return new Money(product / factor);    
    }

    public equals(money : Money) : boolean {
        return this.units === money.units 
        && this.decimalPlaces === money.decimalPlaces
        && this.regionInfo === money.regionInfo;
    }

    public toString() : string {
        const scaled = this.units / Math.pow(10, this.decimalPlaces);
        
        return `${this.currencySymbol} ${scaled.toFixed(this.decimalPlaces)}`;
    }

    private static assertRegions(left : Money, right : Money) : void {
        if (left.regionInfo !== right.regionInfo) {
            throw new Error("Operands have different regions.");
        }

        if (left.decimalPlaces !== right.decimalPlaces) {
            throw new Error("Operands have different decimal places.");
        }    
    }
}