import * as utilsFn from ".."

describe("util functions", () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  test("random number return a number", () => {
    const randomNumberSpy = jest.spyOn(utilsFn, "randomNumber").mockImplementation(() => 12)
    const randomNumber = utilsFn.randomNumber
    expect(randomNumber()).toBe(12)
    expect(randomNumberSpy).toHaveBeenCalledTimes(1)
  })
  test("sliceIt when no arguments is passed into the function", () => {
    const sliceItSpy = jest.spyOn(utilsFn, "sliceIt")
    const sliceIt = utilsFn.sliceIt
    const inputString = "hello world my name is Marcell"
    const result = sliceIt(inputString)
    const expectedLength = 19

    expect(result).toHaveLength(expectedLength)
    expect(sliceItSpy).toHaveBeenCalledTimes(1)
  })
  test("sliceIt when `from` and `to` is passed to the function", () => {
    const sliceItSpy = jest.spyOn(utilsFn, "sliceIt")
    const sliceIt = utilsFn.sliceIt
    const inputString = "hello world my name is Marcell"
    const result = sliceIt(inputString, 2, 10)
    const expectedLength = 11

    expect(result).toHaveLength(expectedLength)
    expect(sliceItSpy).toHaveBeenCalledTimes(1)
  })
})
