import { Icon } from "@iconify/react";

export default function ContactSection() {
  return (
    <div className="container px-4 md:px-8 mx-auto">
      <span className="text-xl font-semibold">
        <span className="border-b-2 border-blue-400 dark:border-blue-700">
          Experi
        </span>
        ence
      </span>

      <ol
        class="relative border-l mt-3 border-gray-200 dark:border-gray-700"
        data-aos="fade-up"
      >
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Feb 2022 - Dec 2022
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Web Developer (Internship)
          </h3>
          <p class="mb-4 text-sm md:text-base font-normal text-gray-500 dark:text-gray-400">
            Creating Web Apps for monitoring and logging data from PLC to
            Database and create summary about the data via chart
          </p>

          <div className="flex flex-wrap gap-y-2 flex-row md:gap-x-3">
            <img src="/experience/1.jpeg" className="w-96" alt="" srcset="" />
            <img
              src="/experience/2.png"
              className="w-20 gap-4 pr-1 md:pr-0 md:w-56 basis-1/2 md:basis-auto"
              alt=""
              srcset=""
            />
            <img
              src="/experience/3.png"
              className="w-20 gap-4 pl-1 md:pl-0 md:w-56 basis-1/2 md:basis-auto"
              alt=""
              srcset=""
            />
          </div>
        </li>
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Jan 2023 - Now
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Looking for job...
          </h3>
        </li>
      </ol>
    </div>
  );
}
