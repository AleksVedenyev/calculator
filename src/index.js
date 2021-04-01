const calculate = (left, right, operator) => {

};

const parse = (expression) => {

};

export default (expression, acc = 0) => {
  const [left, right, operator] = parse(expression);
  return calculate(left, right, operator);
};