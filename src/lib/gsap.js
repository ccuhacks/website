import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { SplitText } from 'gsap/dist/SplitText';
import { ScrambleTextPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollSmoother);
gsap.registerPlugin(ScrambleTextPlugin);

export { gsap, ScrollTrigger, SplitText, ScrambleTextPlugin };
