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
  // TODO: to be implemented
  throw new Error('TODO: to be implemented')
}

module.exports = {
  splitPeriod,
}
