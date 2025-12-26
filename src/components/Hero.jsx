export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center px-6">
	  <h1 className="text-5xl font-bold text-white drop-shadow-lg">Umesh DC</h1>
        <p className="mt-3 text-xl text-gray-300">
          Java Full Stack Developer (Fresher)
        </p>
        <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
          I build full-stack web applications using Java, Spring Boot, and React.
        </p>
		<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
         <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
