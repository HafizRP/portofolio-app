import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HomeSection } from "./layouts/Home";
import { Flowbite } from "flowbite-react";
import { PortofolioSection } from "./layouts/Portofolio";
import SkillsSection from "./layouts/Skills";
import ContactSection from "./layouts/Contact";

function App() {
  useEffect(() => {
    Aos.init({ once: false });
    Aos.refresh();
  }, []);

  useEffect(() => {
    const config = {
      // rootMargin: "0px 0px 0px 0px",
      threshold: 0.7,
    };
    const observer = new IntersectionObserver(function (events, self) {
      events.forEach((event) => {
        const button = document.getElementById(`${event.target.id}-anchor`);
        if (event.isIntersecting) {
          console.log("intercepting");
          button.classList.add("nav-active");
        } else {
          console.log("not inctercept");
          button.classList.remove("nav-active");
        }
      });
    }, config);

    observer.observe(document.getElementById("home"));
    observer.observe(document.getElementById("about"));
    observer.observe(document.getElementById("skills"));
    observer.observe(document.getElementById("experiences"));

    return () => observer.disconnect();
  });

  return (
    <Flowbite>
      <header>
        <Navbar />
      </header>

      <section
        id="home"
        className="scroll-m-20 h-screen md:scroll-m-24 bg-gray-200 dark:bg-gray-800 dark:text-white"
      >
        <HomeSection></HomeSection>
      </section>
      <section
        id="about"
        className="h-screen pt-6 scroll-m-20 md:scroll-m-24 dark:bg-gray-900"
      >
        <PortofolioSection></PortofolioSection>
      </section>

      <section id="skills" className="h-screen scroll-m-20 md:scroll-m-24">
        <SkillsSection></SkillsSection>
      </section>

      <section
        id="experiences"
        className="h-screen scroll-m-20 md:scroll-m-24 dark:text-white"
      >
        <ContactSection></ContactSection>
      </section>
    </Flowbite>
  );
}

export default App;
