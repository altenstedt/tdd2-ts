import { Item } from "./item";

export class Basket {
    private readonly items : Item[] = [];

    public add(item : Item) : void {
        this.items.push(item);
    }

    public get count() : number {
        return this.items.length;
    }

    public get total() : number {
        return this.items.length === 0
            ? 0
            : this.items
                .map(item => item.cost)
                .reduce((sum, x) => sum + x);
    }

    public get totalWithVat() : number {
        return this.total * 1.25;
    }
}