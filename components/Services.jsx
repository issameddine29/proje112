const services = [
  {
    title: "Nettoyage de bureaux",
    description: "Hygiène irréprochable pour vos espaces professionnels.",
    image: "/img/service-bureau.jpg",
  },
  {
    title: "Nettoyage après chantier",
    description: "Remise à neuf après travaux ou rénovations.",
    image: "/img/service-chantier.jpg",
  },
  {
    title: "Nettoyage de vitres",
    description: "Vitrines, fenêtres, baies vitrées – transparence parfaite.",
    image: "/img/service-vitres.jpg",
  },
  {
    title: "Entretien immeubles",
    description: "Nettoyage complet des communs, escaliers, parkings.",
    image: "/img/service-immeuble.jpg",
  },
  {
    title: "Appartements Airbnb",
    description: "Service rapide et impeccable entre chaque locataire.",
    image: "/img/service-airbnb.jpg",
  },
  {
    title: "Tapis & moquettes",
    description: "Désinfection, dégraissage, neutralisation des odeurs.",
    image: "/img/service-tapis.jpg",
  },
  {
    title: "Désinfection sanitaire",
    description: "Procédés antibactériens & antiviraux certifiés.",
    image: "/img/service-desinfection.jpg",
  },
  {
    title: "Espaces extérieurs",
    description: "Terrasses, parkings, escaliers et sols extérieurs.",
    image: "/img/service-exterieur.jpg",
  },
  {
    title: "Services sur-mesure",
    description: "Nettoyage spécifique selon vos exigences.",
    image: "/img/service-surmesure.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Nos Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((s, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={s.image}
              alt={s.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{s.description}</p>
              <button className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800">
                En savoir plus
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
