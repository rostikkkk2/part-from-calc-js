document.getElementById('plus').addEventListener("click",
function () {
  var first_num = document.getElementById('first-num').value;
  var secound_num = document.getElementById("secound-num").value;
  var result = document.getElementById("result");

  result.innerHTML = +first_num + +secound_num;
});

document.getElementById('minus').addEventListener("click",
function () {
  var first_num = document.getElementById('first-num').value;
  var secound_num = document.getElementById("secound-num").value;
  var result = document.getElementById("result");

  result.innerHTML = +first_num - +secound_num;
});

document.getElementById('multiply').addEventListener("click",
function () {
  var first_num = document.getElementById('first-num').value;
  var secound_num = document.getElementById("secound-num").value;
  var result = document.getElementById("result");

  result.innerHTML = +first_num * +secound_num;
});

document.getElementById('divide').addEventListener("click",
function () {
  var first_num = document.getElementById('first-num').value;
  var secound_num = document.getElementById("secound-num").value;
  var result = document.getElementById("result");

  result.innerHTML = +first_num / +secound_num;
});
