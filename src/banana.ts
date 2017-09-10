import { Item } from "./item";
import { Money } from "./money";

export class Banana implements Item {
    public get cost() : Money {
        return new Money(44.55);
    }
}