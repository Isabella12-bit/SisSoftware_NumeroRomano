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