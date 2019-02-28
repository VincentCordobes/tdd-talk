// type Period = {
//   from: number
//   to: number // included
// }

/**
 * Split period annually
 * eg. the period (6, 25) will be split into 3 periods:
 * (6, 12) (12, 24) and (24, 25)
 *
 *  1          12        24       absMonth
 *  |----------|----------|------
 *       |-----------------|      initial period
 *       6                25
 *
 * @param {Period} period to split. period.start >=1
 * @return {Period[]} period chunks
 */

function splitPeriod({ from, to }) {
  const left = 12 - ((from - 1) % 12) - 1
  if (to - from <= left) {
    return [{ from, to }]
  }
  return [
    { from, to: from + left },
    ...splitPeriod({ from: from + left + 1, to }),
  ]
}

module.exports = {
  splitPeriod,
}
