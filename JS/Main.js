let colorArray = ["#d3f585", "#a6e8f6", "#fcbedc", "#fbc899", "#f1f1f1"];

// Header Menu For Mobile Start

let menu = document.querySelector(".header .container i");
let links = document.querySelector(".header .container .links");

function HeaderList(auto, menuStatus = "closed") {
  let status = auto ? menu.attributes.status.value : menuStatus;
  if (status === "closed") {
    links.style.cssText = "display:flex; right:0;";
    console.log(links.parentElement.parentElement);
    links.parentElement.parentElement.style.cssText =
      "background-color:#1d1e1c;";
    document.querySelector(".header .container .logo").style.cssText =
      "color:white;";
    menu.attributes.status.value = "open";
  } else {
    links.style.cssText = " right:-100%;";
    links.parentElement.parentElement.style.cssText = "background-color:white;";
    document.querySelector(".header .container .logo").style.cssText =
      "color:#1d1e1c;";
    menu.attributes.status.value = "closed";
  }
}

menu.addEventListener("click", () => {
  HeaderList(true);
  console.log("hi");
});

window.addEventListener("resize", () => {
  window.innerWidth >= 767 &&
    menu.attributes.status.value == "open" &&
    HeaderList(true, "closed");
});

// Header Menu For Mobile End

// Video Section Start
let playbutton = document.querySelector(
  ".virtual-tour .container .video .icon",
);
let video = document.querySelector(".virtual-tour .container .video video");

function PlayVideo() {
  video.attributes.status.value = "play";
  playbutton.style.cssText = "opacity:0;";
  video.play();
}

function PuaseVideo() {
  video.attributes.status.value = "paused";
  playbutton.style.cssText = "opacity:1;";
  video.pause();
}

playbutton.addEventListener("click", () => {
  let status = video.attributes.status.value;
  if (status === "paused") {
    PlayVideo();
  } else {
    PuaseVideo();
  }
});

video.addEventListener("click", () => {
  let status = video.attributes.status.value;
  if (status === "paused") {
    PlayVideo();
  } else {
    PuaseVideo();
  }
});

// Video Section End

// Testimonials Section Start
let cards = document.querySelectorAll(".testimonials .content .card");
let arrows = document.querySelectorAll(".testimonials .content .arrows");

let cardIndex = 0;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (arrow.classList.contains("right-arrow")) {
      if (cardIndex < cards.length - 1) {
        cards[cardIndex].classList.remove("active");
        cards[cardIndex].style.cssText =
          "transform: translateX(-100%);opacity : 0;";
        cards[cardIndex + 1].style.cssText =
          "transform: translateX(-100%) translateX(-32px);";
        cards[cardIndex + 1].classList.add("active");
        cardIndex += 1;
      }
    } else {
      if (cardIndex > 0) {
        cards[cardIndex - 1].classList.add("active");
        cards[cardIndex - 1].style.cssText =
          "opacity : 1; transform: translateX(-100%) translateX(-32px);";
        cards[cardIndex].classList.remove("active");
        cards[cardIndex].style.cssText =
          "transform: translateX(100%) translateX(-32px);";
        cardIndex -= 1;
      }
      if (cardIndex === 0) {
        cards[0].style.cssText = "opacity : 1; transform: translateX(0%);";
      }
    }

    if (cardIndex == cards.length - 1) {
      arrows[1].style.cssText = "color:#8E8F98;";
    } else if (cardIndex === 0) {
      arrows[0].style.cssText = "color:#8E8F98;";
    } else {
      arrows.forEach((e) => {
        e.style.cssText = "color:#1d1e1c;";
      });
    }
  });
});
// Testimonials Section End

// FAQ Section Start
let questions = document.querySelectorAll(".faq .item");

questions.forEach((ques) => {
  ques.addEventListener("click", () => {
    if (ques.classList.contains("active")) {
      ques.classList.remove("active");
      ques.firstElementChild.lastElementChild.classList.remove("fa-rotate-180");
    } else {
      ques.classList.add("active");
      ques.firstElementChild.lastElementChild.classList.add("fa-rotate-180");
    }
    //
  });
});
// FAQ Section End

// Blog Section Start
let infoType = document.querySelectorAll(
  ".blog .cards .card .info .status .strong-paragraph",
);

let infoTypeColor = {
  Trending: "#a6e8f6",
  Productivity: "#fcbedc",
  Talk: "#d3f585",
  other: "#fbc899",
};
console.log(infoTypeColor);
infoType.forEach((ele, ind) => {
  if (infoTypeColor.hasOwnProperty(ele.textContent)) {
    ele.style.cssText = `background-color:${infoTypeColor[ele.textContent]}`;
  } else {
    ele.style.cssText = `background-color:${infoTypeColor[other]}`;
  }
});
// Blog Section End

// Footer Actions start
document
  .querySelector(".footer .content .newsletter form .white-button")
  .addEventListener("click", (e) => {
    e.preventDefault();
  });
// Footer Actions end
