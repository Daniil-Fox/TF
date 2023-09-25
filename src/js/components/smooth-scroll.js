import Lenis from '@studio-freight/lenis'
import ScrollTrigger from 'gsap/ScrollTrigger'
const lenis = new Lenis({
	lerp: 0.07,
	wheelMultiplier: 0.7,
	touchMultiplier: 0.7,
	orientation: "vertical",
	gestureOrientation: "vertical",
	normalizeWheel: false,
	infinite: false,
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
