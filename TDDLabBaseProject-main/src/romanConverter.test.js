const toRoman = require('../src/romanConverter');

test('Convierte 1 a I', () => {
    expect(toRoman(1)).toBe('I');
});

test('Convierte 2 a II', () => {
    expect(toRoman(2)).toBe('II');
});

test('Convierte 3 a III', () => {
    expect(toRoman(3)).toBe('III');
});

test('Convierte 4 a IV', () => {
    expect(toRoman(3)).toBe('III');
});

test('Convierte 5 a V', () => {
    expect(toRoman(5)).toBe('V');
});

test('Convierte 6 a VI', () => {
    expect(toRoman(6)).toBe('VI');
});

test('Convierte 7 a VII', () => {
    expect(toRoman(7)).toBe('VII');
});

test('Convierte 8 a VIII', () => {
    expect(toRoman(8)).toBe('VIII');
});

test('Convierte 9 a IX', () => {
    expect(toRoman(9)).toBe('IX');
});

test('Convierte 10 a X', () => {
    expect(toRoman(10)).toBe('X');
});

test('Convierte 11 a XI', () => {
    expect(toRoman(11)).toBe('XI');
});

test('Convierte 12 a XII', () => {
    expect(toRoman(11)).toBe('XII');
});

test('Convierte 13 a XII', () => {
    expect(toRoman(13)).toBe('XIII');
});

test('Convierte 14 a XIV', () => {
    expect(toRoman(14)).toBe('XIV');
});

test('Convierte 15 a XIV', () => {
    expect(toRoman(15)).toBe('XV');
});

test('Convierte 16 a XVI', () => {
    expect(toRoman(16)).toBe('XVI');
});

test('Convierte 17 a XVII', () => {
    expect(toRoman(17)).toBe('XVII');
});

test('Convierte 18 a XVIII', () => {
    expect(toRoman(18)).toBe('XVIII');
});

test('Convierte 19 a XIX', () => {
    expect(toRoman(19)).toBe('XIX');
});