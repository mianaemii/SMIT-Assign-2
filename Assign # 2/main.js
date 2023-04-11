// Prog # 1

// function addNumber(num) {
//     return function (numInner) {
//       return numInner + num;
//     }
// }

// let add = addNumber(10);
// console.log(add(15));

// Prog # 2

// function searchInArray(arr, val) {
//     if (arr.length === 0) {
//       return false;
//     } else if (arr[0] === val) {
//       return true;
//     } else {
//       return searchInArray(arr.slice(1), val);
//     }
// }

// let array1 = [1, 2, 3, 4];
// let result = searchInArray(array1, 3);
// let result2 = searchInArray(array1, 5);
// console.log(result);
// console.log(result2);

// Prog # 3

// function addPara(text) {
//     let p = document.createElement('p');
//     p.textContent = text;
//     document.body.appendChild(p);
// }

// addPara(prompt("Enter the text to display"));

// Prog # 4

// function addLi(text) {
//     let ul = document.querySelector("ul");
//     let listItem = document.createElement("li");
//     listItem.textContent = text;
//     ul.appendChild(listItem);
// }

// addLi(prompt("Enter the list item"));

// Prog # 5

// function changeBgColor(element, color) {
//     let ele = document.getElementById(element);
//     ele.style.background = color;
// }

// changeBgColor(prompt("Enter the id of HTML element"), prompt("Enter the color name or color code"));

// Prog # 6

// let obj = { name: "Awais Ayub", age: 23, desg: "Web Developer" };

// function saveToLocalStorage(key, object) {
//     localStorage.setItem(key, JSON.stringify(object));
// }
// let key = prompt("Enter object key");
// saveToLocalStorage(key, obj);

// let getObj = JSON.parse(localStorage.getItem(key));
// console.log(getObj);

// Prog # 7

// let myObj = {
//     id: "301",
//     employeeName: "Awais Ayub",
//     mobile: "123456789"
// };
// let key = prompt("Enter the key to store the object");
// localStorage.setItem(key, JSON.stringify(myObj));

// function getValueFromLocal(objkey) {
//     let returnedobj = localStorage.getItem(objkey);
//     if(returnedobj === null){
//         return null;
//     } else {
//         return JSON.parse(returnedobj);
//     }
// }

// console.log(getValueFromLocal(key));

// Prog # 8


function saveAndGet(obj) {
    Object.entries(obj).forEach(function([key, value]){
        localStorage.setItem(key, JSON.stringify(value));
    })

    let newObj = {};
    Object.keys(obj).forEach(function (key){
        let item = localStorage.getItem(key);
        newObj[key] = JSON.parse(item);
    })

    return newObj;
}

let myObj = {
    id: "301",
    employeeName: "Awais Ayub",
    mobile: "123456789"
};

let receivedObj = saveAndGet(myObj);
console.log(receivedObj);




