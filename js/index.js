gsap.to(".box1", {
  x: 500,
  rotate: 360,
  borderRadius: 200,
  duration: 2,
  delay: 1,
  color: "blue",
  scrollTrigger: {
    trigger: "#page1",
    start: "top 0%",
    end: "bottom 60%",
    scrub: true,
  },
});

gsap.to(".box2", {
  rotate: 360,
  x: -800,
  y: -325,
  duration: 2,
  delay: 1,
  scrollTrigger: {
    trigger: "#page2",
    start: "top 0%",
    end: "bottom center",
    scrub: true,
  },
});

gsap.to(".box3", {
  x: 800,
  duration: 2,
  delay: 1,
  scrollTrigger: {
    trigger: "#page3",
    start: "top 0%",
    end: "bottom 50%",
    scrub: true,
  },
});

gsap.to(".extra h1", {
  transform: "translateX(-100%)",
  scrollTrigger: {
    trigger: ".extra",
    scroller: "body",
    start: "top 0%",
    end: "bottom -50%",
    scrub: 2,
    pin: true,
  },
});

gsap.to(".innerslide", {
    
  transform: "translateX(-100%)",
  scrollTrigger: {
    trigger: ".mainSlide",
    scroller: "body",
    start: "top 0%",
    end: "bottom -100%",
    scrub: 2,
    pin: true,
  },
});
