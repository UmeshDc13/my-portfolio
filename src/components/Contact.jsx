export default function Contact() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 text-center">
      <p className="text-white font-semibold">Let’s connect</p>

      <div className="mt-4 flex gap-6 justify-center">
        <a href="mailto:umeshreddy1921@gmail.com" className="hover:text-white">
          Email
        </a>
        <a href="https://github.com/UmeshDc13" target="_blank" className="hover:text-white">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-white">
          LinkedIn
        </a>
      </div>

      <p className="mt-6 text-sm">© 2025 Umesh DC</p>
    </footer>
  );
}
