export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold">Campus Placement Manager</h3>
        <p className="mt-2 text-gray-400">
          Role-based web application to manage college placement activities.
        </p>
        <p className="mt-3 text-sm text-gray-300">
          <b>Tech:</b> Java, JDBC, Servlets, JSP, MySQL
        </p>
        <a
          href="https://github.com/UmeshDc13"
          target="_blank"
		  className="py-20"
          //className="inline-block mt-4 text-blue-400 hover:underline"
        >
          View on GitHub →
        </a>
      </div>
    </section>
  );
}
