import { isEmptyString } from '.';

test('isEmptyString for empty string', () => {
    expect(isEmptyString('')).toEqual(true);
});

test('isEmptyString for null or undefined', () => {
    expect(isEmptyString(null)).toEqual(true);
    expect(isEmptyString(undefined)).toEqual(true);
});

test('isEmptyString for numbers', () => {
    expect(isEmptyString(-1)).toEqual(true);
    expect(isEmptyString(0)).toEqual(true);
    expect(isEmptyString(1)).toEqual(true);

    expect(isEmptyString('0')).toEqual(false);
    expect(isEmptyString('1')).toEqual(false);
});

test('isEmptyString for boolean values', () => {
    expect(isEmptyString(false)).toEqual(true);
    expect(isEmptyString(true)).toEqual(true);

    expect(isEmptyString('false')).toEqual(false);
    expect(isEmptyString('true')).toEqual(false);
});

test('isEmptyString for lists', () => {
    expect(isEmptyString([])).toEqual(true);
    expect(isEmptyString([1, 2, 3])).toEqual(true);
});

test('isEmptyString for objects', () => {
    expect(isEmptyString({})).toEqual(true);
    expect(isEmptyString({ a: 1, b: 'test' })).toEqual(true);
});