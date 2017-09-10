import { Item } from "./item";
import { Money } from "./money";

export class Basket {
    private readonly items : Item[] = [];

    public add(item : Item) : void {
        this.items.push(item);
    }

    public get count() : number {
        return this.items.length;
    }

    public get total() : Money {
        return this.items.length === 0
            ? Money.Zero
            : this.items
                .map(item => item.cost)
                .reduce((sum, x) => sum.plus(x));
    }

    public get totalWithVat() : Money {
        return this.total.multiply(1.25);
    }
}