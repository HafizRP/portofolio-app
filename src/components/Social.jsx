import { Icon } from "@iconify/react";

export default function SocialComponent() {
  return (
    <div className="flex flex-row justify-center gap-x-3 dark:text-white">
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
      <a
        href="mailto:hafizrahmadputra213@gmail.com"
        className="border p-1 rounded-full border-black dark:border-white hover:text-blue-700 dark:hover:text-blue-400 dark:hover:border-blue-400 hover:border-blue-700 hover:transition-all hover:scale-110"
      >
        <Icon icon="ic:baseline-telegram" width="30"></Icon>
      </a>
    </div>
  );
}
