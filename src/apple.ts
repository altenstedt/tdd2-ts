import { Item } from "./item";
import { Money } from "./money";

export class Apple implements Item {
    public get cost() : Money {
        return new Money(13.76);
    }
}