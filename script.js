// gsap.to("#box", {
//   x: 800,
//   duration: 2,
//   delay: 3,
//   backgroundColor: "red",
//   rotate: 360,
//   borderRadius: "50%",
//   scale: 0.5,
// });

gsap.from("h1", {
  y: 50,
  duration: 1,
  opacity: 0,
  delay: 1,
  stagger: 0.5,
});

gsap.to("#circle", {
  x: 1200,
  borderRadius: "10px",
  duration: 2.5,
  delay: 1,
  rotate: 360,
  backgroundColor: "red",
  repeat: 1, //  -1 ->infinite
  yoyo: true,
});

var tl = gsap.timeline();

tl.to("#box1", {
  x: 1200,
  duration: 2.5,
  delay: 1.5,
});

tl.to("#box2", {
  x: 1000,
  duration: 2.5,
  rotate: 360,
});

tl.to("#box3", {
  x: 800,
  duration: 2.5,
  rotate: -360,
});

gsap.from("#page1 #box", {
  scale: 0,
  rotate: 360,
  duration: 1,
  delay: 1,
});

gsap.from("#page2 #box", {
  scale: 0,
  rotate: 360,
  duration: 1,
  //   delay: 1,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: 5,
  },
});

gsap.from("#page3 #box", {
  scale: 0,
  rotate: 360,
  duration: 1,
  delay: 1,
});

gsap.to("#page3 #box", {
  x: 600,
  duration: 2,
  scrollTrigger: {
    trigger: "#page3 #box",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: true,
    pin: true,
  },
});
