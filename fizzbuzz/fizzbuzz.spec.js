const fizzBuzz = require("./fizzbuzz");

describe("FizzBuzz", () => {
    //Test, czy zwraca "Fizz", jeśli liczba jest podzielna przez 3
    it("should check if number 6 is divisible by 3 or 5 and return Fizz, because it is divisible only by 3", () => {
        expect(fizzBuzz(6)).toBe("Fizz");
    });
    //Test, czy zwraca "Buzz", jeśli liczba jest podzielna przez 5
    it("should check if number 10 is divisible by 3 or 5 and return Buzz, because it is divisible only by 5", () => {
        expect(fizzBuzz(10)).toBe("Buzz");
    });
    //Test, czy zwraca "FizzBuzz", jeśli liczba jest podzielna przez 3 oraz przez 5
    it("should check if number 15 is divisible by 3 or 5 and return FizzBuzz, because it is divisible by 3 and 5", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    })
    //Test, czy zwraca przekazaną liczbę, jeśli nie jest ona podzielna ani przez 3, ani przez 5
    it("should check if number 4 is divisible by 3 or 5 and return this number (given 4), bacause it is not divisible by 3 and 5", () => {
        expect(fizzBuzz(4)).toBe(4);
    });
});