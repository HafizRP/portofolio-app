import { Tooltip } from "flowbite-react";

export function PortofolioSection() {
  return (
    <div className="container px-4 md:px-8 mx-auto dark:text-white dark:bg-gray-900">
      <span className="text-2xl py-5 block font-semibold">
        <span className="border-b-2 border-blue-400 dark:border-blue-700">
          Proje
        </span>
        cts
      </span>

      <div className="grid grid-cols-1 gap-y-20 md:gap-x-10 md:grid-cols-2 place-items-center overflow-x-hidden">
        <div className="grid grid-cols-2 place-items-center gap-x-1">
          <img
            src="/pms/2.png"
            data-aos="fade-down"
            data-aos-duration="1500"
            className="w-64 md:w-96 rounded-md"
            alt=""
          />
          <img
            src="/pms/3.png"
            data-aos="fade-right"
            data-aos-duration="1500"
            className="w-64 md:w-96 rounded-md"
            alt=""
          />
          <img
            src="/pms/1.png"
            data-aos="fade-left"
            data-aos-duration="1500"
            className="mt-[-2rem] md:mt-[-5rem] col-span-2 rounded-md w-64 md:w-96"
            alt=""
          />

          <div className="py-2 col-span-2">
            <span className="block text-center font-semibold">
              Power Monitoring System
            </span>

            <span className="block text-center font-sm py-4 font-thin">
              Build With
            </span>

            <div className="grid grid-cols-4 place-items-center">
              <Tooltip content="Vue JS">
                <img src="/vue.png" className="w-12 md:w-24" alt="" />
              </Tooltip>
              <Tooltip content="Node JS">
                <img src="/nodejs.png" className="w-12 md:w-24" alt="" />
              </Tooltip>
              <Tooltip content="PostgreSQL">
                <img src="/postgresql.png" className="w-12 md:w-24" alt="" />
              </Tooltip>
              <Tooltip content="Express JS">
                <img src="/express.png" className="rounded-sm" alt="" />
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 place-items-center gap-x-1">
          <img
            src="/tms/2.png"
            data-aos="fade-down"
            data-aos-duration="1500"
            className="w-64 md:w-96 rounded-md"
            alt=""
          />
          <img
            src="/tms/3.png"
            data-aos="fade-right"
            data-aos-duration="1500"
            className="w-64 md:w-96 rounded-md"
            alt=""
          />
          <img
            src="/tms/1.png"
            data-aos="fade-left"
            data-aos-duration="1500"
            className="mt-[-2rem] md:mt-[-5rem] col-span-2 rounded-md w-64 md:w-96"
            alt=""
          />

          <div className="py-2 col-span-2">
            <span className="block text-center font-semibold">
              Temperature Monitoring System
            </span>

            <span className="block text-center font-sm py-4 font-thin">
              Build With
            </span>

            <div className="grid grid-cols-4 place-items-center">
              <Tooltip content="Vue JS">
                <img src="/vue.png" className="w-12 md:w-24" alt="" />
              </Tooltip>
              <Tooltip content="Node JS">
                <img src="/nodejs.png" className="w-12 md:w-24" alt="" />
              </Tooltip>
              <Tooltip content="PostgreSQL">
                <img src="/postgresql.png" className="w-12 md:w-24" alt="" />
              </Tooltip>
              <Tooltip content="Express JS">
                <img src="/express.png" className="rounded-sm" alt="" />
              </Tooltip>
            </div>
          </div>
        </div>
        {/* <div className="w-full">
          <div className="relative">
            <img
              src="/pms/1.png"
              data-aos="fade-down"
              data-aos-duration="1500"
              className="absolute z-20 w-64 md:w-96 top-20 left-0 right-0 mx-auto rounded-md"
              alt=""
            />
            <img
              src="/pms/2.png"
              data-aos="fade-right"
              data-aos-duration="1500"
              className="absolute z-10 w-64 md:w-96 right-0 top-5 bottom-0 left-auto rounded-md"
              alt=""
            />
            <img
              src="/pms/3.png"
              data-aos="fade-left"
              data-aos-duration="1500"
              className="absolute z-0 w-64 md:w-96 top-5 right-auto rounded-md"
              alt=""
            />

            <div className="absolute w-full top-52 md:top-64 pt-2">
              <span className="block text-center font-semibold">
                Power Monitoring System
              </span>

              <span className="block text-center font-sm py-4 font-thin">
                Build With
              </span>

              <div className="grid grid-cols-4 place-items-center">
                <Tooltip content="Vue JS">
                  <img src="/vue.png" className="w-12 md:w-24" alt="" />
                </Tooltip>
                <Tooltip content="Node JS">
                  <img src="/nodejs.png" className="w-12 md:w-24" alt="" />
                </Tooltip>
                <Tooltip content="PostgreSQL">
                  <img src="/postgresql.png" className="w-12 md:w-24" alt="" />
                </Tooltip>
                <Tooltip content="Express JS">
                  <img src="/express.png" className="rounded-sm" alt="" />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="relative">
            <img
              src="/tms/1.png"
              data-aos="fade-down"
              data-aos-duration="1500"
              className="absolute z-20 w-64 md:w-96 top-9 left-0 right-0 mx-auto rounded-md"
              alt=""
            />
            <img
              src="/tms/2.png"
              data-aos="fade-right"
              data-aos-duration="1500"
              className="absolute z-10 w-64 md:w-96 right-0 top-5 bottom-0 left-auto rounded-md"
              alt=""
            />
            <img
              src="/tms/3.png"
              data-aos="fade-left"
              data-aos-duration="1500"
              className="absolute z-0 w-64 md:w-96 top-5 right-auto rounded-md"
              alt=""
            />

            <div className="absolute w-full top-52 md:top-64 pt-2">
              <span className="block text-center font-semibold">
                Power Monitoring System
              </span>

              <span className="block text-center font-sm py-4 font-thin">
                Build With
              </span>

              <div className="grid grid-cols-4 place-items-center">
                <Tooltip content="Vue JS">
                  <img src="/vue.png" className="w-12 md:w-24" alt="" />
                </Tooltip>
                <Tooltip content="Node JS">
                  <img src="/nodejs.png" className="w-12 md:w-24" alt="" />
                </Tooltip>
                <Tooltip content="PostgreSQL">
                  <img src="/postgresql.png" className="w-12 md:w-24" alt="" />
                </Tooltip>
                <Tooltip content="Express JS">
                  <img src="/express.png" className="rounded-sm" alt="" />
                </Tooltip>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
