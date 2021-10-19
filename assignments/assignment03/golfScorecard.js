let elem = [];

// assign the entire table row for hole 1 to a variable, elem
elem[1]
  = document.getElementById("1");

elem[2]
  = document.getElementById("2");

elem[3]
  = document.getElementById("3");

elem[4]
  = document.getElementById("4");

elem[5]
  = document.getElementById("5");

elem[6]
  = document.getElementById("6");

elem[7]
  = document.getElementById("7");

elem[8]
  = document.getElementById("8");

elem[9]
  = document.getElementById("9");

elem[10]
  = document.getElementById("10");

elem[11]
  = document.getElementById("11");

elem[12]
  = document.getElementById("12");

elem[13]
  = document.getElementById("13");

elem[14]
  = document.getElementById("14");

elem[15]
  = document.getElementById("15");

elem[16]
  = document.getElementById("16");

elem[17]
  = document.getElementById("17");

elem[18]
  = document.getElementById("18");

// display the number of children (all td elements)
//console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
//console.log(elem.children[4].children[0]); 

for(let i=1; i<=18; i++) {
  // console.log(i);
  elem[i] = document.getElementById(i.toString());
  elem[i].children[4].children[0].onclick = function(){add1(elem[i]);};
  elem[i].children[4].children[0].onclick = function(){sub1(elem[i]);};
}

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else if(elem.children[2].innerHTML == elem.children[1].innerHTML)
    elem.children[3].innerHTML + 1;
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}

// create an "sub1" function
function sub1 (elem) {
  if(elem.children[2].innerHTML == "1")
    elem.children[2].innerHTML = "-";
  else if(elem.children[2].innerHTML == "-")
    elem.children[2].innerHTML == "-";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}
