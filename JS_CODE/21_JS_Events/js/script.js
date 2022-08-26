console.log("JS Events")

function onAdd() {
  let firstNumber = document.getElementById('firstNum').value;
  let secoundNumer = document.getElementById('secondNum').value;
  let sum = Number(firstNumber) + Number(secoundNumer);
  document.getElementById('results').innerHTML = sum;

}

var courseList = [];

function onAddTodo() {
  let course = document.getElementById('course').value;
  //1.Capture the Element
  //2.arrays.

  //3.add course to array
  courseList.unshift(course);
  let courses = "<ul>"
  courseList.forEach((element) => {
    courses += `
         <li>${element}</li>  `
  })
  courses += "</ul>"
  document.getElementById('courses').innerHTML = courses;

}