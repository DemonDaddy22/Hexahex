import { isEmptyObject } from '.';

test('isEmptyObject for empty string', () => {
    expect(isEmptyObject('')).toEqual(true);
});

test('isEmptyObject for null or undefined', () => {
    expect(isEmptyObject(null)).toEqual(true);
    expect(isEmptyObject(undefined)).toEqual(true);
});

test('isEmptyObject for numbers', () => {
    expect(isEmptyObject(-1)).toEqual(true);
    expect(isEmptyObject(0)).toEqual(true);
    expect(isEmptyObject(1)).toEqual(true);
    expect(isEmptyObject('0')).toEqual(true);
    expect(isEmptyObject('1')).toEqual(true);
});

test('isEmptyObject for boolean values', () => {
    expect(isEmptyObject(false)).toEqual(true);
    expect(isEmptyObject(true)).toEqual(true);
    expect(isEmptyObject('false')).toEqual(true);
    expect(isEmptyObject('true')).toEqual(true);
});

test('isEmptyObject for lists', () => {
    expect(isEmptyObject([])).toEqual(true);
    expect(isEmptyObject([1, 2, 3])).toEqual(true);
});

test('isEmptyObject for objects', () => {
    expect(isEmptyObject({})).toEqual(true);
    expect(isEmptyObject({ a: 1, b: 'test', c: {} })).toEqual(false);
});