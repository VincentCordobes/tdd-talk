const { splitPeriod } = require('./index')

describe('splitPeriod', () => {
  test('should not split when the period is 1-12', () => {
    // Given
    const period = { from: 1, to: 12 }
    // when
    const periods = splitPeriod(period)
    // then
    expect(periods).toEqual([period])
  })

  test('should not split when the period is between 1-12', () => {
    // Given
    const period = { from: 3, to: 8 }
    // when
    const periods = splitPeriod(period)
    // then
    expect(periods).toEqual([period])
  })

  test('should not split when the period is between 13-24', () => {
    // Given
    const period = { from: 13, to: 24 }
    // when
    const periods = splitPeriod(period)
    // then
    expect(periods).toEqual([period])
  })

  test('should split in 2 when the period is 6-13', () => {
    // 1          12        24       absMonth
    // |----------|----------|-----
    //      |------|                 initial period
    //      6      13
    // Given
    const period = { from: 6, to: 13 }
    // when
    const periods = splitPeriod(period)
    // then
    expect(periods).toEqual([{ from: 6, to: 12 }, { from: 13, to: 13 }])
  })
  test('should split in 3 when the period is 6-25', () => {
    //  1          12        24       absMonth
    //  |----------|----------|-----
    //       |-----------------|      initial period
    //       6                25

    const period = { from: 6, to: 25 }
    // when
    const periods = splitPeriod(period)
    // then
    expect(periods).toEqual([
      { from: 6, to: 12 },
      { from: 13, to: 24 },
      { from: 25, to: 25 },
    ])
  })
})
