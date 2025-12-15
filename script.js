


var body = document.querySelector("body");
var curser = document.querySelector("#curser");
var sec4 = document.querySelector("#section4");


body.addEventListener("mousemove", function (dets) {
  gsap.to(curser, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "elastic.out(1,0.3)",

  })

})


sec4.addEventListener("mouseenter", function () {
  gsap.to(curser, {
    backgroundColor: "#fff",
  })
})

sec4.addEventListener("mouseleave", function () {
  gsap.to(curser, {
    backgroundColor: "#F3C77C",
  })
})




const images = [
  "./img2.svg",
  "./img3.svg",
  "./img4.svg",
  "./img5.svg",
  "./img6.svg",
  "./img7.svg",
  "./img8.svg",
  "./img9.svg",
  "./img10.svg",
  "./img11.svg",
];

const preloader = document.getElementById("preloader");
const loaderImg = document.getElementById("loader-image");

let index = 0;

function showNextImage() {
  if (index >= images.length) {
    gsap.to(preloader, {
      opacity: 1,
      duration: 0.3,
      onComplete: () => {
        preloader.style.display = "none";
        startMainAnimation();
      }
    });
    return;
  }

  loaderImg.src = images[index];

  gsap.fromTo(
    loaderImg,
    { opacity: 1, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.1,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(loaderImg, {
          opacity: 0,
          duration: 0.1,
          delay: 0.05,
          onComplete: () => {
            index++;
            showNextImage();
          }
        });
      }
    }
  );
}

window.addEventListener("load", showNextImage);


function startMainAnimation() {
  const tl = gsap.timeline();

  tl.to(".bar", {
    height: 0,
    duration: 0.3,
    ease: "power2.inOut",
    stagger: {
      amount: 0.5
    }
  });

  tl.from("nav *", {
    y: -40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power3.out"
  }, ">-0.2");

  tl.from("menu h3", {
    y: -40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power3.out"
  }, "<");

  tl.from("#hero-title h1", {
    y: 100,
    opacity: 0,
    duration: 0.9,
    stagger: 0.15,
    ease: "back.out(1.7)",
    transformOrigin: "center bottom"
  }, ">-0.1");
}


// =================================






gsap.to("#section3 video", {
  width: "100%",
  height: "100%",
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#section3",
    start: "top 90%",
    end: "bottom top",
    scrub: 2,
    duration: 0.5
  },
});




// Text Animation

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section8",
    scroller: "body",
    start: "top top",
    end: "bottom -500%",
    scrub: 1,
    pin: true,
  }
});

tl.to("#section8 h1", {
  xPercent: -32,

}, 0);

tl.to("#section8 #section8-img", {
  xPercent: -92,

}, 0);




