import { checkBetween } from 'src/checkBetween'

// Describes the funciton you are going to test
describe('CheckBetweenTest', () => {
  // Describes the test situation of the function
  it('Result of checkBetween 5 should be true', () => {
    expect(checkBetween(5)).toBe(true)
  })
  it('Result of checkBetween -5 should be false', () => {
    expect(checkBetween(-5)).toBe(false)
  })
})
