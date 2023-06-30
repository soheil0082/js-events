var addInp = document.querySelectorAll("input")[0];
var searchInp = document.querySelectorAll("input")[1];
var addBtn = document.querySelectorAll("button")[0];
var searchBtn = document.querySelectorAll("button")[1];
var addList = document.querySelectorAll("ul")[0];
var searchList = document.querySelectorAll("ul")[1];

var names = [];

addBtn.addEventListener("click", function () {
  item = addInp.value.trim().toLowerCase();
  addInp.value = null;
  if (item != "") {
    for (let i = 0; i < names.length; i++) {
      if (item == names[i]) return;
    }
    addList.innerHTML += `<li>${item}</li>`;
    names.push(item);
  }
});

searchBtn.addEventListener("click", function () {
  searchList.innerHTML = "";
  item = searchInp.value.trim().toLowerCase();
  searchInp.value = null;

  if (item != "") {
    for (let i = 0; i < names.length; i++) {
      if (names[i].includes(item)) {
        searchList.innerHTML += `<li>${names[i]}</li>`;
      }
    }
  }
});
