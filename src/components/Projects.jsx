export default function Projects() {
  return (
    <section id="projects" className="bg-gray-950 text-white py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition">
          <h3 className="text-2xl font-semibold">
            Campus Placement Manager
          </h3>

          <p className="mt-4 text-gray-400">
            Role-based web application to manage college placement activities,
            companies, drives, and student applications.
          </p>

          <p className="mt-4 text-sm text-gray-300">
            <b>Tech:</b> Java, JDBC, Servlets, JSP, MySQL
          </p>

          <a
            href="https://github.com/UmeshDc13"
            target="_blank"
            className="inline-block mt-6 text-blue-400 hover:underline"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
