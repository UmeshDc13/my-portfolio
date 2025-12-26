export default function Contact() {
  return (
    <section id="contact" className="bg-gray-800 text-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-gray-400">Let’s connect 👋</p>
      <div className="mt-6 flex gap-6 justify-center">
        <a href="mailto:umeshreddy1921@gmail.com" className="hover:underline">
          Email
        </a>
        <a href="https://github.com/UmeshDc13" target="_blank" className="hover:underline">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" className="hover:underline">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
