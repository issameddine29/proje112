const testimonials = [
  {
    name: "Société ImmoClean",
    comment:
      "Un service irréprochable. Morais est notre partenaire depuis 3 ans, rien à redire.",
    rating: 5,
  },
  {
    name: "Résidence Prestige Uccle",
    comment:
      "Équipe discrète et efficace. Les clients sont impressionnés par la propreté.",
    rating: 5,
  },
  {
    name: "Cabinet dentaire Élite",
    comment: "Hygiène parfaite, rapide, ponctuel. Je recommande vivement.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Témoignages</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-700 italic mb-4">"{t.comment}"</p>
            <div className="flex items-center justify-between">
              <span className="font-semibold">{t.name}</span>
              <div className="text-yellow-500">
                {"★".repeat(t.rating)}
                {"☆".repeat(5 - t.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
