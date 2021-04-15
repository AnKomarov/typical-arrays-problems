
exports.min = function min (array) {
  if(!(array instanceof Array) || array.length == 0) return 0;
  const min  = Math.min(...array);
  return min;
};

exports.max = function max (array) {
  if(!(array instanceof Array) || array.length == 0) return 0;
  const max  = Math.max(...array);
  return max;
};

exports.avg = function avg (array) {
  if(!(array instanceof Array) || array.length == 0) return 0;
  const sum = array.reduce((prevValue, currentValue) => prevValue + currentValue);
  const avg = sum / array.length;
  return avg;
};
