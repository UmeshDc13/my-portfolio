export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-950 text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        
        <div>
          <h1 className="text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="text-blue-500">Umesh DC</span>
          </h1>

		  <p className="mt-4 text-2xl text-gray-300">
		    Java Full Stack Developer | Fresher
		  </p>


		  <p className="mt-6 text-gray-400 max-w-xl">
		    I build scalable web apps using Java, Spring Boot, and React with clean backend logic.
		  </p>


          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="w-64 h-64 rounded-full bg-blue-600/20 border border-blue-500"></div>
        </div>

      </div>
    </section>
  );
}
