/**
 * Function for calculating exact percentage from in the ratio of the required amount to the entire length.
 * @param {number} amount needed amount
 * @param {number} length full length
 * @param {boolean} round rounds returning percent
 * @returns {number}
 */
export function calculatePercentage(
  amount: number,
  length: number,
  round: boolean = false
): number {
  const percent = (amount / length) * 100;

  return round ? ~~percent : percent;
}
