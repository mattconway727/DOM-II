// 1. (click) Change the background color on all 3 of the sign up buttons when clicked.
const btn = document.querySelectorAll(".btn");

btn.forEach(element => {
  element.addEventListener("click", function(e) {
    e.target.style.backgroundColor = "black";
  });
});

// 2. (click) Make the Fun Bus h1 disappear.
const logoDisappear = document.querySelector("h1");

logoDisappear.addEventListener("click", function(e) {
  e.target.style.display = "none";
});

// 3. (mouseover)

// 4. (keydown)

// 5. (wheel)

// 6. (dblclick)

// 7. (drag/drop)

// 8. (focus)

// 9. (scroll)

// 10. (select)

// Use stopProgagation() and preventDefault()
