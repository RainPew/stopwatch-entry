import Calc from './Calc';
describe('Calc', () => {
  test('return 10 trong add(6, 4)', () => {
    expect(Calc.add(6, 4)).toBe(10);
  });
 test('return 9 trong hàm add(10, -1)', () => {
    expect(Calc.add(10, -1)).toBe(9);
  });
})