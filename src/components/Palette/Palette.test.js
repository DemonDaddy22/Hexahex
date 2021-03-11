import { isColourUnique, setNewColours, PALETTE_SIZE } from './Palette';

const colour1 = '#8966d3';
const colour2 = '#20d586';
const colours1 = ['#8966d3', '#20d586', '#eb6f65', '#f120ad'];
const colours2 = ['#eb6f65', '#f120ad', '#0e3f6d', '#56a2f4', '#f6f056'];

test('isColourUnique for empty colour string and empty list of colours', () => {
    expect(isColourUnique('', [])).toEqual(false);
});

test('isColourUnique for non-empty colour string and empty list of colours', () => {
    expect(isColourUnique(colour1, [])).toEqual(true);
    expect(isColourUnique(colour2, [])).toEqual(true);
});

test('isColourUnique for empty colour string and non-empty list of colours', () => {
    expect(isColourUnique('', colours1)).toEqual(false);
    expect(isColourUnique('', colours2)).toEqual(false);
});

test('isColourUnique for non-empty colour string and non-empty list of colours', () => {
    expect(isColourUnique(colour1, colours1)).toEqual(false);
    expect(isColourUnique(colour1, colours2)).toEqual(true);
    expect(isColourUnique(colour2, colours1)).toEqual(false);
    expect(isColourUnique(colour2, colours2)).toEqual(true);
});

test('setNewColours returns list of length PALETTE_SIZE', () => {
    expect(setNewColours().length).toEqual(PALETTE_SIZE);
});

test('setNewColours returns list of length size when called for size as argument', () => {
    const size1 = 10, size2 = 0, size3 = -2;
    expect(setNewColours(size1).length).toEqual(size1);
    expect(setNewColours(size2).length).toEqual(0);
    expect(setNewColours(size3).length).toEqual(0);
});