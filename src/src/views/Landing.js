import CoreBar from "../components/CoreBar";
import LandingHero from "../components/Landing/Hero";
import AboutHero from "../components/Landing/About";
import Features from "../components/Landing/Features";
import ContactHero from "../components/Landing/Contact";
import CoreFooter from "../components/CoreFooter";

function Landing(){
    return (
        <>
            <CoreBar />
            <LandingHero />
            <AboutHero />
            <Features />
            <ContactHero />
            <CoreFooter />
        </>
    );
}

export default Landing