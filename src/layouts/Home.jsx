import { Icon } from "@iconify/react";

export function HomeSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 place-items-center h-full container pt-20 px-4 md:px-16 mx-auto">
      <div data-aos="fade-left" data-aos-duration="1500">
        <img
          className="profile-img rounded-3xl"
          src="/profile.png"
          alt="user-img"
        />
      </div>
      <div data-aos="fade-right" data-aos-duration="1500">
        <h1 className="text-4xl font-bold">Hi, i am Hafiz</h1>
        <span className="block text-xl py-2 font-semibold">
          Backend Developer
        </span>
        <p className="text-sm md:text-base font-light">
          Hi, am Hafiz. I have big interest on{" "}
          <span className="font-medium border-b">Software development</span>,
          especially on{" "}
          <span className="font-medium border-b">Web Development</span>. I have
          skills in web development using Vue JS as well as building REST APIs
          using Node JS with MYSQL, SQL Server, and MongoDB. I can adapt well
          and have good English skills.
        </p>

        <div className="flex flex-row gap-x-3 pt-5">
          <a
            href="mailto:hafizrahmadputra213@gmail.com"
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
            href="mailto:hafizrahmadputra213@gmail.com"
            className="border p-1 rounded-full border-black dark:border-white hover:text-blue-700 dark:hover:text-blue-400 dark:hover:border-blue-400 hover:border-blue-700 hover:transition-all hover:scale-110"
          >
            <Icon icon="bi:github" width="30"></Icon>
          </a>
          <a
            href="mailto:hafizrahmadputra213@gmail.com"
            className="border p-1 rounded-full border-black dark:border-white hover:text-blue-700 dark:hover:text-blue-400 dark:hover:border-blue-400 hover:border-blue-700 hover:transition-all hover:scale-110"
          >
            <Icon icon="ic:outline-whatsapp" width="30"></Icon>
          </a>
        </div>
      </div>
    </div>
  );
}
