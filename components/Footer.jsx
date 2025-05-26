export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Morais Cleaning. Tous droits
          réservés.
        </div>

        <div className="flex gap-4 text-sm">
          <a
            href="mailto:contact@morais-cleaning.com"
            className="hover:underline"
          >
            contact@morais-cleaning.com
          </a>
          <a href="tel:+32499123456" className="hover:underline">
            +32 499 12 34 56
          </a>
          <a
            href="https://wa.me/32499123456"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
