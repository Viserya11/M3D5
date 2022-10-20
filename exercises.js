let x = "John";
let y = "Doe";
console.log(x + " <> " + y);

let details = {
  name: "Panni",
  surname: "Szűcs",
  email: "szucspann@gmail.com",
};

delete details.email;
console.log(details);

stringArray = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

for (let i = 0; i < stringArray.length; i++) {
  console.log(stringArray[i]);
}

let numArr = [];
let maxNum = 100;
for (let i = 0; i < maxNum; i++) {
  let randomNumbers = Math.floor(Math.random() * maxNum);
  numArr.push(randomNumbers);
}
console.log(numArr);

function getMaxAndMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
}
console.log(getMaxAndMin(numArr));

let arrayOfArrays = [];

for (let i = 0; i < 10; i++) {
  let innerArray = [];
  for (let j = 0; j < 10; j++) {
    innerArray.push(Math.floor(Math.random() * 10));
  }
  arrayOfArrays.push(innerArray);
}
console.log(arrayOfArrays);

function longestArr(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr1;
  } else return arr2;
}
console.log(longestArr([1, 2, 3, 4], [5, 6, 7, 8, 9, 10]));

function higherSum(arr3, arr4) {
  let sum1 = 0;
  for (let i = 0; i < arr3.length; i++) {
    sum1 = sum1 + arr3[i];
  }
  let sum2 = 0;
  for (let i = 0; i < arr4.length; i++) {
    sum2 = sum2 + arr4[i];
  }

  if (sum1 > sum2) {
    console.log("array one has a higher value:", sum1);
  } else console.log("array two has a higher value", sum2);
}

higherSum([1, 2, 3], [4, 5, 6, 7]);

//what on the earth is the issue with this smh
let container = document.getElementById("container");

function getTd() {
  let allTd = document.getElementsByTagName("td");
  for (let i = 0; i < allTd.length; i++) {
    tdNode[i].innerText = "Changed text";
  }
}

function changeHeading() {
  let heading = document.querySelector("h1");
  heading.innerText = "New heading";
}

let addRow = function () {
  let table = document.querySelector("table");
  let row = document.createElement("tr");
  table.appendChild(row);
};

function addClass() {
  let row = document.getElementsByTagName("tr");
  for (let i = 0; i < row.length; i++) {
    row[i].classList.add("test");
  }
}

//WHY WHY WHY
function addBg() {
  let link = document.querySelectorAll("a");
  link.style.backgroundColor = "red";
}

window.onload = function () {
  console.log("Page loaded");
};

function addNewItems() {
  let ulList = document.getElementsByTagName("ul");
  let newul = document.createElement("li");
  newul.innerText = "New item";
  for (let i = 0; i < ulList.length; i++) {
    ulListNode[i].appendChild(newul);
  }
}

function emptyList() {
  let ulList2 = document.getElementsByTagName("ul");
  for (let i = 0; i < ulList2.length; i++) {
    ulList2[i].classList.add("hide");
  }
}

function hideImages() {
  let imagesNode = document.getElementsByTagName("img");
  for (let i = 0; i < imagesNode.length; i++) {
    imagesNode[i].classList.add("hide");
  }
}

//ill just hide myself in a cave forever
