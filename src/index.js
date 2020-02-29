
exports.min = function min (array) {
  array = array || [];
  if(array.length != 0) {
    array.sort(function(a, b) {
      return a - b;
    });
    return array[0];
  }
  return 0;
}

exports.max = function max (array) {
  array = array || [];
  if(array.length != 0) {
    array.sort(function(a, b) {
      return a - b;
    }).reverse();
    return array[0];
  }
  return 0;
}

exports.avg = function avg (array) {
  array = array || [];
  if(array.length != 0) {
    let sum = 0;
    array.forEach(element => 
        sum += element
    );
  return sum / array.length;
}
return 0;
}
