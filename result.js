const easyPoint = document.getElementById("easy-point");
const mediumPoint = document.getElementById("medium-point");
const hardPoint = document.getElementById("hard-point");

const sortedPoints = localStorage.getItem("points");
let points = JSON.parse(sortedPoints);

easyPoint.innerHTML = points.easy;
mediumPoint.innerHTML = points.medium;
hardPoint.innerHTML = points.hard;
