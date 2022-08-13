

gsap.registerPlugin(SplitText);

var tl = gsap.timeline(),
  mySplitText = new SplitText("#quote", { type: "chars" }),
  chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set("#quote", { perspective: 800 });

// console.log(chars);

tl.from(chars, {
  duration: 0.5,
  opacity: 0,
  scale: 1,
  y: 2,
  rotationX: 360,
  transformOrigin: "0% 50% -50",
  ease: "Back.InOut",
  stagger: 0.1
});

document.getElementById("animate").onclick = function () {
  tl.restart();
};