export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-gray-300 mb-8">
        Feel free to reach out via email or LinkedIn.
      </p>
      <ul className="space-y-4">
        <li>Email: simranjitsingh58648@gmail.com</li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/simranjitsingh22"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Profile
          </a>
        </li>
      </ul>
    </section>
  );
}
