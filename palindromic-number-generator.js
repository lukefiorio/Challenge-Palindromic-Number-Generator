function palindromicNumberGenerator(num) {
  // turn to string, split into array, reverse, join to string, convert to number
  let revNum = Number(
    num
      .toString()
      .split('')
      .reverse()
      .join(''),
  );
  let cnt = 0;

  while (num !== revNum) {
    num += revNum;
    revNum = Number(
      num
        .toString()
        .split('')
        .reverse()
        .join(''),
    );
    cnt++;
  }

  return {
    value: num,
    steps: cnt,
  };
}

module.exports = palindromicNumberGenerator;
