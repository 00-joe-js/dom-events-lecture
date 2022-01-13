const h1Element = document.querySelector("#message");

const listener = function (eventDetails) {
    console.log(2+2);
 }

window.addEventListener("scroll", () => {
    console.log("scrolling")
})

h1Element.addEventListener("click", listener);

h1Element.addEventListener("mouseenter", function () {
    console.log("i'm in here!")
});

h1Element.addEventListener("mouseleave", function () {
    console.log("I have left!")
});