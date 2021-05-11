const spans = document.querySelectorAll("h1 span");

spans.forEach((index) =>
  index.addEventListener("mouseover", function (e) {
    index.classList.add("animated", "flip");
  })
);

spans.forEach((index) =>
  index.addEventListener("mouseout", function (e) {
    index.classList.remove("animated", "flip");
  })
);

const htmlBar = document.querySelector(".bar-html");
const cssBar = document.querySelector(".bar-css");
const jsBar = document.querySelector(".bar-js");
const dartBar = document.querySelector(".bar-dart");
const flutterBar = document.querySelector(".bar-flutter");
const javaBar = document.querySelector(".bar-java");
const pythonBar = document.querySelector(".bar-py");
const matlabBar = document.querySelector(".bar-matlab");

//For the Skill Bars
var t1 = new TimelineLite();

t1.fromTo(
  htmlBar,
  0.75,
  { width: `calc(0% - 6px)` },
  { width: `calc(60% - 6px)`, ease: Power4.easeout }
)
  .fromTo(
    cssBar,
    0.75,
    { width: `calc(0% - 6px)` },
    { width: `calc(60% - 6px)`, ease: Power4.easeout }
  )
  .fromTo(
    jsBar,
    0.75,
    { width: `calc(0% - 6px)` },
    { width: `calc(60% - 6px)`, ease: Power4.easeout }
  )
  .fromTo(
    dartBar,
    0.75,
    { width: `calc(0% - 6px)` },
    { width: `calc(65% - 6px)`, ease: Power4.easeout }
  )
  .fromTo(
    flutterBar,
    0.75,
    { width: `calc(0% - 6px)` },
    { width: `calc(40% - 6px)`, ease: Power4.easeout }
  )
  .fromTo(
    javaBar,
    0.75,
    { width: `calc(0% - 6px)` },
    { width: `calc(80% - 6px)`, ease: Power4.easeout }
  )
  .fromTo(
    pythonBar,
    0.75,
    { width: `calc(0% - 6px)` },
    { width: `calc(60% - 6px)`, ease: Power4.easeout }
  )
  .fromTo(
    matlabBar,
    0.75,
    { width: `calc(0% - 6px)` },
    { width: `calc(80% - 6px)`, ease: Power4.easeout }
  );

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: ".skills",
  triggerHook: 0,
})
  .setTween(t1)
  .addTo(controller);

function showRequiredCategory(event) {
  const getId = event.id;
  const links = document.querySelectorAll(".work-category button");
  for (i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("class")) {
      links[i].classList.remove("active");
    }
  }

  event.classList.add("active");
  const getCategory = document.querySelector(`.category-${getId}`);
  const categories = document.querySelectorAll('div[class^= "category-"]');

  for (i = 0; i < categories.length; i++) {
    if (categories[i].hasAttribute("class")) {
      categories[i].classList.remove("showCategory");
      categories[i].classList.add("hideCategory");
    }
  }

  getCategory.classList.remove("hideCategory");
  getCategory.classList.add("showCategory");
}
