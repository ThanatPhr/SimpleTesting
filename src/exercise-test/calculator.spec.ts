import { calcuator } from 'src/exercise/calculator'

// Describes the funciton you are going to test
describe('CalculatorTest', () => {
  // Describes the test situation of the function
  it('Result of 4 plus 6 should be 10', () => {
    expect(calcuator(4, 6, '+')).toBe('4 + 6 = 10')
  })
})
