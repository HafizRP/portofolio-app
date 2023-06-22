import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HomeSection } from "./layouts/Home";
import { Flowbite } from "flowbite-react";
import { PortofolioSection } from "./layouts/Portofolio";
import SkillsSection from "./layouts/Skills";
import ContactSection from "./layouts/Contact";
import { Icon } from "@iconify/react";
import SocialComponent from "./components/Social";

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
    observer.observe(document.getElementById("projects"));
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
        id="projects"
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

      <footer class="bg-white rounded-lg shadow dark:bg-gray-800">
        <div class="w-full flex flex-col mx-auto max-w-screen-xl gap-y-4 p-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-row justify-center gap-x-3 dark:text-white">
            <a
              href="https://www.linkedin.com/in/hafizrp"
              className="border p-1 rounded-full border-black dark:border-white hover:text-blue-700 dark:hover:text-blue-400 dark:hover:border-blue-400 hover:border-blue-700 hover:transition-all hover:scale-110"
            >
              <Icon icon="mdi:linkedin" width="30"></Icon>
            </a>
            <a
              href="mailto:hafizrahmadputra213@gmail.com"
              className="border p-1 rounded-full border-black dark:border-white hover:text-blue-700 dark:hover:text-blue-400 dark:hover:border-blue-400 hover:border-blue-700 hover:transition-all hover:scale-110"
            >
              <Icon icon="mdi:gmail" width="30"></Icon>
            </a>
            <a
              href="https://github.com/HafizRP"
              className="border p-1 rounded-full border-black dark:border-white hover:text-blue-700 dark:hover:text-blue-400 dark:hover:border-blue-400 hover:border-blue-700 hover:transition-all hover:scale-110"
            >
              <Icon icon="bi:github" width="30"></Icon>
            </a>
            <a
              href="https://wa.me/0895340016863"
              className="border p-1 rounded-full border-black dark:border-white hover:text-blue-700 dark:hover:text-blue-400 dark:hover:border-blue-400 hover:border-blue-700 hover:transition-all hover:scale-110"
            >
              <Icon icon="ic:outline-whatsapp" width="30"></Icon>
            </a>
            <a
              href="https://t.me/HafizRP23"
              className="border p-1 rounded-full border-black dark:border-white hover:text-blue-700 dark:hover:text-blue-400 dark:hover:border-blue-400 hover:border-blue-700 hover:transition-all hover:scale-110"
            >
              <Icon icon="ic:baseline-telegram" width="30"></Icon>
            </a>
          </div>
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 block md:text-start text-center">
            Created by{" "}
            <span className="text-blue-700 dark:text-blue-400">
              Hafiz Rahmad Putra
            </span>
          </span>
        </div>
      </footer>
    </Flowbite>
  );
}

export default App;
