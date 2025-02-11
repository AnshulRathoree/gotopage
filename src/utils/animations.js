// Example: GSAP Animation Helper
import gsap from 'gsap';
export const fadeIn = (element) => {
    gsap.from(element, {
      opacity: 0,
      duration: 1,
      y: 50,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
      },
    });
  };
  
  export const slideIn = (element) => {
    gsap.from(element, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
      },
    });
  };