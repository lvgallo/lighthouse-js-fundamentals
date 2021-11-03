const calculateRectangleArea = function (length, width) {
  const areaRectangle = (length * width);
  if (length > 0 && width > 0) {
    return areaRectangle;
  } else { "undefined" }
}
console.log(calculateRectangleArea(10, 5));

const calculateTriangleArea = function (base, height) {
  const areaTriangle = (base * height / 2);
  if (base > 0 && height > 0) {
    return areaTriangle;
  } else { "undefined" }
}
console.log(calculateTriangleArea(10, 5));

const calculateCircleArea = function(radius) {
  const areaCircle = (Math.PI * radius * radius);
  if (radius > 0){
    return areaCircle;
  } else { 'undefined' }
}
console.log(calculateCircleArea(10));
