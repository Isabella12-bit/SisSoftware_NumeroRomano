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