export default function Skills() {
  const skills = [
    "Java", "Spring Boot", "Hibernate", "JDBC",
    "React", "JavaScript", "HTML", "CSS",
    "MySQL", "Git", "GitHub", "Postman"
  ];

  return (
    <section className="bg-gray-800 text-white py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
        {skills.map((skill) => (
          <span
            key={skill}
			className="py-20"
            //className="px-4 py-2 bg-gray-700 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
