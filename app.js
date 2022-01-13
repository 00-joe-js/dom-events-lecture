const h1Element = document.querySelector("#message");
const mainElement = document.querySelector("main");
const sectionElement = document.querySelector("section");

const createAnotherElement = (whatItShouldSay) => {
  const newH2 = document.createElement("h2");
  newH2.innerText = whatItShouldSay;
  document.body.appendChild(newH2);
};

h1Element.addEventListener("click", function (eventDetails) {
  eventDetails.stopPropagation();
  if (eventDetails.x < 150) {
    createAnotherElement("Hi Violet");
  } else {
    createAnotherElement("Hi Joe");
  }
});

h1Element.addEventListener("click", function (eventDetails) {
  console.log("second listener for h1");
});

sectionElement.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("SECTION ELEMENT LOG");
});

mainElement.addEventListener("click", function (eventObject) {
  eventObject.stopPropagation();
  console.log("MAIN ELEMENT LOG");
});

document.body.addEventListener("click", function (banana) {
  createAnotherElement("You missed!");
});

window.addEventListener("keydown", (keyboardEvent) => {
  createAnotherElement("you typed on the body!");
  console.log("typed something!");
});

document.querySelector("#text-input").addEventListener("keydown", (e) => {
  e.stopPropagation();
});

// h1Element.addEventListener("mousemove", function (mouseMoveEvent) {
//   console.log(mouseMoveEvent.x, mouseMoveEvent.y);
// });

// h1Element.addEventListener("mouseenter", function () {
//   console.log("i'm in here!");
// });

// h1Element.addEventListener("mouseleave", function () {
//   console.log("I have left!");
// });
