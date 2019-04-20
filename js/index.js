// 1. (click)
const btn = document.querySelectorAll(".btn");

btn.forEach(element => {
  element.addEventListener("click", function(e) {
    e.target.style.backgroundColor = "black";
  });
});

// 2. (click)
const logoDisappear = document.querySelector("h1");

logoDisappear.addEventListener("click", function(e) {
  e.target.style.display = "none";
});

// 3. (mouseover)
const mouseOver = document.querySelector("h1");

mouseOver.addEventListener("mouseover", function(e) {
  e.target.style.color = "red";
});

// 4. (dblclick) - stopPropagation()
const dblClick = document.querySelector(".welcome");

dblClick.addEventListener("dblclick", function(e) {
  e.stopPropagation();
  e.target.style.fontSize = "6rem";
});

// 5. (click)
const go = document.querySelector(".go");

go.addEventListener("click", function(e) {
  e.target.style.backgroundColor = "yellow";
});

// 6. (keydown)
const jContainer = document.querySelector("body");

jContainer.addEventListener("keydown", function(e) {
  if (e.key === "j") {
    if (e.target.style.display !== "none") {
      e.target.style.display = "none";
    } else {
      e.target.style.display = "block";
    }
  }
});

// 7. (drag)
const headerIntro = document.querySelector("header.intro");

headerIntro.addEventListener("drag", function(e) {
  e.target.style.display = "none";
});

// 8. (load) - preventDefault()
window.addEventListener("load", event => {
  event.preventDefault();
  console.log("Welcome to Fun Bus!");
});

// 9. (scroll)
const scroll = document.querySelector(".content-section");

scroll.addEventListener("wheel", function(e) {
  scroll.style.height = "600px";
});

// 10. (copy)
const funSunParagraph = document.querySelector(".destination p");

funSunParagraph.addEventListener("copy", function(e) {
  alert("Text Copied from Fun in the Sun");
  e.stopPropagation();
});
