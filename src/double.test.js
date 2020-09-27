const double = require('./double');

test('double 2 to equal 4', () => {
    expect(double(2)).toBe(4);
});

test('double 10 to equal 20', () => {
    expect(double(10)).toBe(20);
});