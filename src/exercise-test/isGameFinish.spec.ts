import { isGameFinish } from 'src/exercise/isGameFinish'

describe('should return a correct winner', () => {
  it('Player One Win', () => {
    const result = isGameFinish(10, 0)
    expect(result.message).toBe('Player One Win')
    expect(result.GameFinish).toBe(true)
  })
})
