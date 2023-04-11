import { checkSorted } from 'src/exercise/checkSorted'

describe('CheckSortedTest', () => {
  it(`[1, 2, 3] should return "correctly sorted"`, () => {
    expect(checkSorted([1, 2, 3])).toBe('correctly sorted')
  })

  it(`[3, 1, 2] should return "incorrectly sorted"`, () => {
    expect(checkSorted([3, 1, 2])).toBe('incorrectly sorted')
  })
})
