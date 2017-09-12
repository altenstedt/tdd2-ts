import {} from 'jest';

import { Money } from "../../src/money";

describe("The Money class", () => {
    it ("should equal to zero", () => {
        expect(new Money(0).equals(Money.Zero)).toBeTruthy();
    });

    it ("should display value with currency prefix", () => {
        expect("SEK 11.42").toEqual(new Money(11.42).toString());
    });

    it ("should sum two values", () => {
        expect(new Money(12.34).equals(new Money(11.42).plus(new Money(0.92)))).toBeTruthy();
    });

    it ("should substract two values", () => {
        expect(new Money(107.66).equals(new Money(123).minus(new Money(15.34)))).toBeTruthy();
    });

    it ("should multiply two values", () => {
        expect(new Money(9.79).equals(new Money(7.83).multiply(1.25))).toBeTruthy();
    });

    it ("should round down", () => {
        expect(new Money(5.52).equals(new Money(5.522))).toBeTruthy();
    });

    it ("should round up", () => {
        expect(new Money(5.53).equals(new Money(5.526))).toBeTruthy();
    });

    it ("should equal", () => {
        expect(new Money(0).equals(new Money(0))).toBeTruthy();
        expect(new Money(1.0).equals(new Money(1.0))).toBeTruthy();
        expect(new Money(1.0).equals(new Money(1.001))).toBeTruthy();
        expect(new Money(1.0).equals(new Money(1.0049999999))).toBeTruthy();
    });

    it ("should not equal", () => {
        expect(new Money(0).equals(new Money(1))).not.toBeTruthy();
        expect(new Money(1.0).equals(new Money(1.01))).not.toBeTruthy();
        expect(new Money(1.0).equals(new Money(1.006))).not.toBeTruthy();
    });
});
