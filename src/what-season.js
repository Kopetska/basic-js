const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (!(date instanceof Date) || date[Symbol.toStringTag] === "Date")
    throw new Error("Invalid date!");

  const monthsMatrix = [
    [0, 1, 11],
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
  ];
  const seasons = ["winter", "spring", "summer", "autumn"];

  const month = date.getMonth();

  let indexOfSubarray = 0;

  for (let i = 0; i < monthsMatrix.length; i++) {
    for (let j = 0; j < monthsMatrix[i].length; j++) {
      if (monthsMatrix[i][j] === month) {
        indexOfSubarray = i;
      }
    }
  }

  return seasons[indexOfSubarray];
}

module.exports = {
  getSeason,
};
