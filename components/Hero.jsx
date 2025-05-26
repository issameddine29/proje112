// src/components/Hero.jsx
export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/img/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          Morais – Nettoyage Haut de Gamme
        </h1>
        <p className="text-xl mb-8">
          Service premium pour sociétés, clients privés et établissements de
          prestige.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-red-700 hover:bg-red-800 px-6 py-3 rounded font-semibold">
            Demander un devis
          </button>
          <button className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-black">
            Prendre rendez-vous
          </button>
        </div>
      </div>
    </section>
  );
}
