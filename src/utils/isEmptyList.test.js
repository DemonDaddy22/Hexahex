import { isEmptyList } from '.';

test('isEmptyList for empty string', () => {
    expect(isEmptyList('')).toEqual(true);
});

test('isEmptyList for null or undefined', () => {
    expect(isEmptyList(null)).toEqual(true);
    expect(isEmptyList(undefined)).toEqual(true);
});

test('isEmptyList for numbers', () => {
    expect(isEmptyList(-1)).toEqual(true);
    expect(isEmptyList(0)).toEqual(true);
    expect(isEmptyList(1)).toEqual(true);
    expect(isEmptyList('0')).toEqual(true);
    expect(isEmptyList('1')).toEqual(true);
});

test('isEmptyList for boolean values', () => {
    expect(isEmptyList(false)).toEqual(true);
    expect(isEmptyList(true)).toEqual(true);
    expect(isEmptyList('false')).toEqual(true);
    expect(isEmptyList('true')).toEqual(true);
});

test('isEmptyList for lists', () => {
    expect(isEmptyList([])).toEqual(true);
    expect(isEmptyList([1, 2, 3, [], 'test'])).toEqual(false);
});

test('isEmptyList for objects', () => {
    expect(isEmptyList({})).toEqual(true);
    expect(isEmptyList({ a: 1, b: 'test' })).toEqual(true);
});