var list = [];

function sorting(num) {
  pushNum(num);
}

function pushNum(num1) {
  list.push(num1);
}

function ascend(){
  var listSort = [];
  listSort = list.sort(ascendReal);
  return listSort;
}

function ascendReal(c, d){
  return c - d;
}

module.exports = {
  sorting: sorting,
  ascend: ascend
};