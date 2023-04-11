import { simpleLoop } from 'src/simpleLoop'

describe('SimpleLoopTest', () => {
  // Describes the test situation of the function
  it('Result of simpleLoop should be called console.log 5 times', () => {
    const logSpy = jest.spyOn(global.console, 'log')
    simpleLoop()

    expect(logSpy).toHaveBeenCalled()
    expect(logSpy).toHaveBeenCalledTimes(5)
    expect(logSpy).toHaveBeenCalledWith('Inside the loop:1')
    expect(logSpy).toHaveBeenCalledWith('Inside the loop:2')
    expect(logSpy).toHaveBeenCalledWith('Inside the loop:3')
    expect(logSpy).toHaveBeenCalledWith('Inside the loop:4')
    expect(logSpy).toHaveBeenCalledWith('Outside the loop:5')

    logSpy.mockRestore()
  })
})
