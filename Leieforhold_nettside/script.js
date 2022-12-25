const Page0 = {
  main: "",
  second: "",
  third: "",
};
const Page1 = {
  main: "",
  second: "",
  third: "",
};
const Page2 = {
  main: "",
  second: "",
  third: "",
};
const Page3 = {
  main: "",
  second: "",
  third: "",
};
const Page4 = {
  main: "",
  second: "",
  third: "",
};

let infoObjects = [];

let infoPages = document.getElementsByClassName("info-page");
let infoSection = document.getElementById("info-section");

console.log(infoSection);

for (let i = 0; i < infoPages.length; i++) {
  infoPages[i].id = `info-page-${i}`;
  infoObjects.push(`Page${i}`);
}

console.log(infoPages);
console.log(infoObjects);

$(".info-page").click(function () {
  let currentID = $(this)[0].id;
  console.log(currentID);
});
