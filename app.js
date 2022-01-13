const h1Element = document.querySelector("#message");

const createAnotherElement = (whatItShouldSay) => {
  const newH2 = document.createElement("h2");
  newH2.innerText = whatItShouldSay;
  document.body.appendChild(newH2);
};

const myClickListener = function (eventDetails) {
  console.log(eventDetails.target);
  if (eventDetails.x < 150) {
    createAnotherElement("Hi Violet");
  } else {
    createAnotherElement("Hi Joe");
  }
}

h1Element.addEventListener("click", myClickListener);

// h1Element.addEventListener("mousemove", function (mouseMoveEvent) {
//   console.log(mouseMoveEvent.x, mouseMoveEvent.y);
// });

// h1Element.addEventListener("mouseenter", function () {
//   console.log("i'm in here!");
// });

// h1Element.addEventListener("mouseleave", function () {
//   console.log("I have left!");
// });
