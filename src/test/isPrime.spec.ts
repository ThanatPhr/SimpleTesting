import { isPrime } from 'src/isPrime'

describe('IsPrimeTest', () => {
  // Describes the test situation of the function
  it('Result of isPrime 1 should logged (1 is neither prime nor composite number.)', () => {
    const logSpy = jest.spyOn(global.console, 'log')
    isPrime(1)

    expect(logSpy).toHaveBeenCalled()
    expect(logSpy).toHaveBeenCalledTimes(1)
    expect(logSpy).toHaveBeenCalledWith(
      '1 is neither prime nor composite number.'
    )

    logSpy.mockRestore()
  })
})
