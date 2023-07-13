const page0 = {
  main: `<p>Lorem <span>ipsum</span> dolor sit amet consectetur adipisicing elit. Non, id explicabo eligendi, ratione molestiae placeat labore deserunt nihil omnis nam, inventore qui fugit sapiente? Iste maiores voluptatem rerum voluptate dolorem.</p>`,
  second: "",
  third: "",
};
const page1 = {
  main: `<p>Lorem <span>ipsum</span> dolor sit amet consectetur adipisicing elit. Non, id explicabo eligendi, ratione molestiae placeat labore deserunt nihil omnis nam, inventore qui fugit sapiente? Iste maiores voluptatem rerum voluptate dolorem.</p>`,
  second: "",
  third: "",
};
const page2 = {
  main: `<p>Lorem <span>ipsum</span> dolor sit amet consectetur adipisicing elit. Non, id explicabo eligendi, ratione molestiae placeat labore deserunt nihil omnis nam, inventore qui fugit sapiente? Iste maiores voluptatem rerum voluptate dolorem.</p>`,
  second: "",
  third: "",
};
const page3 = {
  main: `<p>Lorem <span>ipsum</span> dolor sit amet consectetur adipisicing elit. Non, id explicabo eligendi, ratione molestiae placeat labore deserunt nihil omnis nam, inventore qui fugit sapiente? Iste maiores voluptatem rerum voluptate dolorem.</p>`,
  second: "",
  third: "",
};
const page4 = {
  main: `<p>Lorem <span>ipsum</span> dolor sit amet consectetur adipisicing elit. Non, id explicabo eligendi, ratione molestiae placeat labore deserunt nihil omnis nam, inventore qui fugit sapiente? Iste maiores voluptatem rerum voluptate dolorem.</p>`,
  second: "",
  third: "",
};
const page5 = {
  main: `<p>Lorem <span>ipsum</span> dolor sit amet consectetur adipisicing elit. Non, id explicabo eligendi, ratione molestiae placeat labore deserunt nihil omnis nam, inventore qui fugit sapiente? Iste maiores voluptatem rerum voluptate dolorem.</p>`,
  second: "",
  third: "",
};

let infoObjects = [page0, page1, page2, page3, page4, page5];

const infoPages = document.getElementsByClassName("info-page");
const infoSection = document.getElementById("info-section");
const infoText = document.getElementById("info-text");
const backButton = document.getElementById("back-button");

for (let i = 0; i < infoPages.length; i++) {
  infoPages[i].id = `info-page-${i}`;
  infoObjects.push(`page${i}`);
}

$(".info-page").click(function () {
  let currentPage = $(this)[0].id;
  let currentId = currentPage.slice(-1);
  updateInfo(currentId);
});

function updateInfo(index) {
  infoSection.style.height = "85%";
  infoSection.style.backgroundColor = "#326789";
  infoText.style.display = "";
  backButton.style.display = "";
}

$("#back-button").click(function () {
  infoSection.style.height = 0;
  infoSection.style.backgroundColor = "none";
  infoText.style.display = "none";
  backButton.style.display = "none";
  currentObject = "";
  console.log(currentObject);
});

let fName = document.getElementById("fname");
let email = document.getElementById("email");
let message = document.getElementById("message");

$("#submit-button").click(function () {
  $("#liveToast").toast("show");
  fName.value = "";
  email.value = "";
  message.value = "";
  setTimeout(function () {
    $("#liveToast").toast("hide");
  }, 3000);
});
