//👉 Write your tests below here:

import bananas from "./main"

test("Number of minimum jumps matches number of 'banana' strings in array returned", () => {
    const actual = bananas(2,7);
    const expected = ["banana", "banana", "banana"];
    expect(actual).toStrictEqual(expected);
});

test("Number of minimum jumps matches number of 'banana' strings in array returned", () => {
    const actual = bananas(3,11);
    const expected = ['banana', 'banana', 'banana', 'banana'];
    expect(actual).toStrictEqual(expected);
});

test("Number of minimum jumps matches number of 'banana' strings in array returned", () => {
    const actual = bananas(7,15);
    const expected = ['banana', 'banana', 'banana', 'banana'];
    expect(actual).toStrictEqual(expected);
});

test("Number of minimum jumps matches number of 'banana' strings in array returned", () => {
    const actual = bananas(1,32);
    const expected = ['banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana'];
    expect(actual).toStrictEqual(expected);
});

test("Number of minimum jumps matches number of 'banana' strings in array returned", () => {
    const actual = bananas(0,0);
    const expected = [];
    expect(actual).toStrictEqual(expected);
});

test("Number of minimum jumps matches number of 'banana' strings in array returned", () => {
    const actual = bananas(0,1);
    const expected = ["banana"];
    expect(actual).toStrictEqual(expected);
});


