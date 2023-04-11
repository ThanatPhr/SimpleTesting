import { absolute } from 'src/absolute'

// Describes the funciton you are going to test
describe('AbsoluteTest', () => {
  // Describes the test situation of the function
  it('Result of absolute 4 should be 4', () => {
    expect(absolute(4)).toBe(4)
  })
  it('Result of absolute -4 should be 4', () => {
    expect(absolute(-4)).toBe(4)
  })
})
