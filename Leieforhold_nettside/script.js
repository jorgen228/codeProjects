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

const infoPages = document.getElementsByClassName("info-page");
const infoSection = document.getElementById("info-section");
const infoText = document.getElementById("info-text");
const backButton = document.getElementById("back-button");

console.log(infoSection);

for (let i = 0; i < infoPages.length; i++) {
  infoPages[i].id = `info-page-${i}`;
  infoObjects.push(`Page${i}`);
}

console.log(infoPages);
console.log(infoObjects);

$(".info-page").click(function () {
  let currentPage = $(this)[0].id;
  let currentId = currentPage.slice(-1);
  console.log(currentId);
  updateInfo(currentId);
  console.log(infoObjects);
});

function updateInfo(index) {
  let currentObject = infoObjects[index];
  console.log(currentObject);
  infoSection.style.height = "85%";
  infoSection.style.backgroundColor = "blue";
  infoText.style.display = "";
  backButton.style.display = "";
  // infoSection.classList.add("active");
}

$("#back-button").click(function () {
  infoSection.style.height = 0;
  infoSection.style.backgroundColor = none;
  infoText.style.display = "none";
  backButton.style.display = "none";
  currentObject = "";
  console.log(currentObject);
})
