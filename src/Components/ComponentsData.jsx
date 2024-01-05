import Hero from "./Hero/Hero";
import StickyNavbar from "./StickyNavbar/StickyNavbar";
import Carousel from "./Carousel/Carousel";
import Climb from "./Climb/Climb";
const CloseIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon close-icon" viewBox="0 0 512 512"><path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"/></svg>
    )
}

export { Hero, CloseIcon, StickyNavbar, Carousel, Climb }