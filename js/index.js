function homepageAnimation() {
  gsap.set(".slidesm", { scale: 5 });
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
  });

  tl.to(
    ".vdo_div",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  )

    .to(
      ".slidesm",
      {
        scale: 1.5,
        ease: Power2,
      },
      "a"
    )

    .to(
      ".lft",
      {
        xPercent: -10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    )

    .to(
      ".rgt",
      {
        xPercent: 10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    );
}

function realPageAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: -200,
    ease: Power4,
  });
}
function TeamPageAnimation() {
  document.querySelectorAll(".listelem").forEach((elem) => {
    elem.addEventListener("mousemove", function (detas) {
      gsap.to(this.querySelector(".picture"), {
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, detas.clientX),
        opacity: 1,
        ease: Power4,
        duration: 0.5,
      });
    });
    elem.addEventListener("mouseleave", function (detas) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}
function paraPageAnimation() {
  var clutter = "";
  document
    .querySelector(".textpara")
    .textContent.split("")
    .forEach((e) => {
      if (e === " ") clutter += `<span>&nbsp;</span>`;
      clutter += `<span>${e}</span>`;
    });
  document.querySelector(".textpara").innerHTML = clutter;

  gsap.set(".textpara span", {
    opacity: 0.1,
  });
  gsap.to(".textpara span", {
    opacity: 1,
    stagger: 0.03,
    ease: Power4,
    scrollTrigger: {
      trigger: ".para",
      start: "top 60%",
      end: "bottom 90%",
      scrub: 2,
    },
  });
}

function lokoMotive() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

function capsulsAnimation() {
  gsap.to(".capsul:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1,
    },
    y: 0,
    ease: Power4,
  });
}

function bodyColorAnimation(){
    document.querySelectorAll(".section").forEach(function (e) {
        ScrollTrigger.create({
          trigger: e,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: function () {
            document.body.setAttribute("theme", e.dataset.color);
          },
          onEnterBack: function () {
            document.body.setAttribute("theme", e.dataset.color);
          },
        });
      });
}


homepageAnimation();
realPageAnimation();
TeamPageAnimation();
paraPageAnimation();
lokoMotive();
capsulsAnimation();
bodyColorAnimation();
