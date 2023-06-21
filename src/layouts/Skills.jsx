import { Tooltip } from "flowbite-react";
export default function SkillsSection() {
  return (
    <div className="container px-4 md:px-8 mx-auto dark:text-white dark:bg-gray-900">
      <span className="text-xl font-semibold">
        <span className="border-b-2 border-blue-400 dark:border-blue-700">
          Ski
        </span>
        lls
      </span>

      <div className="grid grid-cols-2 pt-10 md:grid-cols-3 place-items-center gap-y-10">
        <Tooltip content="Intermediate">
          <img
            src="/vue.png"
            className="w-28"
            data-aos-delay="100"
            data-aos="flip-left"
            alt="Vue JS"
            srcset=""
          />
        </Tooltip>
        <Tooltip content="Intermediate">
          <img src="/nodejs.png" className="w-28" alt="" data-aos="flip-left" />
        </Tooltip>
        <Tooltip content="Intermediate">
          <img
            src="/express.png"
            data-aos-delay="100"
            className="w-28"
            alt="Express"
            data-aos="flip-left"
          />
        </Tooltip>

        <Tooltip content="Intermediate">
          <img
            src="/mysql.png"
            className="w-28"
            alt="MySQL"
            data-aos-delay="150"
            data-aos="flip-left"
          />
        </Tooltip>

        <Tooltip content="Beginner">
          <img
            src="/postgresql.png"
            className="w-28"
            data-aos-delay="200"
            alt="PostgreSQL"
            data-aos="flip-left"
          />
        </Tooltip>

        <Tooltip content="Beginner">
          <img
            src="/mongodb.png"
            className="w-28"
            data-aos-delay="250"
            alt="MongoDB"
            data-aos="flip-left"
          />
        </Tooltip>

        <Tooltip content="Beginner">
          <img
            src="/sqlserver.png"
            className="w-28"
            data-aos-delay="300"
            alt="SQL Server"
            data-aos="flip-left"
          />
        </Tooltip>

        <Tooltip content="Beginner">
          <img
            src="/react.png"
            className="w-28"
            data-aos-delay="350"
            alt="React"
            data-aos="flip-left"
          />
        </Tooltip>
      </div>
    </div>
  );
}
