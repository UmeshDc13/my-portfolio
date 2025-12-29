export default function Skills() {
  const skills = [
    "Java", "Spring Boot", "Hibernate", "JDBC",
    "React", "JavaScript", "HTML", "CSS",
    "MySQL", "Git", "GitHub", "Postman"
  ];

  return (
    <section className="bg-gray-900 text-white py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Tech Stack
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
        {skills.map(skill => (
          <div
            key={skill}
            className="bg-gray-800 py-4 rounded-lg text-center hover:bg-gray-700 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
