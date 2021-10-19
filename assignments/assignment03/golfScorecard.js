let elem = [];

// display the number of children (all td elements)
//console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
//console.log(elem.children[4].children[0]);

for (let i = 1; i <= 18; i++) {
  // console.log(i);
  elem[i] = document.getElementById(i.toString());
  elem[i].children[4].children[0].onclick = function () {
    add1(elem[i], elem);
  };
  elem[i].children[4].children[1].onclick = function () {
    sub1(elem[i], elem);
  };
  elem[i].children[4].children[2].onclick = function () {
    clear(elem[i], elem);
  };
}

elem[19] = document.getElementById("totals");
updateTotals(elem);

function clear(elem, arr){
  elem.children[2].innerHTML = "-"
  elem.children[3].innerHTML = "-"
  arr[19].children[1].innerHTML = 0;
  arr[19].children[2].innerHTML = 0;
  updateTotal(arr);
}

// create an "add1" function
function add1(elem, arr) {
  if (elem.children[2].innerHTML == "-") elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
  updateOver(elem);
  updateTotal(arr);
}

// create an "sub1" function
function sub1(elem, arr) {
  if (elem.children[2].innerHTML == "1") elem.children[2].innerHTML = "-";
  else if (elem.children[2].innerHTML == "-") elem.children[2].innerHTML == "-";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
  updateOver(elem);
  updateTotal(arr);
}

function updateOver(elem) {
  let score = elem.children[2].innerHTML;
  score = Number.parseInt(score);
  let par = elem.children[1].innerHTML;
  par = Number.parseInt(par);
  let over = score - par;

  if (over <= 0) {
    elem.children[3].innerHTML = 0;
  } else {
    elem.children[3].innerHTML = over;
  }
}

function updateTotal(elem) {
  let totalPar = 0;
  let totalScore = 0;
  let totalOver = 0;
  let currentPar = 0;
  let currentScore = 0;
  let currentOver = 0;

  for (let i = 1; i <= 18; i++) {
    currentPar = elem[i].children[1].innerHTML;
    totalPar += Number.parseInt(currentPar);
    if (elem[i].children[2].innerHTML == "-") {
      currentScore = 0;
    } else {
      currentScore = elem[i].children[2].innerHTML;
      totalScore += Number.parseInt(currentScore);
    }
    if (elem[i].children[3].innerHTML == "-"){
      currentOver = 0;
    } else {
      currentOver = elem[i].children[3].innerHTML;
      totalOver += Number.parseInt(currentOver);
    }
  }
  
  elem[19].children[1].innerHTML = totalPar;
  elem[19].children[2].innerHTML = totalScore;
  elem[19].children[3].innerHTML = totalOver;
}
